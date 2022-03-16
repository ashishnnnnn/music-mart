import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home } from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
