import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TranslatorPage from "./pages/TranslatorPage";
import RandomStringPage from "./pages/RandomStringPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/generator" element={<RandomStringPage />} />
      </Routes>
    </Router>
  );
}

export default App;
