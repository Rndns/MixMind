import "./PlayGroup.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { editPlayGroup, delPlayGroup, loadPlayList } from "../../services/appServices";

export default function PlayGroup() {
    const location = useLocation()
    const navigate = useNavigate()
    const [playGroup, setPlayGroupState] = useState([])

    const editPlayGroup = (e) => {
      const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));
    }

    const delPlayGroup = () => {
        
    }

    const goToPlayList = (id) => {
      loadPlayList(id).then(list => {
        navigate('/playList', {
          state: {
            musicList: list,
          }
        })
      })
    }

    useEffect(() => {
      setPlayGroupState(location.state.playGroup)
    }, [])

    return (
        <div className="playgroup">
          <div className="playlist-header">
            <h2><b>플레이리스트 제목{playGroup.name}</b></h2>
            <Button variant="light" size="lg"><b>전체듣기</b></Button>
            <Button variant="light" size="lg" onClick={editPlayGroup}><b>수정하기</b></Button>
          </div>
            {playGroup && playGroup.map((playGroup) => (
            <Card key={playGroup.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={playGroup.name} />
                <Card.Body>
                    <Card.Title>{playGroup.name}</Card.Title>
                    <Card.Text>
                    {playGroup.name} - {playGroup.name}
                    </Card.Text>
                    <Button variant="danger">삭제</Button>
                </Card.Body>
            </Card>
            ))}
        </div>
    )
}