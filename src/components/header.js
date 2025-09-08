import { Link } from "react-router-dom";
import logo from "../assets/lvc-icon-transparent.png";
import search from "../assets/white-search-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const handleNavAction = (e) => {
  const Bootstrap = window.bootstrap;
  if (!Bootstrap) return;

  const nav = document.getElementById("navbarNav");
  const ddToggle = document.getElementById("itServicesDropdown");

  // IT Services dropdown toggle
  if (e?.currentTarget?.id === "itServicesDropdown" && ddToggle) {
    Bootstrap.Dropdown.getOrCreateInstance(ddToggle).toggle();
    return;
  }

  //Close dropdown and navbar on any other link click
  if (ddToggle) {
    Bootstrap.Dropdown.getOrCreateInstance(ddToggle).hide();
  }
  if (nav) {
    Bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false }).hide();
  }
};

const toggleNav = () => {
  const nav = document.getElementById("navbarNav");
  if (!nav || !window.bootstrap) return;
  window.bootstrap
    .Collapse
    .getOrCreateInstance(nav, { toggle: false })
    .toggle();
};

const Header = () => {

  return (
    <header>
      {/*<nav className="navbar navbar-expand-custom custom-navbar">*/}
      <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
        <div className="container-fluid">
          {/* Logo aligned to the left */}


          <Link to="/" className="navbar-brand" onClick={handleNavAction}>
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>

          <button className="search-bar-button">
            <img src={search} alt='search bar' id='search-bar-logo' />
          </button>
          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            {/* <span className="navbar-dark navbar-toggler-icon"></span> */}

            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered navigation links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={handleNavAction}>
                  Who We Are
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/insight" className="nav-link" onClick={handleNavAction}>
                  Insights
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link" onClick={handleNavAction}>
                  Blog
                </Link>
              </li>
              {/* NEED TO DO: Add a projects component/page */}
              <li className="nav-item dropdown">
                <button
                  id="itServicesDropdown"
                  className="nav-link dropdown-toggle btn btn-link"
                  type="button"
                  aria-expanded="false"
                  onClick={handleNavAction}
                >
                  IT Services
                </button>

                {/* IMPORTANT: menu is a child of the same li.nav-item.dropdown */}
                <ul className="dropdown-menu" aria-labelledby="itServicesDropdown">
                  <li><Link to="/services" className="dropdown-item" onClick={handleNavAction}>Services</Link></li>
                  <li><Link to="/projects" className="dropdown-item" onClick={handleNavAction}>Projects</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link" onClick={handleNavAction}>
                  Products
                </Link>
              </li>
              {/* NEED TO DO: Add a careers component/page */}
              <li className="nav-item">
                <Link to="/careers" className="nav-link" onClick={handleNavAction}>
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleNavAction}>
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
