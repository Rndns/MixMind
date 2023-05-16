import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PlayGroup() {
    const location = useLocation()
    const [playGroup, setPlayGroupState] = useState([])

    const editPlayGroup = () => {
        
    }

    useEffect(() => {
        setPlayGroupState(location.state.playGroup)
    }, [])

    return (
        <div>
            {playGroup && playGroup.map((playGroup) => (
                <div key={playGroup.id}>
                    {playGroup.name}
                    <button onClick={editPlayGroup}>수정</button>
                    <button >삭제</button>
                </div>
            ))}
        </div>
    )
}