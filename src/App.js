import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Personal from "./components/Personal/Personal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Personal />} />
        <Route path="/2" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
