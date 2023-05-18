import "./PlayList.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from 'react-bootstrap';
import playbutton from '../../images/play.png';
import edit from '../../images/edit.png';
import deletewhite from '../../images/delete-white.png';
import songdetails from '../../images/song-details.png';
import listadd from '../../images/playlist-add.png';
import { Row, Col } from "react-bootstrap";

export default function PlayGroup() {
  const location = useLocation();
  const [playList, setPlayListState] = useState([]);
  const [representativeImage, setRepresentativeImage] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);

  useEffect(() => {
    console.log(location.state.musicList);
    setPlayListState(location.state.musicList);
  }, []);

  useEffect(() => {
    if (playList.length > 0) {
      // 첫 번째 앨범 이미지를 대표 이미지로 설정합니다.
      setRepresentativeImage(playList[0].music.albumImg);
    }
  }, [playList]);

  const editPlayGroup = (e) => {
    const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));
  }

  useEffect(() => {
    const isAllSelected = playList.every((list) => list.selected);
    setSelectAll(isAllSelected);
    setShowDeleteButtons(playList.some((list) => list.selected));
  }, [playList]);

  const toggleSelectAll = () => {
    const updatedSelectAll = !selectAll;
    const updatedPlayList = playList.map((list) => ({
      ...list,
      selected: updatedSelectAll,
    }));
    setSelectAll(updatedSelectAll);
    setPlayListState(updatedPlayList);
  };

  const toggleSelectSong = (index) => {
    const updatedPlayList = [...playList];
    updatedPlayList[index].selected = !updatedPlayList[index].selected;
    setPlayListState(updatedPlayList);
  };

  const handleDelete = () => {
    const updatedPlayList = playList.filter((list) => !list.selected);
    setPlayListState(updatedPlayList);
  };
  
  const handlePlaySelected = () => {
    // TODO: Implement play selected songs logic
  };

  const handleAddToPlaylist = () => {
    // TODO: Implement add selected songs to playlist logic
  };

  return (
    <div className="playList">
      {representativeImage && (
        <div className="rep">
          <div className="rep-img">
            <img src={representativeImage} alt="Representative Album"/>
          </div>
          <div className="playList-info">
            <h1><b>{location.state.playGroupName}</b></h1>
            <h4><b>{location.state.createTime}</b></h4>
            <h4><b>{location.state.GroupTag}</b></h4>
          </div>
          <div className="playList-info">
            <img className="playlist-play" src={playbutton} alt="플레이리스트 재생하기" title="플레이리스트 재생하기"/>
            <img className="playlist-delete" src={edit} alt="플레이리스트 수정하기" title="플레이리스트 수정하기"/>
          </div>
        </div>
      )}
      <div className="list-check">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
        />
        <span>
          수록곡 {playList.length}곡
        </span>
        {showDeleteButtons && (
          <div className="select-button">
            <img className="select-play" src={playbutton}  onClick={handlePlaySelected} alt="선택곡 재생하기" title="선택곡 재생하기"/>
            <img className="select-delete" src={deletewhite} onClick={handleDelete} alt="선택곡 삭제하기" title="선택곡 삭제하기"/>
            <img className="select-add" src={listadd} onClick={handleAddToPlaylist} alt="플레이리스트에 추가하기" title="플레이리스트에 추가하기"/>
          </div>          
        )}
      </div>
      {playList.map((list, index) => (
        <Row 
          key={list.music.id}
          className={`${list.selected ? "selected-song" : ""} ${
            list.music.id
          }`}
        >
          <Col>
            <input
              type="checkbox"
              checked={list.selected || false}
              onChange={() => toggleSelectSong(index)}
            />
          </Col>
          <Col>
            <img src={list.music.albumImg} alt={list.music.title} />
          </Col>
          <Col className="list-title">
            <div>{list.music.title}</div>
          </Col>
          <Col className="list-artist">
            <div>{list.music.artist}</div>
          </Col>
          <Col className="list-album">
            <div>{list.music.album}</div>
          </Col>
          {/* <Col>
            <div>{list.music.likes}</div>
          </Col> */}
          <Col>
            <img class="songdetails" src={songdetails} alt={"곡정보 보기"} title={"곡정보 보기"}/>
          </Col>
        </Row>
      ))}
    </div>
  );
}
