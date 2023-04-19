// import React from "react";

// const usePlay = () => {
//   const [play, setPlay] = useRecoilState(playState);
//   const [playId, setPlayId] = useRecoilState(playIdState);
//   const setAudio = useSetRecoilState(audioState);

//   const start = () => {
//     setPlayId(music.id);
//     setAudio(music.musicUrl);
//     setPlay(true);
//   };

//   const stop = () => {
//     setPlay(false);
//   };
//   return [play, playId, start, stop];
// };

// return (
//   <>
//     {audio && (
//       <div className="footer">
//         <div className="footer-inner">
//           <button className="footer-button">
//             <MdSkipPrevious />
//           </button>
//           {play ? (
//             <button className="footer-button" onClick={stop}>
//               <MdPause />
//             </button>
//           ) : (
//             <button className="footer-button" onClick={start}>
//               <MdPlayArrow />
//             </button>
//           )}
//           <button className="footer-button">
//             <MdSkipNext />
//           </button>
//           <AudioPlayer
//             className="music-status"
//             src={audio}
//             ref={myRef}
//             onEnded={onMusicEnd}
//             layout="horizontal-reverse"
//             hasDefaultKeyBindings={false}
//           />
//           <VolumeStatus />
//           <PlayStatus />
//         </div>
//       </div>
//     )}
//   </>
// );

// export default usePlay;