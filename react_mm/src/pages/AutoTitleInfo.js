import React ,{useState, useEffect } from "react";
import { titleSelect } from "../services/appServices";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';

export default function AutoTitleInfo(){
    const [title, setTitleSelectInfo] = useState([]);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(2)
    
    useEffect(() => {
        console.log(location.state.title)
        console.log(1)
        titleSelect(location.state.title).then((data) => {
            setTitleSelectInfo(data); 
        });
    }, []);

    return(
        <div>
            {title.map((ttl) => (
                <div key = {ttl.id}>
                    <Container>
                        <Row>
                            <Col>
                            제목 : {ttl.title}
                            </Col>
                            <Col>
                            앨범명 : {ttl.album}
                            </Col>
                            <Col>
                            <img src={ttl.albumImg} alt='albumImg'/>
                            </Col>
                            <Col>
                            좋아요 : {ttl.likes}
                            </Col>
                            <Col>
                            가사 : {ttl.lyrics}
                            </Col>
                            <Col>
                            아티스트: {ttl.artist}
                            </Col>
                            <Col>
                            작사가 : {ttl.lyricist}
                            </Col>
                            <Col>
                            작곡가 : {ttl.composer}
                            </Col>
                            {/* <Col>
        //                     편곡가 : {location.state.gen.arranger}
        //                     </Col> */}
                            <Col>
                            장르 : {ttl.genre}
                            </Col>
                            <Col>
                            발매일 : {ttl.releasedDate}
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

// import React ,{useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { autoTitleInfo } from "../services/appServices";

// export default function AutoTitleSelect() {
//     const [title, setTitleSelect] = useState([]);
//     const navigate = useNavigate();
  
//     useEffect(() => {
//         autoTitleInfo().then((data) => {
//         setTitleSelect(data);
//       });
//     }, []);
  
//     const handleClick = (selectedTitle) => {
//       navigate("/autoTitleInfo", {
//         state: {
//           ttl: selectedTitle,
//         },
//       });
//     };
  
//     return (
//       <div>
//           {title.map((ttl) => (
//             <div key={ttl.title} onClick={() => handleClick(ttl)}>
//               {ttl.title}
//             </div>
//           ))}
//       </div>
//     );
//   }