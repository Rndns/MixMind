import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Test() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <AudioPlayer
        src="https://example.com/song.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {isPlaying ? (
        <FaPause onClick={() => setIsPlaying(false)} />
      ) : (
        <FaPlay onClick={() => setIsPlaying(true)} />
      )}
    </div>
  );
}