import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import Team from "./pages/Team";
// import Speakers from "./pages/Speakers";
// import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/team" element={<Team />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/shop" element={<Shop />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
