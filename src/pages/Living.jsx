import Slider from "react-slick";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "./Living.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Living() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
  };

  const [scrollDir, setScrollDir] = useState("scroll-up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      setScrollDir(scrollY > lastScrollY ? "scroll-down" : "scroll-up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const materials = [
      {
      title: "Mobilă de Hol din MDF Vopsit",
      img: "/images/Materiale/vopsit.jpg",
      desc: "MDF vopsit oferă un finisaj elegant și neted, perfect pentru holuri moderne sau clasice, durabil și personalizabil.",
    },
    {
      title: "Mobilă de Hol din MDF Înfoliat",
      img: "/images/Materiale/infoliat.jpg",
      desc: "MDF înfoliat, ușor de întreținut, rezistent la zgârieturi și abur, cu multiple texturi și culori.",
    },
    {
      title: "Mobilă de Hol din PAL Melaminat",
      img: "/images/Materiale/pal.jpg",
      desc: "PAL melaminat, o soluție accesibilă, durabilă și practică, ideală pentru holuri funcționale și familiare.",
    },
  ];

  const images = [
    "/images/images-living/p7.jpg",
    "/images/images-living/p8.jpg",   
    "/images/images-living/p9.jpg",  
    "/images/images-living/p10.jpg",
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: 1.6 }}>
      {/* TITLU */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", fontSize: "2.8rem", marginBottom: "20px", color: "#6b1f3f" }}
      >
        Mobilă de Living la Comandă
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ textAlign: "center", fontSize: "1.3rem", marginBottom: "30px", color: "#1a1a1a" }}
      >
        Locul în care totul prinde sens.
      </motion.p>

      {/* SLIDER */}
      <div style={{ maxWidth: "900px", margin: "0 auto", borderRadius: "15px", overflow: "hidden" }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <motion.img
                src={img}
                alt={`Living ${index + 1}`}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* SECȚIUNE: Centrul de comandă al familiei */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          marginTop: "40px",
          padding: "40px 20px",
          borderRadius: "15px",
          backgroundColor: "#fff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "2rem", color: "#6b1f3f" }}>Centrul de comandă al familiei</h2>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Sufrageria este spațiul cu dublu rol: este vitrina în care îți primești prietenii, dar și locul unde te relaxezi la un film după o zi lungă. Această dualitate creează o presiune de design unică. Ai nevoie de un mobilier care să impresioneze vizual, să fie „de copertă”, dar care să reziste la maratoane de seriale, jucării uitate pe jos și cine festive. La Dagi Deluxe, înțelegem că livingul trebuie să fie, înainte de toate, primitor.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Capcana seturilor standard</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Multe livinguri ajung să arate impersonal, ca niște showroom-uri reci, din cauza seturilor de mobilier prefabricate care nu comunică cu arhitectura camerei. O comodă TV prea scurtă pe un perete lung sau o bibliotecă ce lasă spații ciudate până la tavan pot fragmenta vizual încăperea. Noi nu aducem cutii în casa ta; noi creăm o structură care îmbracă peretele și oferă fluiditate spațiului.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Echilibrul Dagi Deluxe</h3>
        <p style={{ fontSize: "1.1rem" }}>
          Abordarea noastră pune accent pe „managementul tehnologiei”. Într-o eră a gadgeturilor, mobilierul trebuie să ascundă inteligent kilometrii de cabluri, routerele și consolele, lăsând la vedere doar ceea ce merită admirat: o vază, o carte, o textură fină. Folosim materiale durabile și feronerie de top pentru a construi piese centrale care transformă un perete gol într-o declarație de stil.
        </p>
      </motion.div>

      {/* CARDURI MATERIALE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", marginTop: "50px" }}
      >
        {materials.map((mat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.25)" }}
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <img src={mat.img} alt={mat.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>{mat.title}</h3>
              <p>{mat.desc}</p>
              <motion.button
                whileHover={{ backgroundColor: "#6b1f3f", scale: 1.05 }}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  border: "none",
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
              >
                Vezi modele și detalii
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* SECȚIUNE: DE CE SĂ LUCREZI CU UN ATELIER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          marginTop: "50px",
          padding: "40px 20px",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "2rem", color: "#6b1f3f" }}>
          DE CE SĂ LUCREZI CU UN ATELIER PRECUM DAGI DELUXE?
        </h2>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Livingul este, prin excelență, un spațiu atipic. Colaborarea cu Dagi Deluxe îți oferă avantaje pe care producția de masă le ignoră.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Integrare arhitecturală</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Noi nu punem doar un dulap lângă perete. Putem „îmbrăca” un stâlp de rezistență, putem masca o grindă inestetică sau putem crea o continuitate vizuală între zona de dining și cea de relaxare. Mobila devine parte din casă.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Soluții pentru prize și lumini</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Un mare dezavantaj al mobilei de serie este că acoperă prizele exact acolo unde ai nevoie de ele. Noi proiectăm spatele mobilierului cu decupaje precise și canale de cabluri integrate, astfel încât să poți conecta orice echipament fără să tragi prelungitoare inestetice pe parchet.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Personalitate, nu catalog</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Nu te limităm la „cele 3 culori disponibile”. Dacă vrei ca interiorul vitrinei să fie o nuanță de accent, iar exteriorul neutru, se poate. Tu dictezi cromatica, noi asigurăm armonia tehnică.
        </p>

        <h2 style={{ marginTop: "30px", marginBottom: "20px", fontSize: "2rem", color: "#6b1f3f" }}>
          ÎNTREBĂRI FRECVENTE DESPRE MOBILA DE LIVING
        </h2>

        <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
          <strong>„Cum ascundem toate cablurile de la TV și consolă?”</strong> Aceasta este o prioritate în proiectele noastre de living. Creăm „pereți falși” din mobilier sau canale mascate în spatele comodei, care permit circulația aerului (pentru a nu supraîncălzi aparatura), dar ascund complet firele. Rezultatul este un aspect curat, aerisit, unde tehnologia nu domină vizual.
        </p>

        <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
          <strong>„Vreau o bibliotecă mare, dar mi-e teamă să nu încarce camera.”</strong> Secretul stă în proporții și iluminat. Putem alterna corpurile închise (pentru depozitare invizibilă) cu polițe deschise, iluminate cu benzi LED încastrate. Această alternanță creează adâncime și face ca ansamblul să pară mai ușor, oferind o lumină ambientală plăcută seara.
        </p>

        <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
          <strong>„Pot integra și un mic spațiu de lucru în mobila de living?”</strong> Sigur. Putem proiecta un blat de lucru retractabil sau un corp care, atunci când este închis, arată ca un simplu dulap elegant, dar care se deschide într-un birou complet funcțional. Este soluția ideală pentru a separa vizual munca de relaxare, chiar dacă au loc în aceeași cameră.
        </p>
      </motion.div>

      {/* SECȚIUNE CONTACT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          marginTop: "50px",
          padding: "40px 20px",
          borderRadius: "15px",
          backgroundColor: "#fff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "2rem", color: "#6b1f3f" }}>VREI O DISCUȚIE CONCRETĂ?</h2>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Imaginează-ți o seară de vineri. Te așezi pe canapea, lumina ambientală din bibliotecă este caldă, iar privirea nu ți se mai agață de niciun cablu dezordonat sau obiect rătăcit. Totul are o fluiditate care te calmează.
        </p>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Nu trebuie să alegi mobila astăzi. Dar dacă simți că livingul tău are potențialul de a fi mai mult decât o simplă cameră cu televizor, suntem aici să explorăm opțiunile.
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          Hai să discutăm pe concret despre spațiul tău: <br/>
          <strong>Telefon / WhatsApp:</strong> 0721072995 <br/>
          <strong>Web:</strong> <a href="https://dagideluxe.ro" target="_blank" rel="noreferrer" style={{ color: "#6b1f3f" }}>dagideluxe.ro</a>
        </p>
      </motion.div>
    </div>
  );
}

export default Living;
