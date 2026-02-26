import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");

    if (!accepted) {
      // Setăm delay de 3 secunde (3000ms) înainte de a arăta banner-ul
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);

      // Cleanup
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
  <div className={`cookie-banner ${showBanner ? "show" : ""}`}>
      <p>
        Folosim cookie-uri pentru a îmbunătăți experiența ta pe site. 
        <a href="/cookie" target="_blank"> Află mai multe</a>.
      </p>
      <button className="btn-accept" onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
}

export default CookieBanner;
