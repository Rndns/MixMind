// recoilState.js
import { atom } from 'recoil';

export const audioListState = atom({
  key: 'audioListState',
  default: [
    { id: 1, title: '안녕 - 해요', src: 'http://127.0.0.1:8000/static/audio/안녕 - 해요.mp3' },
    { id: 2, title: 'Lost Stars - Adam Levine', src: 'http://127.0.0.1:8000/static/audio/Lost Stars - Adam Levine.mp3' },
    { id: 3, title: 'Reality - Richard Sanderson', src: 'http://127.0.0.1:8000/static/audio/Reality - Richard Sanderson.mp3' },
    ],
    });
    
    export const selectedAudioState = atom({
    key: 'selectedAudioState',
    default: { id: 3, title: 'Audio 3', src: './music.mp3' },
    });
    
    export const playState = atom({
    key: 'playState',
    default: false,
    });
