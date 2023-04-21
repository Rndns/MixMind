// components/AudioList.js
import React from 'react';
import { useRecoilState } from 'recoil';
import { audioListState, selectedAudioState } from '../atoms/recoilState';

const AudioList = () => {
    const [audioList, setAudioList] = useRecoilState(audioListState);
    const [selectedAudio, setSelectedAudio] = useRecoilState(selectedAudioState);

    const handleAudioClick = (audio) => {
    setSelectedAudio(audio);
    };

    return (
        <div>
            <h2>Audio List</h2>
            <ul>
            {audioList.map((audio) => (
                <li key={audio.id} onClick={() => handleAudioClick(audio)}>
                {audio.title}
                </li>
            ))}
            </ul>
            <div>
            <h3>Selected Audio</h3>
            {selectedAudio ? <div>{selectedAudio.title}</div> : <div>No audio selected</div>}
            </div>
        </div>
    );
};

export default AudioList;
