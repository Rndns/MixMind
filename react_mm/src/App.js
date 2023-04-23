import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import MusicRecom from "./pages/MusicRecom";
import MusicPlay from "./pages/MusicPlay";
import MusicList from "./pages/MusicList";
import Genrelist from "./pages/GenreList";
import GenreListInfo from "./pages/GenreInfo";
import Footer from "./layouts/footer";
import AudioList from "./pages/AudioList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div style={{ maxWidth: 1280, margin: "auto", padding: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musicRecom" element={<MusicRecom />}></Route>
            <Route path="/musicPlayer" element={<MusicPlay />}></Route>
            <Route path="/musicList" element={<MusicList />}></Route>
            <Route path="/musicPlayList" element={<AudioList />}></Route>
            <Route path="/genreList" element={<Genrelist />}></Route>
            <Route path="/genreListInfo" element={<GenreListInfo />}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </RecoilRoot>
  );
}

export default App;