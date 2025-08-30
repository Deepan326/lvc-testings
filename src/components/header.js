import { Link } from "react-router-dom";
import logo from "../assets/lvc-icon.jpg";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style.css";

const Header = () => {

   useEffect(() => {
    const el = document.getElementById("itServicesDropdown");
    if (!el || !window.bootstrap) return;

    // Create or get the dropdown instance (Bootstrap 5)
    const dd = window.bootstrap.Dropdown.getOrCreateInstance(el, {
      display: "static",   // keeps menu within navbar; no portal
      autoClose: true
    });

    // Optional: if something else is swallowing the click, force toggle
    const clickHandler = (e) => {
      // don't navigate anywhere, just toggle the menu
      e.preventDefault();
      dd.toggle();
    };
    el.addEventListener("click", clickHandler);

    return () => {
      el.removeEventListener("click", clickHandler);
      dd.dispose();
    };
  }, []);

  
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo aligned to the left */}


          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>


          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered navigation links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Who We Are
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/insight" className="nav-link">
                  Insights
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              {/* NEED TO DO: Add a projects component/page */}
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  type="button"
                  id="itServicesDropdown"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  IT Services
                </button>

                {/* IMPORTANT: menu is a child of the same li.nav-item.dropdown */}
                <ul className="dropdown-menu" aria-labelledby="itServicesDropdown">
                  <li><a className="dropdown-item" href="/services">Services</a></li>
                  <li><a className="dropdown-item" href="/projects">Projects</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              {/* NEED TO DO: Add a careers component/page */}
              <li className="nav-item">
                <Link to="/careers" className="nav-link">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
