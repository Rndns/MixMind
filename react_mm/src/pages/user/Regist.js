import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from "../../config";

const API_USER_URL = API.USER;

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch(`${API_USER_URL}/regist/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    nickname,
                    age,
                }),
            });

            if (response.ok) {
                alert('회원가입이 완료되었습니다.');
            } else {
                const data = await response.json();
                alert(data.message);
            }

        } catch (error) {
            console.error('회원가입 중 오류 발생:', error);
        }

        navigate('/')
    };

    return (
        <div class="join-form">
            <div class="hform-group1">
                <label class="hlabel1"><b>Email</b></label>
                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="hexampleInputEmail" placeholder="이메일을 입력해주세요"/>
            </div>
            <div class="hform-group2">
                <label class="hlabel2"><b>Password</b></label>
                <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="hexampleInputPassword" placeholder="비밀번호를 입력해주세요"/>
            </div>
            <div class="hform-group3">
                <label class="hlabel3"><b>Nickname</b></label>
                <input type="text" class="form-control" value={nickname} onChange={(e) => setNickname(e.target.value)} id="hexampleInputnickname" placeholder="닉네임을 입력해주세요"/>
            </div>
            <div class="hform-group4">
                <label class="hlabel4"><b>Age</b></label>
                <input type="number" class="form-control" value={age} onChange={(e) => setAge(e.target.value)} id="hexampleInputage" placeholder="나이를 입력해주세요"/>
                <button onClick={handleRegister} class="btn btn-outline-light"><b>회원가입</b></button>
            </div>
        </div>
        // <div>
        //     <h2>회원가입</h2>
        //     <input
        //         type="email"
        //         placeholder="이메일"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //     />
        //     <input
        //         type="password"
        //         placeholder="비밀번호"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
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
        //     <button onClick={handleRegister}>회원가입</button>
        // </div>
    );
};


