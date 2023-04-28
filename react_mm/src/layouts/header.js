import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../styles.css';

const Header = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
=======
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
>>>>>>> jin

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

<<<<<<< HEAD
  return (
    <Navbar bg="#121212" variant="dark" sticky="top">
      <Navbar.Brand href="#home">MixMind</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <div className="headbutton">
        <Button className="login-button" variant="outline-info" onClick={handleLogin}>
          Login
        </Button>
        <Button
            className="signup-button"
            variant="outline-info"
            onClick={() => {
            navigate(`/regist`, {
                replace: false,
            });
            }}
        >
            Sign up
        </Button>
      </div>
    </Navbar>
  );
=======
    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
>>>>>>> jin
};

export default Header;