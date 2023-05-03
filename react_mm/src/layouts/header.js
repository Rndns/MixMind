import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';
import { Navbar, Nav, Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../styles.css';
import imgLogo from '../images/logo.png';
import imglogin from '../images/log-in.png'
import imglogout from '../images/logout.png'
import imgsidebar from '../images/sidebar.png'
import imgsearch from '../images/search.png'
import imglist from '../images/searchlist.png'
import imggenre from '../images/genrelist.png'
import imggenreselect from '../images/genreselect.png'
import imgmovie from '../images/movie.png'
import account from '../images/account.png'
import { API } from "../config";


const API_USER_URL = API.USER;

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
        <Button variant = 'dark' onClick={() => {loggedIn ? handleLogout() : navigate('/login')}}>
          {loggedIn ? <img src={imglogout} width = "30" height = "30" alt="로그아웃" /> : <img src={imglogin} width = "30" height = "30" alt="로그인" />}
        </Button>
        <Button variant = 'dark' onClick={handleShow}>
          <img src={imgsidebar} width = "30" height = "30" alt="사이드바" />
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title onClick={() => {takeUserInfo()}}>
              <img src={account} width = "48" height = "48" alt="계정"/>
              <span><b>&emsp;계정</b></span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="offcanvas-menu">
              <div className="offcanvas-menu-item" onClick={() => {navigate(`/autoComplete`);}}>
                <img src={imgsearch} width="30" height="30" alt="자동완성 아이콘" />
                <span><b>&nbsp;자동완성</b></span>
              </div>
              <div className="offcanvas-menu-item" onClick={() => {navigate(`/musicPlayList`, {replace: false });}}>
                <img src={imglist} width="30" height="30" alt="음악 리스트 아이콘" />
                <span><b>&nbsp;음악 리스트</b></span>
              </div>
              <div className="offcanvas-menu-item" onClick={() => {navigate(`/genreList`);}}>
                <img src={imggenre} width="30" height="30" alt="장르 리스트 아이콘" />
                <span><b>&nbsp;장르 리스트</b></span>
              </div>
              <div className="offcanvas-menu-item" onClick={() => {navigate(`/genreSelect`);}}>
                <img src={imggenreselect} width="30" height="30" alt="장르 select 리스트 아이콘" />
                <span><b>&nbsp;장르 select 리스트</b></span>
              </div>
              <div className="offcanvas-menu-item" onClick={() => {navigate(`/musicTitle`);}}>
                <img src={imgmovie} width="30" height="30" alt="영화 제목 아이콘" />
                <span><b>&nbsp;영화 제목</b></span>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Nav>
    </Navbar>
  );
};

export default Header;