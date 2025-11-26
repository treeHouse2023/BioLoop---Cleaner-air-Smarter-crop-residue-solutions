import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LEFT: Company name + logo */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <span className="logo-mark">BL</span>
            <span className="logo-text">BioLoop</span>
          </div>

          <span className="navbar-tagline">
            Cleaner air • Smarter crop residue solutions
          </span>
        </div>

        {/* RIGHT: Navigation links */}
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            AQI Dashboard
          </NavLink>
           <NavLink
            to="/booking"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Crop Residue Booking
          </NavLink>

          <NavLink
            to="/what-is-aqi"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            What is AQI Index?
          </NavLink>

          <NavLink
            to="/stubble-awareness"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            What is Stubble Burning?
          </NavLink>
          <NavLink
  to="/about-biolopp"
  className={({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "")
  }
>
  About BioLoop
</NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;
