from eng_preprocessing import sentence_to_corpus , sentence_preprocessing
import numpy as np 
import pandas as pd 
import re , os
from transformers import *
import tensorflow as tf
from collections import Counter

tokenizer = AutoTokenizer.from_pretrained('bert-base-cased')
MAX_LEN = 70

class TFBertClassifier_ENG(tf.keras.Model):
    def __init__(self, model_name):
        super(TFBertClassifier_ENG, self).__init__()

        self.bert = TFBertModel.from_pretrained(model_name)
        self.maxpooling = tf.keras.layers.GlobalMaxPool1D()
        self.d1 = tf.keras.layers.Dense(128, activation='relu')
        self.dropout = tf.keras.layers.Dropout(0.1)
        self.d2= tf.keras.layers.Dense(32, activation = 'relu')
        self.classifier = tf.keras.layers.Dense(6, activation = 'sigmoid',
                                                 name="classifier")
        
        self.d1.trainable = True

    def get_config(self):
        
        config = super().get_config().copy()
        config.update({
            'bert':self.bert,
            'maxpooling':self.maxpooling,
            'dense1' : self.d1,
            'dropout':self.dropout,
            'dense2' : self.d2,
            'classifier':self.classifier,
        })
        return config
        
    def call(self, inputs, training=False):
        embeddings = self.bert(inputs)[0]
        pooled_output = self.maxpooling(embeddings)
        pooled_output = self.d1(pooled_output)
        pooled_output = self.dropout(pooled_output, training=training)
        pooled_output = self.d2(pooled_output)
        logits = self.classifier(pooled_output)
        return logits

def load_model(checkpoint_path):
    # 모델 객체 생성
    model = TFBertClassifier_ENG(model_name='bert-base-cased')
    model.load_weights(checkpoint_path)
    return model

def eng_emotion_predict(sentence, model):
    global MAX_LEN
    x_val = tokenizer(
        text=sentence,
        add_special_tokens=True,
        max_length=MAX_LEN,
        truncation=True,
        padding='max_length', 
        return_tensors='tf',
        return_token_type_ids = False,
        return_attention_mask = True,
        verbose = True)
    emo_dic =  ['surprise', 'love', 'happy', 'sadness', 'anger', 'fear']
    validation = model.predict({'input_ids':x_val['input_ids'],'attention_mask':x_val['attention_mask']})[0].tolist()
    return {k:v for k,v in zip(emo_dic, validation)}