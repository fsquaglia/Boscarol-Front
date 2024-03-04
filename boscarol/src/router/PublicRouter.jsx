import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../public/components/Home/Home";
import Navbar from "../public/components/Navbar/Navbar";
function PublicRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default PublicRouter;
