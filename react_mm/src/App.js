import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./pages/Home";
import MusicRecom from "./pages/MusicRecom";


function App() {
  return (
    <Router>
      <div style={{ maxWidth: 1280, margin: "auto", padding: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MusicRecom" element={<MusicRecom />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;