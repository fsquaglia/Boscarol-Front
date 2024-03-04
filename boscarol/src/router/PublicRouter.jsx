import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../public/components/Home/Home";
import Navbar from "../public/components/Navbar/Navbar";
import Login from "../public/components/Login/Login";

function PublicRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default PublicRouter;
