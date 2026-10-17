import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // asigură-te că stilurile sunt aici

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-buttons">
        
        <Link to="/politica" className="footer-btn">
          Politica de Confidențialitate
        </Link>
        <Link to="/cookie" className="footer-btn">
          Politica de Utilizare a Fișierelor de tip Cookie  
        </Link>
        <Link to="/termeni" className="footer-btn">
          Termeni și Condiții
        </Link>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">Copyright © 2013 – 2025 – DagiDeluxe</p>
        <img
          src={process.env.PUBLIC_URL + "/images/logoDagi.png"}
          alt="DagiDeluxe"
          className="footer-logo"
        />
      </div>
      <div className="footer-bottom2">
        <img
          src={process.env.PUBLIC_URL + "/images/ANPC/SAL.png.webp"}
          alt="DagiDeluxe"
          className="footer-logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/ANPC/SOL.png.webp"}
          alt="DagiDeluxe"
          className="footer-logo"
        />
      </div>
      
    </footer>
  );
}

export default Footer;
