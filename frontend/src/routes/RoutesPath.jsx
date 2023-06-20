import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Test from "../pages/Test";
import Navbar from "../components/Navbar";
import AdminTest from "../pages/Admintest";
import Login from "../pages/Login";
import SignUp from "../components/SignUp";

function RoutesPath() {
  return (
    <div className="RoutesPath">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<AdminTest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default RoutesPath;
