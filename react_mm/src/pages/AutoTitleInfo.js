import React ,{useState, useEffect } from "react";
import { titleSelect } from "../services/appServices";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import { InputComment } from "../services/appServices";
import { loadComment } from '../services/appServices';
import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import playlistadd from '../images/playlist-add.png';
import playlist from '../images/playlist.png';
import heart from '../images/heart.png';
import play from '../images/play.png';
import more from '../images/more.png';

function MyVerticallyCenteredModal(props) {
    const location = useLocation();
    const {musicInfo} = props
    console.log(musicInfo[0].lyricist)

    return (
        <Modal
        // {...props}
        size="lg"
        dialogClassName="custom-modal" 
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <b>곡 상세정보</b>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="lyricist">
            {/* 작사가 */}
            <b>작사</b> {musicInfo[0].lyricist}
        </div>
        <div className="composer">
            {/* 작곡가 */}
            <b>작곡</b> {musicInfo[0].composer}
        </div>
        <div className="arranger">
            {/* 편곡가 */}
            <b>편곡</b> {musicInfo[0].arranger}
        </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="dark" onClick={props.onHide}><b>닫기</b></Button>
        </Modal.Footer>
        </Modal>
    );

    }function Lyrics({ lyrics }) {
    return (
        <div>
        {lyrics ? (
            <p>{lyrics}</p>
        ) : (
            <p><b>가사정보가 등록되지 않은 곡입니다</b></p>
        )}
        </div>
    );
}

export default function AutoTitleInfo(){
    const location = useLocation()
    const navigate = useNavigate()

    const [modalShow, setModalShow] = React.useState(false);
    const [comment, setComments] = useState('')
    const [commentList, setCommentList] = useState([])
    const [musicInfo, setMusicInfo] = useState([]);
    
    const videoSrc = `https://www.youtube.com/embed/${musicInfo.youtubeId}`;

    const renewComment = () => {
        InputComment(comment, musicInfo.id);
        loadComment(musicInfo.id).then(Data => setCommentList(Data));
        navigate(`/musicInfoPlayer`,{
            state: {
                musicInfo: musicInfo,
                commentList: commentList
            },
            replace: false
        })
    }

    useEffect(() => {
        titleSelect(location.state.title).then((data) => {
            setMusicInfo(data); 
            loadComment(data.id).then(data => {
                setCommentList(data);
            })
        });
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="musicplaypage">
            <div className="details">
            <Container>
                <Row>
                <div className="alb-img">
                    {/* 앨범 이미지 */}
                    <img src={musicInfo.albumImg} alt='albumImg'/>
                    <Row>
                    <div className="title">
                        {/* 제목 */}
                        <b>{musicInfo.title}</b>
                    </div>
                    <div className="artist">
                        {/* 아티스트 */}
                        <b>{musicInfo.artist}</b>
                    </div>
                    <div className="album">
                        {/* 앨범명 */}
                        <b>{musicInfo.album}</b>
                    </div>
                    <div className="date">
                        {/* 발매일 */}
                        <b>{musicInfo.releasedDate}</b>
                    </div>
                    <div className="genre">
                        {/* 장르 클릭하면 장르 페이지로 갈 수 있도록 제작 요망*/}
                        <Link to="/electronic"><b>#{musicInfo.genre}</b></Link>
                    </div>
                    </Row>
                    <div className="button-group">
                    <img src={play} class="play" alt={"재생하기"} title={"재생하기"}
                    onClick={() => {navigate('/')}}/>
                    <img src={playlistadd} class="playlist-add" alt={"플레이리스트에 추가"} title={"플레이리스트에 추가"}
                    onClick={() => {navigate('/')}}/>
                    <img src={playlist} class="playlist" alt={"플레이리스트 확인"} title={"플레이리스트 확인"}
                    onClick={() => {navigate('/musicPlayList')}}/>
                    <img src={heart} class="heart" alt={"좋아요 누르기"} title={"좋아요 누르기"}
                    onClick={() => {navigate('/')}}/>
                    <img src={more} class="more" alt={"상세정보 보기"} title={"상세정보 보기"}
                        onClick={() => setModalShow(true)}/> {/*  onClick={() => setShowModal(true)} */}
                    <MyVerticallyCenteredModal
                        musicInfo={musicInfo}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    </div>
                </div>
                    {/* 좋아요 */}
                    {/* {musicInfo.likes} */}
                </Row>
            </Container>
            <div>
                <input type="text" value={comment} onChange={(e) => setComments(e.target.value)} placeholder="댓글을 입력해주세요" />
                <label for 댓글입력 />
                <button onClick={renewComment}>댓글입력</button>
            </div>
            <div className="lyrics">
                {/* 가사 */}
                <Lyrics lyrics={musicInfo.lyrics}/>
            </div>
            <div className="youtube">
                <b>YouTube로 감상하기</b>
                <iframe width="480" height="270" src={videoSrc} title={musicInfo.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class='v-line'></div>
            </div>
            <div>
            {/* <b>댓글보기</b>
                {commentlist.map((comment)=>(
                <div key={comment.id}>{comment.comment}</div>
                ))} */}
                <b>댓글보기</b>
                {commentList && commentList.map((comment)=>(
                <div key={comment.id}>{comment.comment}</div>
                ))}
            </div>
            </div>
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