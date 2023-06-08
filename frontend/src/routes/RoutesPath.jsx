import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";
import NavbarUser from "../components/Navbar";

function RoutesPath() {
  return (
    <div className="RoutesPath">
      <NavbarUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default RoutesPath;
