from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import UserEmotion, MusicInfo, MusicEmotion
from playList.models import UserPlayGroup, UserPlayList
import numpy as np
import pickle
from datetime import datetime
from sklearn.metrics.pairwise import cosine_similarity
from .serializers import MusicInfoSerializer
from .serializers import FilteredMusicInfoSerializer
from .serializers import GenreSerializer
from .serializers import TitleSerializer
from .serializers import song2VecSerializer
from playList.views import PlayGroupViewSet


class MusicRecommendViewSet(viewsets.ViewSet):
    def create(self, request):
        # serializer = MusicRecommendSerializer(data=request.data)
        # serializer.is_valid() # raise_exception=True
        emotion_values = request.data.get('emotions')
        
        user_emotion = UserEmotion.objects.create(
            love=emotion_values[0],
            joy=emotion_values[2],
            passion=emotion_values[4],
            happiness=emotion_values[6],
            sadness=emotion_values[1],
            anger=emotion_values[3],
            loneliness=emotion_values[5],
            longing=emotion_values[7],
            fear=emotion_values[9],
            surprise=emotion_values[8]
        )

        music_emotions = MusicEmotion.objects.all()
        music_emotions_similarity = []
        user_emotion_values = np.array([
            user_emotion.love,
            user_emotion.joy,
            user_emotion.passion,
            user_emotion.happiness,
            user_emotion.sadness,
            user_emotion.anger,
            user_emotion.loneliness,
            user_emotion.longing,
            user_emotion.fear,
            user_emotion.surprise
        ])
        for music_emotion in music_emotions:
            music_emotion_values = np.array([
                music_emotion.love,
                music_emotion.joy,
                music_emotion.passion,
                music_emotion.happiness,
                music_emotion.sadness,
                music_emotion.anger,
                music_emotion.loneliness,
                music_emotion.longing,
                music_emotion.fear,
                music_emotion.surprise
            ])
            cosine_similarity = np.dot(user_emotion_values, music_emotion_values) / (
                    np.linalg.norm(user_emotion_values) * np.linalg.norm(music_emotion_values))
            music_emotions_similarity.append((music_emotion, cosine_similarity))
        music_emotions_similarity.sort(key=lambda x: x[1], reverse=True)

        current_month = datetime.now().month

        music_info_list = []
        filtered_music_info_list = []

        for i in range(min(len(music_emotions_similarity), 100)):
            music_emotion = music_emotions_similarity[i][0]
            music_info = MusicInfo.objects.filter(id=music_emotion.musicId_id).first()
            if music_info:
                music_info_list.append(music_info)
            if len(music_info_list) == 10:
                break

        for i in range(min(len(music_emotions_similarity), 100)):
            music_emotion = music_emotions_similarity[i][0]
            music_info = MusicInfo.objects.filter(id=music_emotion.musicId_id).first()
            if music_info.releasedDate.month == current_month and music_info not in music_info_list:
                filtered_music_info_list.append(music_info)
            if len(filtered_music_info_list) == 10:
                break

        serializer = MusicInfoSerializer(music_info_list, many=True)
        filtered_serializer = FilteredMusicInfoSerializer(filtered_music_info_list, many=True)
        return Response({
            'original_results': serializer.data,
            'filtered_results': filtered_serializer.data[:10]  # 최대 10곡 추천
        })

    def list(self, request):
        song_vectors = np.load('../django_mm/mixmind/data/song_vectors.npy')
        model_path = '../django_mm/mixmind/data/word2vec_model.pkl'
        kmeans_model_path = '../django_mm/mixmind/data/kmeans_model.pkl'

        with open(model_path, 'rb') as f:
            model = pickle.load(f)
        
        with open(kmeans_model_path, 'rb') as f:
            kmeans_model = pickle.load(f)

        playgroup_viewset = PlayGroupViewSet()

        playgroup_response = playgroup_viewset.list(request)
        
        if playgroup_response.status_code == 200:
            playgroup_data = playgroup_response.data
            print(playgroup_data)

            if not playgroup_data or isinstance(playgroup_data, dict):
                playgroup_id = 6
            else:
                playgroup_id = playgroup_data[0]['id']
        
        else:
            playgroup_id = 6

        userPlayList = UserPlayList.objects.filter(group_id=playgroup_id).values_list('music_id', flat=True)
        
        recommended_songs = []

        if userPlayList:
            vectors = [model.wv[song_id] for song_id in userPlayList if song_id in model.wv]
        
<<<<<<< HEAD
        vectors = [model.wv[song_id] for song_id in userPlayList if song_id in model.wv]
        
=======
        else:
            playgroup_id = 6

            userPlayList = UserPlayList.objects.filter(group_id=playgroup_id).values_list('music_id', flat=True)
            vectors = [model.wv[song_id] for song_id in userPlayList if song_id in model.wv]
            
>>>>>>> 1657edf9f3c2f6f997834f301dd8ca82a06cf69b
        if vectors:
            user_vector = sum(vectors) / len(vectors)
        
        cluster_label = kmeans_model.predict([user_vector])[0]

        similarities = cosine_similarity([user_vector], song_vectors)
        similarities = similarities.flatten()

        k = 10
        for idx in similarities.argsort()[::-1]:
            if k <= 0:
                break
            if kmeans_model.labels_[idx] == cluster_label:
                song_info = MusicInfo.objects.filter(id=idx).first()
                recommended_songs.append(song_info)
                k -= 1

        serializer = song2VecSerializer(recommended_songs, many=True)
        return Response(serializer.data)

class MusicPalyViewSet(viewsets.ViewSet):
    # 
    pass

class MusicListViewSet(viewsets.ViewSet):
    def list(self, request):
        musiclist_info = MusicInfo.objects.all()
        serializer = MusicInfoSerializer(musiclist_info, many=True)
        return Response(serializer.data)

class GenreListViewSet(viewsets.ViewSet):
    def list(self, request):
        genreList = MusicInfo.objects.filter(genre = '발라드')
        serializer = MusicInfoSerializer(genreList, many=True)
        return Response(serializer.data)

class GenreSelectViewSet(viewsets.ViewSet):
    def list(self, request):
        genreSelect = MusicInfo.objects.values('genre').distinct()
        serializer = GenreSerializer(genreSelect, many=True)
        return Response(serializer.data)


# class GenreSelectInfoViewSet(viewsets.ViewSet): 
#     @action(detail=True, methods=['get'])
#     def genreSelectInfo(self, request, genre=None):
#         # genreSelectInfo = MusicInfo.objects.filter(genre = request.data.get(''))  appservice -> body : genre(value) -> genre: 1 
#         genre = request.query_params.get('genre')
#         genreSelectInfo = MusicInfo.objects.filter(genre = genre)
#         serializer = MusicInfoSerializer(genreSelectInfo, many=True)
#         return Response(serializer.data)

class GenreSelectInfoViewSet(viewsets.ViewSet): 
    @action(detail=False, methods=['get'])
    def search(self, request):
        # genreSelectInfo = MusicInfo.objects.filter(genre = request.data.get(''))  appservice -> body : genre(value) -> genre: 1 
        genre = request.query_params.get('genre')
        genreSelectInfo = MusicInfo.objects.filter(genre = genre)
        serializer = MusicInfoSerializer(genreSelectInfo, many=True)
        return Response(serializer.data)

class CollectTitleViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'])
    def search(self, request):
        # genreSelectInfo = MusicInfo.objects.filter(genre = request.data.get(''))  appservice -> body : genre(value) -> genre: 1 
        title = request.query_params.get('title')
        titleInfo = MusicInfo.objects.filter(title = title)
        serializer = MusicInfoSerializer(titleInfo, many=True)
        return Response(serializer.data)

    def list(self, request):
        # entireTitle = MusicInfo.objects.values('title').distinct()
        entireTitle = MusicInfo.objects.values('title')
        alltitles = []
        for titles in entireTitle:
            alltitles.append(titles['title'])
        # serializer = TitleSerializer(entireTitle, many=True)
        return Response(alltitles)