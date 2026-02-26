import React from "react";
import "./Servicii.css";

const servicii = [
  "Mobilă de bucătărie",
  "Mobilă de living",
  "Mobilă de dormitor",
  "Mobilă de dressing",
  "Mobilă pentru tineret",
  "Mobilă de baie",
  "Mobilă de hol",
  "Mobiler comercial",
  "Mobilă pentru copii"
];

function Servicii() {
  return (
    <section className="servicii-container">
      <h2 className="servicii-title">
        Realizăm la comandă mobilier personalizat din MDF și PAL
      </h2>
      <div className="servicii-list">
        {servicii.map((item, index) => (
          <div key={index} className="serviciu-item">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicii;
