import "./PlayGroup.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { editPlayGroup, delPlayGroup, loadPlayList } from "../../services/appServices";
import del from '../../images/delete.png';

export default function PlayGroup() {
    const location = useLocation()
    const navigate = useNavigate()
    const [playGroup, setPlayGroupState] = useState([])
    const [createTime, setCreateTime] = useState('2023-05-17')
    const [GroupTag, setGroupTag] = useState('#여름 #청량')
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

    const editPlayGroup = (e) => {
      const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));
    }

    const delPlayGroup = () => {
        
    };

    const goToPlayList = (playGroup) => {
      loadPlayList(playGroup.id).then(list => {
        console.log(list);
        navigate('/playList', {
          state: {
            musicList: list,
            playGroupName: playGroup.name,
            createTime: createTime,
            GroupTag: GroupTag,
          }
        })
      })
    }

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
                    {/* <img src={imgList.albumImg} alt={imgList.id}/> */}
                    <img src="https://cdnimg.melon.co.kr/cm2/album/images/109/75/276/10975276_20220603165713_500.jpg?690c69f1d7581bed46767533175728ff/melon/resize/282/quality/80/optimize" alt={imgList.id}/>
                  </div>
                  <div className="header-str">
                    <h1><b>{playGroup.name}</b></h1>
                    <h4><b>{createTime}</b></h4>
                    <h4><b>{GroupTag}</b></h4>
                  </div>
                  <Button variant="light" size="lg"  onClick={() => goToPlayList(playGroup)}><b>상세보기</b></Button>
                  <img src={del} class="delete" alt={"삭제하기"} title={"플레이리스트 삭제하기"}/>
              </div>
            ))}
        </div>
    )
}