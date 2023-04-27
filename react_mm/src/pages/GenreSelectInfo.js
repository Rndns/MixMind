import React ,{useState, useEffect } from "react";
import { genreSelectInfo } from "../services/appServices";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';

export default function GenreSelectInfo(){
    const [genre, setGenreSelectInfo] = useState([]);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(2)
    
    useEffect(() => {
        console.log(location.state.gen)
        console.log(1)
        genreSelectInfo(location.state.gen).then((data) => {
            setGenreSelectInfo(data); 
        });
    }, []);

    return(
        <div>
            {genre.map((gen) => (
                <div key = {gen.id}>
                    <Container>
                        <Row>
                            <Col>
                            제목 : {gen.title}
                            </Col>
                            <Col>
                            앨범명 : {gen.album}
                            </Col>
                            <Col>
                            <img src={gen.albumImg} alt='albumImg'/>
                            </Col>
                            <Col>
                            좋아요 : {gen.likes}
                            </Col>
                            <Col>
                            가사 : {gen.lyrics}
                            </Col>
                            <Col>
                            아티스트: {gen.artist}
                            </Col>
                            <Col>
                            작사가 : {gen.lyricist}
                            </Col>
                            <Col>
                            작곡가 : {gen.composer}
                            </Col>
                            {/* <Col>
        //                     편곡가 : {location.state.gen.arranger}
        //                     </Col> */}
                            <Col>
                            장르 : {gen.genre}
                            </Col>
                            <Col>
                            발매일 : {gen.releasedDate}
                            </Col>
                        </Row>
             <button onClick={() => {navigate('/')}}>플레이리스트에 추가</button>
             <button onClick={() => {navigate('/musicPlayList')}}>플레이리스트</button>
         </Container>
                    {/* <img src ={gen.albumImg} alt = 'genre'
                        onClick={() => {
                            navigate('/genreListInfoDetail', {
                                state : {
                                    gen : gen
                                }
                            })
                        }}
                        /> */}
                </div>
            ))}
        </div>
    );
}
    
//     return(
//         <div>
//             <Container>
//                 <Row>
//                     <Col>
//                     제목 : {location.state.gen.title}
//                     </Col>
//                     <Col>
//                     앨범명 : {location.state.gen.album}
//                     </Col>
//                     <Col>
//                     <img src={location.state.gen.albumImg} alt='albumImg'/>
//                     </Col>
//                     <Col>
//                     좋아요 : {location.state.gen.likes}
//                     </Col>
//                     <Col>
//                     가사 : {location.state.gen.lyrics}
//                     </Col>
//                     <Col>
//                     아티스트: {location.state.gen.artist}
//                     </Col>
//                     <Col>
//                     작사가 : {location.state.gen.lyricist}
//                     </Col>
//                     <Col>
//                     작곡가 : {location.state.gen.composer}
//                     </Col>
//                     {/* <Col>
//                     편곡가 : {location.state.gen.arranger}
//                     </Col> */}
//                     <Col>
//                     장르 : {location.state.gen.genre}
//                     </Col>
//                     <Col>
//                     발매일 : {location.state.gen.releasedDate}
//                     </Col>
//                 </Row>
//             <button onClick={() => {navigate('/')}}>플레이리스트에 추가</button>
//             <button onClick={() => {navigate('/musicPlayList')}}>플레이리스트</button>
//         </Container>
//         </div>
//     )
// }


// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function GenreSelectInfo() {
//   const location = useLocation();

//   if (!location.state || !location.state.gen) {
//     return <div>데이터가 없습니다.</div>;
//     }

//   return (
//     <div>
//       {location.state.gen.songs.map((song) => (
//         <div key={song.id}>
//           <h3>{song.title}</h3>
//           <p>앨범명: {song.album}</p>
//           <img src={song.albumImg} alt="albumImg" />
//           <p>좋아요: {song.likes}</p>
//           <p>가사: {song.lyrics}</p>
//           <p>아티스트: {song.artist}</p>
//           <p>작사가: {song.lyricist}</p>
//           <p>작곡가: {song.composer}</p>
//           <p>장르: {song.genre}</p>
//           <p>발매일: {song.releasedDate}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import Container from "react-bootstrap/esm/Container";
// import Col from "react-bootstrap/Col"
// import Row from 'react-bootstrap/Row';
// import { useLocation, useNavigate } from "react-router-dom";

// export default function GenreSelectInfo(){
//     const location = useLocation()
//     const navigate = useNavigate()

//     // location.state.gen 값이 없는 경우에 대한 처리
//     if (!location.state || !location.state.gen) {
//         return <div>데이터가 없습니다.</div>;
//     }

//     return(
//         <div>
//             <Container>
//                 <Row>
//                     <Col>
//                     제목 : {location.state.gen.title}
//                     </Col>
//                     <Col>
//                     앨범명 : {location.state.gen.album}
//                     </Col>
//                     <Col>
//                     <img src={location.state.gen.albumImg} alt='albumImg'/>
//                     </Col>
//                     <Col>
//                     좋아요 : {location.state.gen.likes}
//                     </Col>
//                     <Col>
//                     가사 : {location.state.gen.lyrics}
//                     </Col>
//                     <Col>
//                     아티스트: {location.state.gen.artist}
//                     </Col>
//                     <Col>
//                     작사가 : {location.state.gen.lyricist}
//                     </Col>
//                     <Col>
//                     작곡가 : {location.state.gen.composer}
//                     </Col>
//                     {/* <Col>
//                     편곡가 : {location.state.gen.arranger}
//                     </Col> */}
//                     <Col>
//                     장르 : {location.state.gen.genre}
//                     </Col>
//                     <Col>
//                     발매일 : {location.state.gen.releasedDate}
//                     </Col>
//                 </Row>
//                 {/* location.state.gen.songs가 없는 경우에 대한 처리 */}
//                 {location.state.gen.songs && location.state.gen.songs.map((song, index) => (
//                     <div key={index}>
//                         {song.title}
//                     </div>
//                 ))}
//             <button onClick={() => {navigate('/')}}>플레이리스트에 추가</button>
//             <button onClick={() => {navigate('/musicPlayList')}}>플레이리스트</button>
//         </Container>
//         </div>
//     )
// }

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function GenreSelectInfo() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const songs = location.state.gen.songs; // 장르에 속한 모든 노래들의 배열

//   // 현재 선택된 장르에 해당하는 노래들만 필터링
//   const selectedGenreSongs = songs.filter((song) => {
//     return song.genre === location.state.gen.genre;
//   });

//   return (
//     <div>
//       <h2>{location.state.gen.genre} 장르</h2>
//       <ul>
//         {selectedGenreSongs.map((song, index) => (
//           <li key={index}>
//             <p>제목: {song.title}</p>
//             <p>앨범명: {song.album}</p>
//             <img src={song.albumImg} alt={song.album} />
//             <p>좋아요: {song.likes}</p>
//             <p>가사: {song.lyrics}</p>
//             <p>아티스트: {song.artist}</p>
//             <p>작사가: {song.lyricist}</p>
//             <p>작곡가: {song.composer}</p>
//             <p>장르: {song.genre}</p>
//             <p>발매일: {song.releasedDate}</p>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => navigate("/")}>플레이리스트에 추가</button>
//       <button onClick={() => navigate("/musicPlayList")}>플레이리스트</button>
//     </div>
//   );
// }