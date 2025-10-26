import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Emergency from "./pages/Emergency";
import OurHospital from "./pages/OurHospital";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/about/hospital" element={<OurHospital />} />
            <Route path="/about/team" element={<OurTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
