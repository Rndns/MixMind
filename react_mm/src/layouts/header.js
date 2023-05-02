import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../styles.css';
import imgLogo from '../images/logo.png';
import imglogin from '../images/log-in.png'
import imglogout from '../images/logout.png'
import account from '../images/account.png'
import { API } from "../config";

const API_USER_URL = API.USER;

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setLoggedIn(false)
    alert('로그아웃 되었습니다')
    navigate('/')
  };

  const takeUserInfo = async() => {
    const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));
    
    if (jwtToken) {
      const token = jwtToken.split('=')[1];
      console.log(token)
      fetch(`${API_USER_URL}/info/`, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        navigate('/info', {
          state: {
            info: data
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      alert('잘못된 요청입니다. 다시 로그인 해주세요.')
      window.location.href = 'http://127.0.0.1:8000/user/info/';
    }
  }

  return (
    <Navbar variant="dark">
      <Navbar.Brand href="/">
        <img
            src={imgLogo}
            width="220"
            height="45"
            className="d-inline-block align-top"
            alt="MixMind Logo"
        />
      </Navbar.Brand>
      <Nav>
<<<<<<< HEAD
        <Button variant="light" onClick={() => {loggedIn ? handleLogout() : navigate('/login')}}><b>{loggedIn ? '로그아웃' : '로그인'}</b></Button>
        <Button variant="light" onClick={() => {takeUserInfo()}}><b>내정보</b></Button>
=======
        <Button variant = 'dark' onClick={() => {loggedIn ? handleLogout() : navigate('/login')}}>
          {loggedIn ? <img src={imglogout} width = "30" height = "30" alt="로그아웃" /> : <img src={imglogin} width = "30" height = "30" alt="로그인" />}
        </Button>
        <Button variant = 'dark' onClick={() => {takeUserInfo()}}>
          <img src={account} width = "30" height = "30" alt="내정보" />
        </Button>
>>>>>>> hoon_bari
      </Nav>
    </Navbar>
  );
};

export default Header;