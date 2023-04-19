import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import LoginPage from "./LoginPage";

function MainPage() {
  const userinfo = useSelector((state) => state.userinfo.user);

  return (
    <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homePage" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default MainPage;
