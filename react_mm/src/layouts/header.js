import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../atom/atoms';
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
import styled from 'styled-components';
import { titleCollect } from "../services/appServices";
import ReactDOM from 'react-dom';


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
  const [wholeTextArray, setWholeTextArray] = useState(['아이유', '수지', '복숭아', '밤편지'])
  const [inputValue, setInputValue] =useState('')
  const [isHaveInputValue, setIsHaveInputValue] = useState(false)
  const [dropDownList, setDropDownList] = useState(wholeTextArray)
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
  const [showDropDownBox, setShowDropDownBox] = useState(false);

  const showDropDownList = () => {
      if (inputValue === '') {
          setIsHaveInputValue(false)
          setDropDownList([])
      } else {
          const chooseTextList = wholeTextArray.filter(textItem => 
              textItem.includes(inputValue)
              )
              setDropDownList(chooseTextList)
      }
  }

  const changeInputValue = event => {
      setInputValue(event.target.value)
      setIsHaveInputValue(true)
  }

  const clickDropDownItem = clickedItem => {
      setInputValue(clickedItem)
      setIsHaveInputValue(false)

      // navigate(`/autoTitleInfo/${clickedItem}`);
      // navigate(`/autoTitleSelect?title=${clickedItem}`);
      navigate(`/autoTitleInfo`, {
        state: {
          title : clickedItem
        }
      });
      
  };

  const handleDropDownKey = event => {
      if (isHaveInputValue) {
          if (
              event.key === 'ArrowDown' &&
              dropDownList.length - 1 > dropDownItemIndex
          ) {
              setDropDownItemIndex(dropDownItemIndex + 1)
          }

          if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
              setDropDownItemIndex(dropDownItemIndex - 1)
          if (event.key === 'Enter' && dropDownItemIndex >= 0) {
              clickDropDownItem(dropDownList[dropDownItemIndex])
              setDropDownItemIndex(-1)
          }
          }
  }
  
  const handleDropDownBoxClose = () => {
    setShowDropDownBox(false);
  };

  useEffect(()=> {
    titleCollect().then(data =>{ 
      setWholeTextArray(data);
      setShowDropDownBox(true);
      console.log(wholeTextArray)
  },console.log(wholeTextArray))
  },[])

  useEffect(showDropDownList, [inputValue])

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
      <WholeBox className='inputbox'>
          {/* <Title text='AutoComplete' /> */}
          <InputBox isHaveInputValue={isHaveInputValue}>
            <Input
              type='text'
              value={inputValue}
              onChange={changeInputValue}
              onKeyUp={handleDropDownKey}
              placeholder="검색어를 입력해주세요"
            />
            <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
          </InputBox>
          {ReactDOM.createPortal(
            isHaveInputValue && (
              <DropDownBox  className='DropDownBox'>
                {dropDownList.slice(0, 10).length === 0 && (
                  <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
                )}
                {dropDownList.slice(0, 10).map((dropDownItem, dropDownIndex) => {
                  return (
                    <DropDownItem
                      key={dropDownIndex}
                      onClick={() => clickDropDownItem(dropDownItem)}
                      onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                      className={
                        dropDownItemIndex === dropDownIndex ? 'selected' : ''
                      }
                    >
                      {dropDownItem}
                    </DropDownItem>
                  )
                })}
              </DropDownBox>
            ),
            document.body
          )}
      </WholeBox>
      <Nav>
        <Button variant = 'dark' className="log" onClick={() => {loggedIn ? handleLogout() : navigate('/login')}}>
          {loggedIn ? <img src={imglogout} width = "30" height = "30" alt="로그아웃" title="로그아웃"/> : <img src={imglogin} width = "30" height = "30" alt="로그인" title="로그인"/>}
        </Button>
        <Button variant = 'dark' className="side" onClick={handleShow}>
          <img src={imgsidebar} width = "30" height = "30" alt="사이드바" title="사이드바" />
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

const activeBorderRadius = '16px 16px 0 0'
const inactiveBorderRadius = '16px 16px 16px 16px'

const WholeBox = styled.div`
  position: relative;
  left: 20%;
`

const InputBox = styled.div`
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    padding: 9px;
    border: 5px solid rgb(70 70 70);
    border-radius: 15px;
    z-index: 2;
    width: 340px;
    height: 45px;
    position: relative;
    top: 3px;
    left: 38%;
  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`

const DeleteButton = styled.div`
  cursor: pointer;
  position: relative;
  top: -4px;
`

const DropDownBox = styled.ul`
    width: 17.85%;
    position: fixed;
    top: 7%;
    left: 70.65%;
    display: table-caption;
    margin: 0px auto;
    padding: 0px 0px;
    background-color: white;
    border: 5px solid rgba(70, 70, 70);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
    list-style-type: none;
    z-index: 1;
`

const DropDownItem = styled.li`
    padding: 5px 7px;
    border-bottom: solid;
    border-width: 1px;

  &.selected {
    background-color: lightgray;
  }
`
export default Header;