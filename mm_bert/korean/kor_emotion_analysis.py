from kor_preprocessing import sentence_to_corpus , sentence_preprocessing , lexicon_tokenizer_komoran
from transformers import *
import tensorflow as tf
import pandas as pd
import numpy as np
from collections import Counter
from konlpy.tag import Komoran


kmoran = Komoran()
MAX_LEN = 158

tokenizer = BertTokenizer.from_pretrained("bert-base-multilingual-cased", cache_dir='bert_ckpt', do_lower_case=False)

# 감정 단어 사전 불러오기
def load_vocab(vocab_path , stopwords_path):
    vocab_df = pd.read_csv(vocab_path,encoding='cp949',index_col=0)
    vocab = vocab_df.T.to_dict()
    
    stopwords = [word.rstrip('\n') for word in open(stopwords_path, 'r',encoding='utf-8')]

    # 불용어 제거
    for word in stopwords:
        try:
            vocab.pop(word)
        # 이미 제거한 경우
        except KeyError:
            pass
    return vocab

def bert_tokenizer(sent):
    global MAX_LEN
    encoded_dict = tokenizer.encode_plus(
        text = sent,
        add_special_tokens = True, # Add '[CLS]' and '[SEP]'
        max_length = MAX_LEN,           # Pad & truncate all sentences.
        pad_to_max_length = True,
        return_attention_mask = True   # Construct attn. masks.
    )
    input_id = encoded_dict['input_ids']
    attention_mask = encoded_dict['attention_mask'] # And its attention mask (simply differentiates padding from non-padding).
    token_type_id = encoded_dict['token_type_ids'] # differentiate two sentences
    
    return input_id, attention_mask, token_type_id

class TFBertClassifier_KOR(tf.keras.Model):
    def __init__(self, model_name, dir_path):
        super(TFBertClassifier_KOR, self).__init__()

        self.bert = TFBertModel.from_pretrained(model_name, dir_path)
        self.dropout = tf.keras.layers.Dropout(self.bert.config.hidden_dropout_prob)
        self.classifier = tf.keras.layers.Dense(1,
                                                activation='sigmoid',
                                                kernel_initializer=tf.keras.initializers.TruncatedNormal(self.bert.config.initializer_range), 
                                                name="classifier")
    def get_config(self):
        
        config = super().get_config().copy()
        config.update({
            'bert':self.bert,
            'dropout':self.dropout,
            'classifier':self.classifier,
        })
        return config
        
    def call(self, inputs, attention_mask=None, token_type_ids=None, training=False):
        #outputs 값: # sequence_output, pooled_output, (hidden_states), (attentions)
        outputs = self.bert(inputs, attention_mask=attention_mask, token_type_ids=token_type_ids)
        pooled_output = outputs[1] 
        pooled_output = self.dropout(pooled_output, training=training)
        logits = self.classifier(pooled_output)
        return logits
    
def load_model_kor(checkpoint_path):
    # 모델 객체 생성
    model = TFBertClassifier_KOR(model_name='bert-base-multilingual-cased', dir_path='bert_ckpt')
    model.load_weights(checkpoint_path)
    return model

# 문장 -> 버트 input 값으로 변환
def sentence_convert_data(data):
    tokens , masks , segment = [],[],[]
    input_id , attention_mask , token_type_id = bert_tokenizer(data)
    
    tokens.append(input_id)
    masks.append(attention_mask)
    segment.append(token_type_id)
    
    tokens = np.array(tokens,dtype=int)
    masks = np.array(masks,dtype=int)
    segments = np.array(segment,dtype=int)
    
    return [tokens,masks,segments]

# 문장 긍/부정 판별 함수
def sentence_evaluation_predict(sentence, model):
    data_x = sentence_convert_data(sentence)
    predict = model.predict(data_x)
    predict_answer = np.round(predict, 0)
    
#     if predict_answer == 0:
#         print("(부정 확률 : %.2f) 부정적인 가사입니다." % (1-predict_value))
#     elif predict_answer == 1:
#         print("(긍정 확률 : %.2f) 긍정적인 가사입니다." % predict_value)
    return int(predict_answer)

def hybrid_emotion_clf(sentence,model,vocab):
    emotion_score = Counter()
    # 단어 별로 감정 점수를 더함    
    for word in lexicon_tokenizer_komoran(sentence, kmoran):
        try:
            #문장이 가지고 있는 각 단어들의 감정점수를 합산
            emotion_score = emotion_score + Counter(vocab[word])
        except KeyError: # 단어가 vocab에 없는 경우는 pass
            pass
    # 문장이 가지고 있는 감정 점수
    emotion_score = dict(emotion_score)
    
    # 긍정일 경우 슬픔/분노/공허 점수를 제거
    if sentence_evaluation_predict(sentence,model) == 1:
        try:
            emotion_score.pop('sadness')
            emotion_score.pop('anger')
            emotion_score.pop('lonely')
            emotion_score.pop('longing')
            emotion_score.pop('fear')
        except:
            pass
        return emotion_score
    # 부정일 경우 떨림/사랑/즐거움 점수를 제거
    elif sentence_evaluation_predict(sentence,model) == 0:
        try:
            emotion_score.pop('love')
            emotion_score.pop('fun')
            emotion_score.pop('enthusiasm')
            emotion_score.pop('happyness')
        except:
            pass
        return emotion_score

def hybrid_emotion_analysis(sentence,model,vocab):
    
    # None fittering & 짧은 가사 제거 "50미만" ex)기타 연주곡입니다.
    if sentence == "None" and len(sentence) < 50 :
        return [None ,None,None]
    # 가사데이터 문장 분할 및 전처리
    corpus = sentence_preprocessing(sentence_to_corpus(sentence))
    emotion_score = Counter()
    for sentence in corpus:
        emotion_score = emotion_score + Counter(hybrid_emotion_clf(sentence,model,vocab))
    
    return emotion_score
    
def hybrid_emotion_export_persent(sentence,model,vocab):
    # 가사데이터 문장 분할 및 전처리
    corpus = sentence_preprocessing(sentence_to_corpus(sentence))
    emotion_score = Counter()
    for sentence in corpus:
        emotion_score = emotion_score + Counter(hybrid_emotion_clf(sentence,model,vocab))
    
    # 예측결과를 비율(%)로 변경.
    total = sum(emotion_score.values())
    for emotion in list(emotion_score.keys()):
        emotion_score[emotion] = round((emotion_score[emotion] / total),5)
        
    emotion_score = dict(emotion_score) # 감정별 비율이 들어있는 dict
    
    # 한국어에는 없는 감정 : 놀람
    emotion_score['5369'] = 0 # 놀람

    emo_list = ['love', 'fun', 'enthusiasm', 'happiness', 'sadness', 'anger', 'loneliness', 'longing', 'fear', 'surprise']
    
    return {k:v for k,v in zip(emo_list, emotion_score.values())}