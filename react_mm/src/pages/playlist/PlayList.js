import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PlayGroup() {
    const location = useLocation()
    const [playList, setPlayListState] = useState([])

    

    useEffect(() => {
        setPlayListState(location.state.playGroup)
    }, [])

    return (
        <div>
            {playList && playList.map((playList) => (
                <div key={playList.id}>
                    {playList.name}
                    <button >삭제</button>
                </div>
            ))}
        </div>
    )
}