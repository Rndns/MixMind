import "./PlayGroup.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import del from '../../images/delete.png';

export default function PlayGroup() {
    const location = useLocation()
    const [playGroup, setPlayGroupState] = useState([])

    const editPlayGroup = () => {
        
    }

    useEffect(() => {
      setPlayGroupState(location.state.playGroup)
    }, [])

    return (
      <div className="playgroup">
            <div className="my-playlist">
              <h1><b>내 플레이리스트</b></h1>
            </div>
            {playGroup && playGroup.map((playGroup) => (
              <div className="playlist-header" key={playGroup.id}>
                  <div className="playlist-cover">
                    <img src="https://cdnimg.melon.co.kr/cm2/album/images/110/11/565/11011565_20220801102637_500.jpg?1d674a44faffa0ebd34d86c182463171/melon/resize/282/quality/80/optimize" alt='playlistImg'/>
                  </div>
                  <div className="header-str">
                    <h1><b>{playGroup.name}</b></h1>
                    <h4><b>2023 - 05 - 17</b></h4>
                    <h4><b>#여행 #여름 #청량</b></h4>
                  </div>
                  <Button variant="light" size="lg"><b>상세보기</b></Button>
                  <Button variant="danger" size="lg" onClick={editPlayGroup}><b>수정하기</b></Button>
                  <img src={del} class="delete" alt={"삭제하기"} title={"플레이리스트 삭제하기"}/>
              </div>
            ))}
        </div>
    )
}