import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        {/* <Route path="/dashboar/*" element={ } /> */}
      </Routes>
    </>
  );
}

export default AppRouter;
