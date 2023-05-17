import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PlayGroup() {
    const location = useLocation()
    const [playList, setPlayListState] = useState([])

    

    useEffect(() => {
        console.log(location.state.musicList)
        setPlayListState(location.state.musicList)
    }, [])

    return (
        <div>
            {playList && playList.map((list) => (
                <div key={list.music.id}>
                    <img src={list.music.albumImg} alt={list.music.title}></img>
                    <div>{list.music.title}</div>
                    <div>{list.music.artist}</div>
                    <div>{list.music.genre}</div>
                    <div>{list.music.likes}</div>
                    <div>{list.music.releasedDate}</div>
                    {/* <div>{list.music.composer}</div>
                    <div>{list.music.lyricist}</div> */}
                    <button >쓰레기통 모양</button>
                    <button >돋보기 모양</button>
                </div>
            ))}
        </div>
    )
}