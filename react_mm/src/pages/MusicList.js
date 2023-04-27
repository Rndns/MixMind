import React, { useEffect, useState } from 'react';
import { musicInfoList } from '../services/appServices';

export default function MusicList(){

    const [musiclist, setMusicList] = useState()

    useEffect(() => {
        musicInfoList()
        .then(Data => 
            setMusicList(Data))
        console.log(musiclist)
    })
    return (
        <div>
            <h1>test</h1>
            {musiclist}
        </div>
    );
}