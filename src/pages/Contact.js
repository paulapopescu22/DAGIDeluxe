import React from "react";
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
      </div>
    </div>
  );
}

export default Contact;