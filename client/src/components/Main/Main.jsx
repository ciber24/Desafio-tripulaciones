import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";


const Main = () => {
  return <main className="main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </main>;
};

export default Main;
