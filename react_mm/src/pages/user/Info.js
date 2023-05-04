import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { API } from "../../config";
import { loginState } from '../../atom/atoms';

const API_USER_URL = API.USER;

export default function Info() {
    const navigate = useNavigate();
    const location = useLocation();

    const [loggedIn, setLoggedIn] = useRecoilState(loginState);
    const [email, setEmail] = useState();
    const [nickname, setNickname] = useState();
    const [age, setAge] = useState();

    useEffect(() => {
        setEmail(location.state.info.email)
        setNickname(location.state.info.nickname)
        setAge(location.state.info.age)
    }, [])

    const editInfo = async() => {
        const password = prompt('비밀번호를 입력해주세요.')

        const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));

        try {
            if (jwtToken) {
                const token = jwtToken.split('=')[1];
                const response = await fetch(`${API_USER_URL}/edit/${location.state.info.id}/`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        email,
                        nickname,
                        age,
                        password,
                    }),
                });
                if (response.ok) {
                    setLoggedIn(false);
                    alert('수정이 완료되었습니다.');
                    document.cookie = "";                      
                    navigate('/')

                } else {
                    const data = await response.json();
                    navigate('/info')
                    alert(data.message);
                }
            }
        } catch (error) {
            console.error('수정 중 오류 발생:', error);
            alert('잘못된 접근입니다.')
            navigate('/info')
        }
    }

    const deleteUser = async() => {
        const password = prompt('비밀번호를 입력해주세요.')

        const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));

        try {
            if (jwtToken) {
                const token = jwtToken.split('=')[1];
                const response = await fetch(`${API_USER_URL}/delete/${location.state.info.id}/`, {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        password,
                    }),
                });

                if (response.ok) {
                    setLoggedIn(false);
                    document.cookie = '';
                    navigate('/')
                    alert('탈퇴가 완료되었습니다.');
                } else {
                    const data = await response.json();
                    navigate('/info')
                    alert(data.message);
                }
            }

        } catch (error) {
            console.error('탈퇴 중 오류 발생:', error);
            alert('잘못된 접근입니다.')
            navigate('/info')
        }
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
                <button onClick={deleteUser} class="btn btn-outline-light"><b>탈퇴</b></button>
            </div>
        </div>
    )
}