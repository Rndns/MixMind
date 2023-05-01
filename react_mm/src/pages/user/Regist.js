import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/user/regist/', {
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
        <div>
            <h2>회원가입</h2>
            <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="닉네임"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <input
                type="number"
                placeholder="나이"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={handleRegister}>회원가입</button>
        </div>
    );
};


