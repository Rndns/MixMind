import React from "react";
import { useLocation } from "react-router-dom";

export default function GenreListInfo(){
    const location = useLocation()

    return(
        <div>
          <Container>
            <Row>
                <Col>
                제목 : {location.state.gen.title}
                </Col>
                <Col>
                앨범명 : {location.state.gen.album}
                </Col>
                <Col>
                <img src={location.state.gen.albumImg} alt='albumImg'/>
                </Col>
                <Col>
                좋아요 : {location.state.gen.likes}
                </Col>
                <Col>
                가사 : {location.state.gen.lyrics}
                </Col>
                <Col>
                아티스트: {location.state.gen.artist}
                </Col>
                <Col>
                작사가 : {location.state.gen.lyricist}
                </Col>
                <Col>
                작곡가 : {location.state.gen.composer}
                </Col>
                {/* <Col>
                편곡가 : {location.state.gen.arranger}
                </Col> */}
                <Col>
                장르 : {location.state.gen.genre}
                </Col>
                <Col>
                발매일 : {location.state.gen.releasedDate}
                </Col>
            </Row>
            <button onClick={() => {navigate('/')}}>플레이리스트에 추가</button>
            <button onClick={() => {navigate('/musicPlayList')}}>플레이리스트</button>
        </Container>
        </div>
    )
}

