// import React from "react";
// import { MdSkipPrevious, MdPause, MdPlayArrow, MdSkipNext } from "react-icons/md";
// import AudioPlayer from "react-h5-audio-player";
// import { usePlay } from "../../components/\bUsePlay";

// export default function DefaultFooter() {

// 	return (
// 		<footer>
// 			<div>기본 Footer 영역</div>
//             {audio && (
//                 <div className="footer">
//                     <div className="footer-inner">
//                         <button className="footer-button">
//                             <MdSkipPrevious />
//                         </button>
//                         {play ? (
//                             <button className="footer-button" onClick={stop}>
//                                 <MdPause />
//                             </button>
//                         ) : (
//                             <button className="footer-button" onClick={start}>
//                                 <MdPlayArrow />
//                             </button>
//                         )}
//                         <button className="footer-button">
//                             <MdSkipNext />
//                         </button>
//                         <AudioPlayer
//                             className="music-status"
//                             src={audio}
//                             ref={myRef}
//                             onEnded={onMusicEnd}
//                             layout="horizontal-reverse"
//                             hasDefaultKeyBindings={false}
//                         />
//                         <VolumeStatus />
//                         <PlayStatus />
//                     </div>
//                 </div>
//             )}
// 		</footer>
// 	);
// }