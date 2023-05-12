import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PlayGroup() {
    const location = useLocation()
    const [playGroup, setPlayListState] = useState([])

    useEffect(() => {
        setPlayListState(location.state.PlayGroup)
    }, [])

    return (
        <div>
            {playGroup && playGroup.map((playList) => (
                <div key={playList.id}>
                    {playList.name}
                </div>
            ))}
        </div>
    )
}