import { atom } from "recoil";

export const audioState = atom({    //플레이중인 음악의 url
    key: 'audioState',
    default: '',
    });

export const playState = atom({     //플레이, 일시정지
    key: 'playState',
    default: false,
    });

export const playIdState = atom({	//플레이중인 음악의 id
    key: 'playIdState',
    default: '',
    });

export const volumeState = atom({   //음악 볼륨
    key: 'volumeState',
    default: 50,
    });

export const muteState = atom({     //음소거 여부
    key: 'muteState',
    default: false,
    });