import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import Servicii from "./components/Servicii"; // Secțiunea Servicii
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

import Portofoliu from "./pages/Portofoliu";
import Despre from "./pages/Despre";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CumLucram from "./pages/CumLucram";

import GridPortofoliu from "./pages/GridPortofoliu";
import Politica from "./pages/Politica";
import Cookies from "./pages/Cookie";
import Termeni from "./pages/Termeni";

import Bucatarie from "./pages/Bucatarie";
import Living from "./pages/Living";
import Dormitor from "./pages/Dormitor";
import Dressing from "./pages/Dressing";
import Copii from "./pages/Copii";
import Hol from "./pages/Hol";
import Baie from "./pages/Baie";
import Comercial from "./pages/Comercial";


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
