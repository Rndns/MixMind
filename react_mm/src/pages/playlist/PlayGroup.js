import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PlayGroup() {
    const location = useLocation()
    const [playGroup, setPlayListState] = useState([])

    useEffect(() => {
        setPlayListState(location.state.playGroup)
    }, [])

    return (
        <div>
            {playGroup && playGroup.map((playGroup) => (
                <div key={playGroup.id}>
                    {playGroup.name}
                    <button >수정</button>
                    <button >삭제</button>
                </div>
            ))}
        </div>
    )
}