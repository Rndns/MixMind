import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useRecoilState(loginState);

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();

            if (response.ok) {
                document.cookie = `token=${data.token}`;
                setLoggedIn(true);
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        setLoggedIn(false)
    }

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={loggedIn ? handleLogout : handleLogin}>{loggedIn ? '로그아웃' : '로그인'}</button>
            <div>
                <button
                    onClick={() => {
                        navigate(`/regist`, {
                        replace: false 
                    });
                }}>
                회원가입
                </button>
            </div>
        </div>
    );
};

export default Login;
