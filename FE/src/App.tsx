import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import Home from "./pages/homepage/Home";
import Newsletter from "./pages/newsletter/Newsletter";
import Admin from "./pages/admin/Admin";
import Contatti from './pages/contatti/Contatti'


function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
