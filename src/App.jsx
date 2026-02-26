import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import Features from "./components/Features.jsx";
import Servicii from "./components/Servicii.jsx"; // Secțiunea Servicii
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";

import Portofoliu from "./pages/Portofoliu.jsx";
import Despre from "./pages/Despre.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import CumLucram from "./pages/CumLucram.jsx";

import GridPortofoliu from "./pages/GridPortofoliu.jsx";
import Politica from "./pages/Politica.jsx";
import Cookies from "./pages/Cookie.jsx";
import Termeni from "./pages/Termeni.jsx";

import Bucatarie from "./pages/Bucatarie.jsx";
import Living from "./pages/Living.jsx";
import Dormitor from "./pages/Dormitor.jsx";
import Dressing from "./pages/Dressing.jsx";
import Copii from "./pages/Copii.jsx";
import Hol from "./pages/Hol.jsx";
import Baie from "./pages/Baie.jsx";
import Comercial from "./pages/Comercial.jsx";


import "./App.css";

function App() {
  // Ref pentru secțiunea Portofoliu
  const portfolioRef = useRef(null);

  // Funcție scroll către Portofoliu
  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BrowserRouter>
      {/* Navbar cu funcția de scroll */}
      <Navbar scrollToPortfolio={scrollToPortfolio} />

      <Routes>
        {/* Pagina principală */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              

              {/* Urmează Products și Features */}
              <Products />
              <Features />
              {/* Secțiunea Portofoliu imediat după Hero */}
              <div ref={portfolioRef}>
                <Portofoliu />
              </div>
              {/* Secțiunea Servicii */}
              <Servicii />
            </>
          }
        />

        {/* Alte pagini */}
        <Route path="/despre" element={<Despre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grid-portofoliu" element={<GridPortofoliu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cum-lucram" element={<CumLucram />} />

        <Route path="/politica" element={<Politica />} />
        <Route path="/cookie" element={<Cookies />} />
        <Route path="/termeni" element={<Termeni />} />
      
        <Route path="/bucatarie" element={<Bucatarie />} />
        <Route path="/living" element={<Living />} />
        <Route path="/dormitor" element={<Dormitor />} />
        <Route path="/dressing" element={<Dressing />} />
        <Route path="/copii" element={<Copii />} />
        <Route path="/hol" element={<Hol />} />
        <Route path="/baie" element={<Baie />} />
        <Route path="/comercial" element={<Comercial />} />
              

      </Routes>

      {/* Footer afișat pe toate paginile */}
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
