import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../styles.css';
import imgLogo from '../images/logo.png';

const Header = () => {
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
    <Navbar variant="dark">
      <Navbar.Brand href="#home">
        <img
            src={imgLogo}
            width="220"
            height="45"
            className="d-inline-block align-top"
            alt="MixMind Logo"
        />
      </Navbar.Brand>
      <Nav>
        <Button variant="light" onClick={() => {loggedIn ? navigate('/logout') : navigate('/login')}}>
          <span className="font-weight-bold">{loggedIn ? '로그아웃' : '로그인'}</span>
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;