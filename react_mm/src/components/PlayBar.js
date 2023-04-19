// export const audioState = atom < string > ({ //플레이중인 음악의 url
//   key: 'audioState',
//   default: '',
// });

// export const playState = atom < boolean > ({ //플레이, 일시정지
//   key: 'playState',
//   default: false,
// });

// export const playIdState = atom < any > ({	//플레이중인 음악의 id
//   key: 'playIdState',
//   default: '',
// });

// export const volumeState = atom < number > ({//음악 볼륨
//   key: 'volumeState',
//   default: 50,
// });

// export const muteState = atom < boolean > ({//음소거 여부
//   key: 'muteState',
//   default: false,
// });

// const audio = useRecoilValue(audioState);
// const myRef = useRef < H5AudioPlayer | null > (null);
// const [play, setPlay] = useRecoilState(playState);
// const volume = useRecoilValue(volumeState);
// const mute = useRecoilValue(muteState);

// const start = () => {
//   if (myRef.current?.audio.current)
//     myRef.current.audio.current.volume = volume / 100;
//   setPlay(true);
// };

// const stop = () => {
//   setPlay(false);
// };

// const onMusicEnd = () => {
//   setPlay(false);
// };

// useEffect(() => {
//   if (!myRef.current?.audio.current) return;
//   if (play) {
//     myRef.current.audio.current.play();
//     myRef.current.audio.current.volume = mute ? 0 : volume / 100;
//   } else myRef.current.audio.current.pause();
// }, [play, audio, volume, mute]);

// return (
//   //생략
//   <AudioPlayer
//     className="music-status"
//     src={audio}
//     ref={myRef}
//     onEnded={onMusicEnd}
//     layout="horizontal-reverse"
//     hasDefaultKeyBindings={false}
//   />
//   //생략
// );

// const musicList = [
//   {
//     id: 'Beautiful',
//     musicUrl: Beautiful,
//   },
//   {
//     id: 'cdnmusic',
//     musicUrl:
//       'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
//   },
// ];

// const PlayDevPage = () => {
//   const [play, playId, start, stop] = usePlay();

//   return (
//     <>
//       <Header />
//       <div>
//         {musicList.map((music) => (
//           <div key={music.id}>
//             {playId === music.id && play ? (
//               <button onClick={stop}>
//                 <IoMdPause />
//               </button>
//             ) : (
//               <button onClick={() => start(music)}>
//                 <IoMdPlay />
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
//             }
