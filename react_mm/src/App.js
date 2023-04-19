import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import MusicRecom from "./pages/MusicRecom";
import MusicPlay from "./pages/MusicPlay";
import MusicList from "./pages/MusicList";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: 1280, margin: "auto", padding: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicRecom" element={<MusicRecom />}></Route>
          <Route path="/musicPlayer" element={<MusicPlay />}></Route>
          <Route path="/musicList" element={<MusicList />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;