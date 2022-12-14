import React from "react";

import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home.jsx";
import Profile from "./components/profile/Profile.jsx";

import Navbar from "./NavbarComponents/navbar/Navbar.jsx";
import LeftNavbar from "./NavbarComponents/leftNavbar/LeftNavbar.jsx";
import RightNavbar from "./NavbarComponents/rightNavbar/RightNavbar.jsx";

import { Outlet, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="" style={{ display: "flax" }}>
          <LeftNavbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

          <RightNavbar />
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      <Navigate to="./components/login/Login.jsx" />;
    }
    return children;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
