import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import { useLocation, useNavigate } from "react-router-dom";
import { musicInfoList } from "../services/appServices";


export default function MusicPlay() {
  const location = useLocation();
  const navigate = useNavigate();
  // album "on the street (with J. Cole)"
  // albumImg "https://cdnimg.melon.co.kr/cm2/album/images/111/94/815/11194815_20230303100153_500.jpg?a15be10b9a5357904f33820c8311a0f9/melon/resize/282/quality/80/optimize"
  // arranger ""
  // artist "j-hope"
  // composer "['j-hope', 'Pdogg', 'J. Cole']"
  // genre "랩/힙합"
  // id 1
  // likes 43456
  // lyricist "['j-hope', 'Pdogg', 'J. Cole']"
  // lyrics "Every time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)\n내 두 발은 선뜻 걸어, anywhere\nJ in the air\n가는 길이 희망이 되고자 하여,\n나 구태여\nEven my walk was made of\nyour love and your faith\n보답을 해, 저 멀리서라도 나비가 되어\nNow just walk lightly,\nwhenever you want\nGo on hopefully, wherever you walk\n누군가의 숨이 깃들어 있는 거리\n내 영혼과 영원을 담을게\nEverywhere (I’ll be)\nEvery time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)\nAll hail the mighty survivor of hell,\nPlopped down from heaven to sell\nHoly water that I scooped\nfrom the well\nFought tooth and a nail,\nJust to prevail mongst it’s ruthless\nAs I move through the field\nFeelin worried\nIn a hurry like a 2 minute drill\nTo make a couple mil\nOff a lucrative deal\nSelling train of thought,\nName a artist who could derail\nYou’ll never see it\nlike a n**** hula hoopin in jail\nI got a friend smart as f***,\nbut he stupid as hell\nHe swear that God ain’t real\nSince it ain’t no way to prove it his self\nAs if the universe ain’t enough,\nas if the volcanoes ain’t erupt\nAs if the birds don’t chirp,\nas if a trillion nerves don’t work\nin the human body\nWho would I be?\nWithout the creator of this theater\nBeside me to gently guide me?\nSomedays I wonder\nif I need to pick a different hobby\nI’m deep in with this rappin\nIt’s all a n**** know\nI never didn’t nothin better,\nit’s hard to let it go\nBut like a father,\nwatching his daughter,\nwalk down the altar,\nWith tears in his eyes,\nyou gotta let her grow\nAnd so I shall,\nbut first I been honing my style\nColdest around,\nwith more quotables than\nwhat the quota allows\nYou see a top 10 list\nI see a Golden Corral, n****\nAs the moon jumps over the cow\nI contemplate if I should\nwait to hand over the crown\nAnd stick around for a bit longer\nI got a strange type of hunger\nThe more I eat the more\nit gets stronger,\nThe more it gets stronger\nI said the more it gets stronger\nj-hope\nCole World\nEvery time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)\nEvery time I walk\nEvery time I run\nEvery time I move\nAs always, for us\nEvery time I look\nEvery time I love\nEvery time I hope\nAs always, for us\n(On the street, I’m still)"
  // releasedDate "2023-03-03"
  // title "on the street (with J. Cole)"
  // youtudeId "dummeyID"

  return (
    <div className="musicplaypage">
      <button onClick={navigate('/')}>홈으로이동</button>
      <div>
        <Container>
          <Row>
            <Col>
              제목 : {location.state.musicInfo.title}
            </Col>
            <Col>
              앨범명 : {location.state.musicInfo.album}
            </Col>
            <Col>
              <img src={location.state.musicInfo.albumImg} alt='albumImg'/>
            </Col>
            <Col>
              좋아요 : {location.state.musicInfo.likes}
            </Col>
            <Col>
              가사 : {location.state.musicInfo.lyrics}
            </Col>
            <Col>
              아티스트: {location.state.musicInfo.artist}
            </Col>
            <Col>
              작사가 : {location.state.musicInfo.lyricist}
            </Col>
            <Col>
              작곡가 : {location.state.musicInfo.composer}
            </Col>
            {/* <Col>
              편곡가 : {location.state.musicInfo.arranger}
            </Col> */}
            <Col>
              장르 : {location.state.musicInfo.genre}
            </Col>
            <Col>
              발매일 : {location.state.musicInfo.releasedDate}
            </Col>
          </Row>
          <button onClick={() => {navigate('/')}}>플레이리스트에 추가</button>
          <button onClick={() => {navigate('/musicPlayList')}}>플레이리스트</button>
        </Container>
      </div>
    </div>
  );
}