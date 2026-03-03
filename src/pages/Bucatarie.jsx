import React, { useState, useEffect } from "react";import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Bucatarie() {
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
    "/images/images-kitchen/p1.jpg",
    "/images/images-kitchen/p2.jpg",
    "/images/images-kitchen/p3.jpg",
    "/images/images-kitchen/p4.jpg",
    "/images/images-kitchen/p5.jpg",
    "/images/images-kitchen/p6.jpg",
    "/images/images-kitchen/p36.jpg",


  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: 1.6 }}>
      {/* TITLU */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", fontSize: "2.8rem", marginBottom: "30px" }}
      >
        Mobilă de Bucătărie la Comandă
      </motion.h1>

      {/* SLIDER */}
      <div style={{ maxWidth: "900px", margin: "0 auto", borderRadius: "15px", overflow: "hidden" }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <motion.img
                src={img}
                alt={`Bucatarie ${index + 1}`}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* SECȚIUNE: Mai mult decât inima casei */}
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
        <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>Mai mult decât „inima casei”</h2>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Se spune des că bucătăria este inima casei. Dar dincolo de metafore, știm că este locul unde se întâmplă viața reală: de la cafeaua grăbită de luni dimineața, la temele scrise pe colțul mesei și cinele prelungite cu prietenii. La Dagi Deluxe, înțelegem că mobilierul nu trebuie să fie doar un decor pentru musafiri, ci un partener de încredere care suportă uzura, aburul și activitatea zilnică, rămânând la fel de solid peste ani.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Standardul rareori se potrivește</h3>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Apartamentele și casele din Timișoara și împrejurimi au particularitățile lor. Mobilierul de serie te obligă adesea la compromisuri: spații irosite între corpuri, sertare care lovesc tocul ușii sau blaturi prea scurte. Noi refuzăm ideea de „merge și așa”. Nu adaptăm casa ta la mobilă, ci construim mobila milimetric după pereții și nevoile tale, transformând fiecare colț aparent inutil într-un spațiu de depozitare valoros.
        </p>

        <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>Parteneriat, nu doar execuție</h3>
        <p style={{ fontSize: "1.1rem" }}>
          Fie că îți dorești rigoarea stilului industrial, căldura celui rustic sau liniile curate ale stilului modern, rolul nostru este să îți oferim claritate. Împreună, alegem materialele, testăm feroneria și decidem compartimentarea. Nu ești un simplu client cu un număr de comandă; ești partenerul nostru în crearea unui spațiu unic, care îți reflectă personalitatea în totalitate.
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
                whileHover={{ backgroundColor: "#ff6b6b", scale: 1.05 }}
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

      {/* SECȚIUNE ATELIER */}
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
        <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>De ce un Atelier și nu o Fabrică de Serie?</h2>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Într-o piață dominată de viteză, noi alegem calea lucrului bine făcut, aici, în Timiș.
        </p>
        <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <li style={{ marginBottom: "15px" }}>
            <strong>Montaj de Precizie:</strong> Știm că pereții nu sunt niciodată perfect drepți. Spre deosebire de echipele grăbite ale marilor retaileri, noi stăm până când plinta se așază corect, ușile sunt aliniate perfect și totul este funcțional, indiferent de imperfecțiunile construcției.
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong>Consultanță Reală:</strong> Discuți direct cu cel care proiectează și cunoaște limitele tehnice. Dacă o idee de pe internet nu este practică în spațiul tău, îți vom spune onest și vom găsi o alternativă mai bună.
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong>Fără Spații Moarte:</strong> Un producător de serie îți va vinde corpuri standardizate. Noi vom crea un corp atipic de 17 cm dacă atâta spațiu a rămas, transformându-l într-un suport jolly pentru sticle și condimente.
          </li>
        </ul>
      </motion.div>

      {/* FAQ + CONTACT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          marginTop: "40px",
          padding: "40px 20px",
          borderRadius: "15px",
          background: "#fff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>Întrebări frecvente despre mobila de bucătărie</h3>
        <p><strong>„Renovez un apartament vechi. Pereții sunt strâmbi, va arăta bine mobila?”</strong> Secretul stă în măsurătorile exacte și în soluțiile de compensare la montaj. Proiectăm mobilierul luând în calcul aceste abateri, astfel încât linia finală a bucătăriei să fie vizual dreaptă și estetică.</p>
        <p><strong>„Cât de rezistent este mobilierul la abur și apă?”</strong> Rezistența este dată de calitatea cantului și a etanșeizării. La Dagi Deluxe folosim adezivi industriali și canturi ABS care sigilează placa. Dacă optați pentru MDF vopsit, riscul de umflare este aproape eliminat.</p>
        <p><strong>„Mă ajutați și cu organizarea interioară a sertarelor?”</strong> Absolut. Recomandăm sisteme de organizare pentru tacâmuri, coșuri de colț și sertare cu amortizare.</p>

        <h3 style={{ marginTop: "30px", fontSize: "1.8rem" }}>Să discutăm despre bucătăria ta</h3>
        <p>Ești gata să transformi bucătăria ta într-o oază de calm și funcționalitate? Viziunea ta merită un partener de design pe măsură. Programează o sesiune de consultanță și hai să conturăm împreună spațiul care îți va simplifica viața. 💡</p>
        <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <li>Tel / WhatsApp: 0721072995</li>
          <li>Web: <a href="https://dagideluxe.ro" target="_blank" rel="noreferrer">dagideluxe.ro</a></li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Bucatarie;
