import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Copii() {
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
    "/images/images-kids/p25.jpg",
    "/images/images-kids/p26.jpg",
    "/images/images-kids/p27.jpg",
    
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
        Mobilă pentru Copii la Comandă
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ textAlign: "center", fontSize: "1.3rem", marginBottom: "30px", color: "#1a1a1a" }}
      >
        Camere vesele, sigure și personalizate.
      </motion.p>

      {/* SLIDER */}
      <div style={{ maxWidth: "900px", margin: "0 auto", borderRadius: "15px", overflow: "hidden" }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <motion.img
                src={img}
                alt={`Camera Copii ${index + 1}`}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* SECȚIUNE: Sanctuarul copilului */}
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
        <h2 style={{ marginBottom: "20px", fontSize: "2rem", color: "#6b1f3f" }}>Sanctuarul copilului</h2>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Camera copilului trebuie să fie veselă, sigură și organizată. La Dagi Deluxe proiectăm mobilier care combină funcționalitatea cu creativitatea și siguranța.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Capcana seturilor standard</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Mobilierul de serie poate să nu se potrivească dimensiunilor camerei și nevoilor copilului. Noi personalizăm fiecare piesă pentru a crea un spațiu vesel și practic.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Echilibrul Dagi Deluxe</h3>
        <p style={{ fontSize: "1.1rem" }}>
          Folosim materiale sigure, culori vesele și soluții de depozitare inteligente pentru a transforma camera într-un loc distractiv și funcțional.
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
          Camerele copiilor trebuie să fie sigure, personalizate și vesele. Colaborarea cu Dagi Deluxe oferă avantaje pe care producția de masă le ignoră.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Integrare arhitecturală</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Creăm mobilier care se potrivește perfect cu dimensiunile și forma camerei copilului.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Soluții pentru lumini și depozitare</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Totul este gândit pentru funcționalitate maximă, fără dezordine vizuală.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Personalitate, nu catalog</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Tu alegi culorile și finisajele, noi ne asigurăm că camera copilului arată vesel și armonios.
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
          Imaginează-ți o cameră veselă și organizată, unde copilul se joacă în siguranță și totul este la locul său.
        </p>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Nu trebuie să alegi mobila astăzi. Dar dacă simți că camera copilului poate fi mai mult decât un simplu spațiu de joacă, suntem aici să explorăm opțiunile.
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

export default Copii;
