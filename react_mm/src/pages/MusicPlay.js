import React from "react";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";



export default function MusicPlay() {
  const navigate = useNavigate();
  function goMusicPlay() {
    navigate('/home');
  }

  return (
    <div className="musicplaypage">
      홈으로이동
      <button onClick={goMusicPlay}>홈으로이동</button>
      <div>
        <Container>
          <Row>
            <Col>
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMzFfNzQg%2FMDAxNjcyNDkxNjA5NzIz.UG3IvWApwfOy1W6kilkcjq7IIO6YgzvK2ehMhzNxV_0g.eZtKLPE-ee_L5w1p89CFocODgDZj210f0eU4HAZ4-M4g.JPEG.ildu12%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001.jpg&type=sc960_832" alt="load fail" width="300" height="200" />
            </Col>
            <Col>가사</Col>
            <Col>아티스트</Col>
            <Col>재생</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}