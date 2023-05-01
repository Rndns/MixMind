import React, { useEffect, useState } from "react";
import { musicInfoList } from "../services/appServices";

export default function MusicTitle(){
    const [titles, settitle] = useState([])

    useEffect(() => {
        musicInfoList()
        .then(Data => 
            settitle(Data))
            console.log(titles)
    },[])
    return (
        <div>
            <h1>test</h1>
            {console.log(titles)}
        </div>
    );
}