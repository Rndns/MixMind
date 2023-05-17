import "./PlayList.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PlayGroup() {
  const location = useLocation();
  const [playList, setPlayListState] = useState([]);
  const [representativeImage, setRepresentativeImage] = useState(null);

  useEffect(() => {
    console.log(location.state.musicList);
    setPlayListState(location.state.musicList);
  }, []);

  useEffect(() => {
    if (playList.length > 0) {
      // 랜덤하게 앨범 이미지를 선택하여 대표 이미지로 설정합니다.
      const randomIndex = Math.floor(Math.random() * playList.length);
      const randomAlbumImage = playList[randomIndex].music.albumImg;
      setRepresentativeImage(randomAlbumImage);
    }
  }, [playList]);

  return (
    <div className="playList">
      {representativeImage && (
        <div className="rep-img">
          <img src={representativeImage} alt="Representative Album" />
          <span>{playList.length}</span>
        </div>
      )}
      {playList.map((list) => (
        <div key={list.music.id}>
          <img src={list.music.albumImg} alt={list.music.title} />
          <div>{list.music.title}</div>
          <div>{list.music.artist}</div>
          <div>{list.music.genre}</div>
          <div>{list.music.likes}</div>
          <div>{list.music.releasedDate}</div>
          {/* <div>{list.music.composer}</div>
          <div>{list.music.lyricist}</div> */}
          <button>쓰레기통 모양</button>
          <button>돋보기 모양</button>
        </div>
      ))}
    </div>
  );
}
