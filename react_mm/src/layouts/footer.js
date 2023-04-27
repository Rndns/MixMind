import React from 'react';
import { MdSkipPrevious, MdPause, MdPlayArrow, MdSkipNext } from 'react-icons/md';
import { useRecoilValue, useRecoilState } from 'recoil';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { selectedAudioState, playState, audioListState } from '../recoil/atoms';
import '../styles.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Footer = () => {
    const [isPlayerVisible, setIsPlayerVisible] = useState(false);

    const handleTogglePlayer = () => {
        setIsPlayerVisible(!isPlayerVisible);
    }

    const [isPlaying, setIsPlaying] = useRecoilState(playState);
    const audioList = useRecoilValue(audioListState);
    const [selectedAudio, setSelectedAudio] = useRecoilState(selectedAudioState);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleSkipPrevious = () => {
        const currentAudioIndex = audioList.findIndex(audio => audio.id === selectedAudio?.id);
        const prevAudioIndex = currentAudioIndex - 1;
        if (prevAudioIndex >= 0) {
            setSelectedAudio(audioList[prevAudioIndex]);
        }
    };

    const handleSkipNext = () => {
        const currentAudioIndex = audioList.findIndex(audio => audio.id === selectedAudio?.id);
        const nextAudioIndex = currentAudioIndex + 1;
        if (nextAudioIndex < audioList.length) {
            setSelectedAudio(audioList[nextAudioIndex]);
        }
    };

    return (
        <>
            <Button
            onClick={handleTogglePlayer}
            variant={isPlayerVisible ? "light" : "dark"}
            >
            <b> {isPlayerVisible ? '뮤직 플레이어 닫기' : '뮤직 플레이어 열기'} </b>
            </Button>
            <Collapse in={isPlayerVisible}>
                <div id="collapse-component"
                    className={`sticky-bottom ${isPlayerVisible ? 'visible' : 'hidden'}`}
                >
                    <div className="footer-container">
                        <div className="music-player">
                            <MdSkipPrevious onClick={handleSkipPrevious} />
                            {isPlaying ? (
                                <MdPause onClick={handlePlayPause} />
                            ) : (
                                <MdPlayArrow onClick={handlePlayPause} />
                            )}
                            <MdSkipNext onClick={handleSkipNext} />
                        </div>
                        <AudioPlayer
                        autoPlay={isPlaying}
                        src={selectedAudio ? selectedAudio.src : null}
                        // src={audioFile}
                        onEnded={() => {
                            handleSkipNext();
                        }}
                        />
                    </div>
                </div>
            </Collapse>
        </>
        // <div className="footer-container">
        //     <div className="music-player">
        //         <MdSkipPrevious onClick={handleSkipPrevious} />
        //         {isPlaying ? (
        //             <MdPause onClick={handlePlayPause} />
        //         ) : (
        //             <MdPlayArrow onClick={handlePlayPause} />
        //         )}
        //         <MdSkipNext onClick={handleSkipNext} />
        //     </div>
        //     <AudioPlayer
        //     autoPlay={isPlaying}
        //     src={selectedAudio ? selectedAudio.src : null}
        //     // src={audioFile}
        //     onEnded={() => {
        //         handleSkipNext();
        //     }}
        //     />
        // </div>
    );
};

export default Footer;
