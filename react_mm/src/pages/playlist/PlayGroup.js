import "./PlayGroup.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import del from '../../images/delete.png';

export default function PlayGroup() {
    const location = useLocation()
    const [playGroup, setPlayGroupState] = useState([]);
    const [imgList, setimgList] = useState([
      {
        id: 0,
        albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
    },
    {
        id: 1,
        albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
    },
    {
        id: 2,
        albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
    },
    {
        id: 3,
        albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
    }
    ]);

    const editPlayGroup = () => {
        
    };

    useEffect(() => {
      setPlayGroupState(location.state.playGroup)
    }, []);

    return (
      <div className="playgroup" playGroup={playGroup}>
            <div className="my-playlist">
              <h1><b>내 플레이리스트</b></h1>
            </div>
            {playGroup.map((playGroup) => (
              <div key={playGroup.id} className="playlist-header">
                  <div className="playlist-cover">
                    <img src={imgList.albumImg} alt={imgList.id}/>
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