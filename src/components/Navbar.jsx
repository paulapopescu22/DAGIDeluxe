import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../pages/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePortofoliuClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            type="button"
            className="btn nav-link d-inline mx-3"
            onClick={handlePortofoliuClick}
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
            <Link to="/despre" className="nav-link d-inline dropdown-trigger">
              Despre noi ▾
            </Link>

            {open && (
              <div className="dropdown-menu-custom">
                <Link to="/despre">Despre noi</Link>
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
