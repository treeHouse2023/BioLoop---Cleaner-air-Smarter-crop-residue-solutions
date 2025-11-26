import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AQIindex from "./AQIindex.jsx";
import Navbar from "./Navbar.jsx";
import Booking from "./Booking.jsx";
import StubbleAwareness from "./StubbleAwareness.jsx";
import AQIawareness from "./AQIawareness.jsx";   
import AboutBioLoop from "./AboutBioLoop.jsx";   

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<AQIindex />} />

          {/* What is AQI Index? must match NavLink `to="/what-is-aqi"` */}
          <Route path="/what-is-aqi" element={<AQIawareness />} />

          {/* About BioLoop must match NavLink `to="/about-biolopp"` */}
          <Route path="/about-biolopp" element={<AboutBioLoop />} />

          <Route path="/stubble-awareness" element={<StubbleAwareness />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
