import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import MusicRecom from "./pages/MusicRecom";
import MusicPlay from "./pages/MusicPlay";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: 1280, margin: "auto", padding: 10 }}>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/MusicRecom" element={<MusicRecom />}></Route>
          <Route path="/musicplaypage" element={<MusicPlay />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;