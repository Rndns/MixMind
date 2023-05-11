// components/AudioList.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { audioListState, selectedAudioState, playListState } from '../atom/atoms';

const MusicPlayList = () => {
    const navigate = useNavigate()
    const [audioList, setAudioList] = useRecoilState(audioListState);
    const [selectedAudio, setSelectedAudio] = useRecoilState(selectedAudioState);
    const [playListState, setPlayListState] = useRecoilState(playListState);

    const handleAudioClick = (audio) => {
        setSelectedAudio(audio);
    };

    useEffect(() => {
        setPlayListState(true)
    }, [])

    return (
        <div>
            <h2>Audio List</h2>
            <div>
                <button
                    onClick={() => {
                        navigate(`/`, {
                        replace: false 
                    });
                }}>
                Home
                </button>
            </div>
            <ul>
            {audioList.map((audio) => (
                <li key={audio.id} onClick={() => handleAudioClick(audio)}>
                {audio.title}
                </li>
            ))}
            </ul>
            <div>
            <h2>Selected Audio</h2>
            {selectedAudio ? <div>{selectedAudio.title}</div> : <div>No audio selected</div>}
            </div>
        </div>
    );
};

export default MusicPlayList;
