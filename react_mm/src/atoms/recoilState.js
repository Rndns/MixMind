// recoilState.js
import { atom } from 'recoil';

export const audioListState = atom({
  key: 'audioListState',
  default: [
    { id: 1, title: '해요 - 안녕', src: 'http://127.0.0.1:8000/static/audio/해요 - 안녕.mp3' },
    { id: 2, title: 'Lost Stars - Adam Levine', src: 'http://127.0.0.1:8000/static/audio/Lost Stars - Adam Levine.mp3' },
    { id: 3, title: 'Reality - Richard Sanderson', src: 'http://127.0.0.1:8000/static/audio/Reality - Richard Sanderson.mp3' },
    { id: 4, title: '봄날 - 방탄소년단', src: 'http://127.0.0.1:8000/static/audio/봄날 - 방탄소년단.mp3' },
    { id: 5, title: 'I Will Always Love You - Whitney Houston', src: 'http://127.0.0.1:8000/static/audio/I Will Always Love You - Whitney Houston.mp3' },
    { id: 6, title: '굿바이 로맨스 - 태연', src: 'http://127.0.0.1:8000/static/audio/굿바이 로맨스 - 태연.mp3' },
    { id: 7, title: 'Shape of My Heart - Backstreet Boys', src: 'http://127.0.0.1:8000/static/audio/Shape of My Heart - Backstreet Boys.mp3' },
    { id: 8, title: '비와 당신 - 이적', src: 'http://127.0.0.1:8000/static/audio/비와 당신 - 이적.mp3' },
    { id: 9, title: 'Someone Like You - Adele', src: 'http://127.0.0.1:8000/static/audio/Someone Like You - Adele.mp3' },
    { id: 10, title: '나만, 봄 - 볼빨간사춘기', src: 'http://127.0.0.1:8000/static/audio/나만, 봄 - 볼빨간사춘기.mp3' },
    { id: 11, title: '눈, 코, 입 - 태양', src: 'http://127.0.0.1:8000/static/audio/눈, 코, 입 - 태양.mp3' },
    { id: 12, title: 'The Nights - Avicii', src: 'http://127.0.0.1:8000/static/audio/The Nights - Avicii.mp3' },
    { id: 13, title: '달빛 - 에일리', src: 'http://127.0.0.1:8000/static/audio/달빛 - 에일리.mp3' },
    { id: 14, title: '첫눈처럼 너에게 가겠다 - 에일리', src: 'http://127.0.0.1:8000/static/audio/첫눈처럼 너에게 가겠다 - 에일리.mp3' },
    { id: 15, title: '꽃 길 - BIGBANG', src: 'http://127.0.0.1:8000/static/audio/꽃 길 - BIGBANG.mp3' },
    { id: 16, title: 'Dance Monkey - Tones and I', src: 'http://127.0.0.1:8000/static/audio/Dance Monkey - Tones and I.mp3' },
    { id: 17, title: '별이 빛나는 밤에 - 마마무', src: 'http://127.0.0.1:8000/static/audio/별이 빛나는 밤에 - 마마무.mp3' },
    { id: 18, title: 'Say Something - Justin Timberlake', src: 'http://127.0.0.1:8000/static/audio/Say Something - Justin Timberlake.mp3' },
    { id: 19, title: '그때 헤어지면 돼 - 로이킴', src: 'http://127.0.0.1:8000/static/audio/그때 헤어지면 돼 - 로이킴.mp3' },
    { id: 20, title: '기억의 빈자리 - 박지윤', src: 'http://127.0.0.1:8000/static/audio/기억의 빈자리 - 박지윤.mp3' },
    { id: 21, title: '너에게 가는 이 길 위에서 - 백예린', src: 'http://127.0.0.1:8000/static/audio/너에게 가는 이 길 위에서 - 백예린.mp3' },
    { id: 22, title: 'Love Shot - EXO', src: 'http://127.0.0.1:8000/static/audio/Love Shot - EXO.mp3' },
    { id: 23, title: '물어보지마 - 라비, 청하', src: 'http://127.0.0.1:8000/static/audio/물어보지마 - 라비, 청하.mp3' },
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
