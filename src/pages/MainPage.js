import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import NotFound from "./NotFound";

function MainPage() {
  const userinfo = useSelector((state) => state.userinfo.user);

  return (
    <div>
      {userinfo?.name !== "" ? (
        <BrowserRouter>
          <Routes>
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />

          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default MainPage;
