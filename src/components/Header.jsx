// Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  const handleProjectsClick = (e) => {
    // On mobile, toggle the submenu instead of navigating
    if (window.matchMedia("(max-width: 768px)").matches) {
      e.preventDefault();
      setProjectsOpen((open) => !open);
    } else {
      closeAll();
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" onClick={closeAll}>
          <div className="logo">Karen Natharen</div>
        </Link>

        {/* MENU button (mobile only) */}
        <button
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) setProjectsOpen(false);
          }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          MENU
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <div className="nav-item has-dropdown">
            <Link
              to="/"
              className="nav-link"
              onClick={handleProjectsClick}
              aria-haspopup="true"
              aria-expanded={projectsOpen}
            >
              Projects

            </Link>

            <div className={`dropdown ${projectsOpen ? "open" : ""}`}>
                <Link to="/" className="dropdown-link" onClick={closeAll}>
                All
              </Link>
              <Link
                to="/exhibition-design"
                className="dropdown-link"
                onClick={closeAll}
              >
                Exhibition Design
              </Link>
              <Link
                to="/multimedia-installation"
                className="dropdown-link"
                onClick={closeAll}
              >
                Multimedia Installation
              </Link>
            </div>
          </div>

          <Link to="/about" className="nav-link" onClick={closeAll}>
            About
          </Link>
          <Link to="/process" className="nav-link" onClick={closeAll}>
            Process
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeAll}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}