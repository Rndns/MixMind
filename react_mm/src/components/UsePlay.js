import { useRecoilState, useSetRecoilState } from 'recoil';
import { audioState, playState, playIdState } from './atoms';

export const usePlay = () => {
    const [play, setPlay] = useRecoilState(playState);
    const [playId, setPlayId] = useRecoilState(playIdState);
    const setAudio = useSetRecoilState(audioState);

    const start = (music) => {
        setPlayId(music.id);
        setAudio(music.musicUrl);
        setPlay(true);
    };

    const stop = () => {
        setPlay(false);
    };
    
    return [play, playId, start, stop];
};
