import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../styles.css';
import imgLogo from '../images/logo.png';

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
      fetch('http://127.0.0.1:8000/user/info/', {
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
        <Button variant="light" onClick={() => {loggedIn ? handleLogout() : navigate('/login')}}>{loggedIn ? '로그아웃' : '로그인'}</Button>
      </Nav>
      <Nav>
        <Button variant="light" onClick={() => {takeUserInfo()}}>내정보</Button>
=======
        <Button variant="light" onClick={() => {loggedIn ? navigate('/logout') : navigate('/login')}}>
          <span className="font-weight-bold">{loggedIn ? '로그아웃' : '로그인'}</span>
        </Button>
>>>>>>> hjk
      </Nav>
    </Navbar>
  );
};

export default Header;