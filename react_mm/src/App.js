import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import MusicRecom from "./pages/MusicRecom";
import MusicPlay from "./pages/MusicPlay";
import MusicList from "./pages/MusicList";
import Genrelist from "./pages/GenreList";
import GenreListInfo from "./pages/GenreInfo";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import AudioList from "./pages/AudioList";
import { RecoilRoot } from "recoil";
import GenreSelect from "./pages/GenreSelect";
import GenreSelectInfo from "./pages/GenreSelectInfo";
import Register from "./pages/user/Regist";
import Login from "./pages/user/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from "./pages/user/Info";
import AutoComplete from "./pages/AutoComplete";
import MusicTitle from "./pages/MusicTitle";
import AutoTitleInfo from "./pages/AutoTitleInfo";
import AutoTitleSelect from "./pages/AutoTitleSelect";
import PlayGroup from "./pages/playlist/PlayGroup"
import PlayList from "./pages/playlist/PlayList"

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Header/>
        <div className="box">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musicRecom" element={<MusicRecom />}></Route>
            <Route path="/musicPlayer" element={<MusicPlay />}></Route>
            <Route path="/musicList" element={<MusicList />}></Route>
            <Route path="/musicPlayList" element={<AudioList />}></Route>
            <Route path="/genreList" element={<Genrelist />}></Route>
            <Route path="/genreListInfo" element={<GenreListInfo />}></Route>
            <Route path="/genreSelect" element={<GenreSelect />}></Route>
            <Route path="/genreSelectInfo" element={<GenreSelectInfo />}></Route>
            {/* user */}
            <Route path="/regist" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/info" element={<Info />}></Route>
            <Route path="/autoComplete" element={<AutoComplete />}></Route>
            <Route path="/musicTitle" element={<MusicTitle />}></Route>
            <Route path="/autoTitleInfo" element={<AutoTitleInfo />}></Route>
            <Route path="/autoTitleSelect" element={<AutoTitleSelect />}></Route>
            <Route path="/playGroup" element={<PlayGroup />}></Route>
            <Route path="/playList" element={<PlayList />}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </RecoilRoot>
  );
}

export default App;