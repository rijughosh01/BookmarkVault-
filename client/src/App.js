import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Profile from "./pages/Profile.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { useAuth } from "./hooks/useAuth.js";

function App() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
