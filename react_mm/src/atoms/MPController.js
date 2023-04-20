import React, { useEffect, useRef } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import { audioState, playState, volumeState, muteState } from './atoms';

export default function MPController() {

    const audio = useRecoilValue(audioState);
    const myRef = useRef(null);
    const [play, setPlay] = useRecoilState(playState);
    const volume = useRecoilValue(volumeState);
    const mute = useRecoilValue(muteState);

    const start = () => {
        if (myRef.current?.audio.current)
            myRef.current.audio.current.volume = volume / 100;
        setPlay(true);
    };

    const stop = () => {
        setPlay(false);
    };

    const onMusicEnd = () => {
        setPlay(false);
    };

    useEffect(() => {
        if (!myRef.current?.audio.current) return;
        if (play) {
            myRef.current.audio.current.play();
            myRef.current.audio.current.volume = mute ? 0 : volume / 100;
        } else myRef.current.audio.current.pause();
    }, [play, audio, volume, mute]);

    return(
        <AudioPlayer
            className="music-status"
            src={audio}
            ref={myRef}
            onEnded={onMusicEnd}
            layout="horizontal-reverse"
            hasDefaultKeyBindings={false}
        />
    );
};
