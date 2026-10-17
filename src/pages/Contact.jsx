import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaPhone,
  FaEnvelope,
  FaFileInvoice,
  FaRulerCombined
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  const actions = [
    { label: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/40721072995", external: true },
    { label: "Messenger", icon: <FaFacebookMessenger />, href: "https://m.me/username", external: true },
    { label: "Telefon", icon: <FaPhone />, href: "tel:+40721072995" },
    { label: "Email", icon: <FaEnvelope />, href: "mailto:office@dagideluxe.ro" },
    { label: "Solicită ofertă", icon: <FaFileInvoice />, isButton: true, onClick: () => alert("Formular ofertă") },
    { label: "Programează măsurători", icon: <FaRulerCombined />, isButton: true, onClick: () => alert("Programare măsurători") },
  ];

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">Contact</h1>

        <p className="contact-intro">
          Ne puteți contacta pentru orice informații despre produsele și serviciile noastre.
        </p>

        <div className="contact-info">
          <p>SC DagiDeluxe SRL</p>
          <a href="tel:+40721072995">+4 (072) 107 29 95</a>
          <a href="mailto:office@dagideluxe.ro">office@dagideluxe.ro</a>
        </div>

        <div className="contact-divider" />

        <div className="contact-actions">
          {actions.map((action, index) =>
            action.isButton ? (
              <button key={index} className="action-btn" onClick={action.onClick}>
                {action.icon} {action.label}
              </button>
            ) : (
              <a
                key={index}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="action-btn"
              >
                {action.icon} {action.label}
              </a>
            )
          )}
        </div>

        <div className="contact-divider" />

        <div className="contact-form-map">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-subtitle">Trimite un mesaj</h2>

            <div className="contact-form-row">
              <input className="contact-input" placeholder="Nume" required />
              <input type="email" className="contact-input" placeholder="Email" required />
            </div>

            <input className="contact-input" placeholder="Subiect" required />
            <textarea className="contact-input" rows="5" placeholder="Mesaj" required />

            <button type="submit" className="action-btn contact-form-submit">
              Trimite mesaj
            </button>

            {sent && (
              <p className="contact-form-success">✔ Mesaj trimis cu succes!</p>
            )}
          </form>

          <iframe
            className="contact-map"
            title="Locație DagiDeluxe"
            src="https://www.google.com/maps?q=Timisoara&output=embed"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;