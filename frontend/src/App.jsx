import Home from "./pages/Home";
import "./main.scss";
import Navbar from "./components/NavbarUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
