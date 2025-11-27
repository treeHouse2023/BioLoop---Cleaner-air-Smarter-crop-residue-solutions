import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* TOP ROW: logo + tagline + hamburger */}
        <div className="navbar-top">
          <div className="navbar-left">
            <div className="navbar-logo">
              <span className="logo-mark">BL</span>
              <span className="logo-text">BioLoop</span>
            </div>

            <span className="navbar-tagline">
              Cleaner air • Smarter crop residue solutions
            </span>
          </div>

          {/* HAMBURGER (visible on mobile via CSS) */}
          <button
            className={`navbar-toggle ${menuOpen ? "open" : ""}`}
            onClick={handleToggle}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <div className="navbar-toggle-box">
              <span className="navbar-toggle-line" />
              <span className="navbar-toggle-line" />
              <span className="navbar-toggle-line" />
            </div>
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
            onClick={closeMenu}
          >
            AQI Dashboard
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
            onClick={closeMenu}
          >
            Crop Residue Booking
          </NavLink>

          <NavLink
            to="/what-is-aqi"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
            onClick={closeMenu}
          >
            What is AQI Index?
          </NavLink>

          <NavLink
            to="/stubble-awareness"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
            onClick={closeMenu}
          >
            What is Stubble Burning?
          </NavLink>

          <NavLink
            to="/about-biolopp"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
            onClick={closeMenu}
          >
            About BioLoop
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
