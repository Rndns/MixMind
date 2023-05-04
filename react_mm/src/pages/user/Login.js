import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../atom/atoms';
import { API } from "../../config";

const API_USER_URL = API.USER;

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useRecoilState(loginState);

    const handleLogin = async () => {
        try {
            const response = await fetch(`${API_USER_URL}/login/`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();

            if (response.ok) {
                document.cookie = `jwt=${data.token}`;
                setLoggedIn(true);
                navigate('/')
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div class="login-form">
            <div class="form-group1">
                <label class="label1" for="exampleInputEmail1"><b>Email</b></label>
                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="이메일을 입력해주세요"/>
            </div>
            <div class="form-group2">
                <label class="label2" for="exampleInputPassword1"><b>Password</b></label>
                <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="비밀번호를 입력해주세요"/>
                <button onClick={handleLogin} class="btn btn-outline-light"><b>로그인</b></button>
                <button 
                    class="btn btn-outline-light"
                    onClick={() => {
                        navigate(`/regist`, {
                        replace: false 
                    });
                }}>
                <b>회원가입</b>
                </button>
            </div>
        </div>
    );
};

export default Login;
