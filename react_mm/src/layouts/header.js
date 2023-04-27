import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';

const Header = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useRecoilState(loginState);

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();

            if (response.ok) {
            localStorage.setItem('token', data.token);
            setLoggedIn(true);
            } else {
            console.error(data.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>로그인</button>
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

export default Header;
