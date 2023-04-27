import pymysql
import numpy as np
import pandas as pd
from datetime import datetime
from tqdm import tqdm

music_info = pd.read_csv('/Users/seunghoonchoi/Downloads/pymysql/df_concat_2.csv', index_col=0, dtype={'likes': 'object', 'youtubeId': 'object'}, low_memory=False)
music_info['likes'] = music_info['likes'].str.replace(',', '').replace(' ', '0').replace('None', '0').replace(np.nan, 0).astype(int)
music_info.fillna('', inplace=True)

def datetime_df(x):
    if x == '-':
        x = "1999.01.01"
        return datetime.strptime(x, '%Y.%m.%d')
    elif x == "2001.09.31":
        x = '2001.09.30'
        return datetime.strptime(x, '%Y.%m.%d')
    else:
        return datetime.strptime(x, '%Y.%m.%d')


music_info['releasedDate'] = music_info['releasedDate'].apply(datetime_df)

connection = pymysql.connect(host='34.64.62.157', user='TeamMixMind', port = 3306, password = "730402", db = 'mixmind_webservice', charset = 'utf8mb4', use_unicode=True, cursorclass=pymysql.cursors.DictCursor)
cur = connection.cursor()

for row in tqdm(music_info.itertuples()):
    
    sql = """INSERT INTO mixmind_musicinfo (title, artist, album, releasedDate, genre, lyricist, composer, arranger, likes, lyrics, albumImg, youtubeId) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
    cur.execute(sql, (row.title, row.artist, row.album, row.releasedDate, row.genre, row.lyricist, row.composer, row.arranger, row.likes, row.lyrics, row.albumImg, row.youtubeId))
    connection.commit()

connection.close()