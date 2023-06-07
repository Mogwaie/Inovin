import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";

function RoutesPath() {
  return (
    <div className="RoutesPath">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default RoutesPath;
