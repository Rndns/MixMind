import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../../config";

const API_USER_URL = API.USER;

export default function Info() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState();
    const [nickname, setNickname] = useState();
    const [age, setAge] = useState();

    useEffect(() => {
        setEmail(location.state.info.email)
        setNickname(location.state.info.nickname)
        setAge(location.state.info.age)
    }, [])

    const editInfo = async() => {
        try {
            const response = await fetch(`${API_USER_URL}/edit/${location.state.info.id}/`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    nickname,
                    age,
                }),
            });

            if (response.ok) {
                alert('수정이 완료되었습니다.');
            } else {
                const data = await response.json();
                alert(data.message);
            }

        } catch (error) {
            console.error('수정 중 오류 발생:', error);
        }

        navigate('/')
    }

    return(
        <div class="modify-form">
            <div class="mform-group1">
                <label class="mlabel1"><b>Email</b></label>
                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="hexampleInputEmail" placeholder="이메일을 입력해주세요"/>
            </div>
            <div class="mform-group2">
                <label class="mlabel2"><b>Nickname</b></label>
                <input type="text" class="form-control" value={nickname} onChange={(e) => setNickname(e.target.value)} id="hexampleInputnickname" placeholder="닉네임을 입력해주세요"/>
            </div>
            <div class="mform-group3">
                <label class="mlabel3"><b>Age</b></label>
                <input type="number" class="form-control" value={age} onChange={(e) => setAge(e.target.value)} id="hexampleInputage" placeholder="나이를 입력해주세요"/>
                <button onClick={editInfo} class="btn btn-outline-light"><b>수정</b></button>
            </div>
        </div>
        // <div>
        //     <input
        //         type="email"
        //         placeholder="이메일"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         placeholder="닉네임"
        //         value={nickname}
        //         onChange={(e) => setNickname(e.target.value)}
        //     />
        //     <input
        //         type="number"
        //         placeholder="나이"
        //         value={age}
        //         onChange={(e) => setAge(e.target.value)}
        //     />
        //     <button onClick={editInfo}>수정</button>
        // </div>
    )
}