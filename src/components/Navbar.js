import { Link } from "react-router-dom";
import { useState } from "react";
import "../pages/Navbar.css";

function Navbar({ scrollToPortfolio }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images/logoDagi.png"
            alt="DagiDeluxe"
            height="60"
            className="me-2"
          />
        </Link>

        <div className="ms-auto d-flex align-items-center">
          {/* Portofoliu */}
          <button
            className="btn nav-link d-inline mx-3"
            onClick={scrollToPortfolio}
          >
            Portofoliu
          </button>

          {/* Blog */}
          <Link className="nav-link d-inline mx-3" to="/blog">
            Blog
          </Link>

          {/* Cum lucrăm */}
          <Link className="nav-link d-inline mx-3" to="/cum-lucram">
            Cum lucrăm
          </Link>

          {/* Despre noi cu dropdown */}
          <div
            className="dropdown-despre mx-3"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="nav-link d-inline dropdown-trigger">
              Despre noi ▾
            </span>

            {open && (
              <div className="dropdown-menu-custom">
                <Link to="/politica">Politica de Confidențialitate</Link>
                <Link to="/cookie">Politica de Cookies</Link>
                <Link to="/termeni">Termeni și Condiții</Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link className="nav-link d-inline mx-3" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
