import React from "react";

const features = [
  { title: "Adaptare perfectă la spațiul tău real", desc: "Mobilierul nostru este proiectat la milimetru, valorificând fiecare centimetru disponibil, fără compromisuri, fără spații pierdute" },
  { title: "Durabilitate reală, pe termen lung", desc: "Alegem materiale adaptate intensității de utilizare. Feroneria, finisajele și montajul profesional asigură funcționarea stabilă, silențioasă și sigură, ani de zile după montaj." },
  { title: "Estetică echilibrată, fără excese vizuale", desc: "Liniile curate, proporțiile corecte și continuitatea cromatică definesc fiecare proiect DagiDeluxe. Spațiile noastre nu obosesc vizual. Ele susțin acea senzație de ordine calmă, care rămâne constantă în timp." }

];

function Features() {
  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="section-title">De ce DagiDeluxe</h2>
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-4" key={i}>
              <div className="feature">
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
