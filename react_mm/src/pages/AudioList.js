// components/AudioList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { audioListState, selectedAudioState } from '../recoil/atoms';

const AudioList = () => {
    const navigate = useNavigate()
    const [audioList, setAudioList] = useRecoilState(audioListState);
    const [selectedAudio, setSelectedAudio] = useRecoilState(selectedAudioState);

    const handleAudioClick = (audio) => {
    setSelectedAudio(audio);
    };

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

export default AudioList;
