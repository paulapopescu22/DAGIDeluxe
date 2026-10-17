import { useState, useRef, useEffect } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import "./ChatBot.css";

function RobotMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`robot-mascot ${className}`}
      viewBox="0 0 40 40"
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="20" y1="10" x2="20" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle className="robot-antenna" cx="20" cy="3" r="2.2" fill="currentColor" />
      <rect x="6" y="10" width="28" height="22" rx="7" stroke="currentColor" strokeWidth="2" />
      <circle className="robot-eye" cx="15" cy="21" r="2.4" fill="currentColor" />
      <circle className="robot-eye" cx="25" cy="21" r="2.4" fill="currentColor" />
      <path d="M14 27c1.8 1.6 4.2 1.6 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2" y1="19" x2="6" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="19" x2="38" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BotAvatar({ className }: { className?: string }) {
  return (
    <span className={`chatbot-avatar ${className || ""}`} role="img" aria-label="Asistent DagiDeluxe">
      <RobotMascot />
    </span>
  );
}

const GREETING =
  "Salut! Sunt asistentul DagiDeluxe. Te pot ajuta cu întrebări despre materiale, preț sau cum decurge o comandă. Cu ce te pot ajuta?";

const FALLBACK =
  "Nu sunt sigur că am înțeles corect. Pentru un răspuns exact, cel mai bine ne contactezi direct la office@dagideluxe.ro sau +4 (072) 107 29 95 — sau folosește pagina de Contact.";

const RULES = [
  {
    keywords: ["pret", "preț", "cost", "cat costa", "cât costă", "buget"],
    reply:
      "Prețul depinde de material, complexitatea designului și accesorii. Cel mai corect e să ne scrii pe office@dagideluxe.ro sau din pagina de Contact pentru o ofertă personalizată.",
  },
  {
    keywords: ["material", "pal", "mdf", "lemn masiv", "lemn"],
    reply:
      "Lucrăm cu PAL, MDF (vopsit sau fălțuit) și lemn masiv, alese în funcție de piesă și de cât de solicitată va fi. Mai multe detalii găsești în articolul „Din ce material comand mobila?” din Blog.",
  },
  {
    keywords: ["comand", "etape", "cum lucrati", "cum lucrați", "proces", "pasi", "pași"],
    reply:
      "Procesul pleacă de la o discuție inițială și măsurători, apoi proiectare 3D, execuție în atelier și montaj la tine acasă. Toate etapele sunt detaliate în pagina „Cum lucrăm”.",
  },
  {
    keywords: ["contact", "telefon", "email", "adresa", "adresă", "whatsapp"],
    reply:
      "Ne găsești la office@dagideluxe.ro, telefon +4 (072) 107 29 95, sau pe WhatsApp — toate sunt disponibile și în pagina de Contact.",
  },
  {
    keywords: ["portofoliu", "proiecte", "poze", "galerie"],
    reply:
      "Poți vedea proiecte realizate în secțiunea Portofoliu, pe categorii: bucătărie, living, dormitor, dressing și altele.",
  },
  {
    keywords: ["salut", "buna", "bună", "hello", "hei", "servus"],
    reply: "Bună! Cu ce te pot ajuta — materiale, preț sau procesul de comandă?",
  },
  {
    keywords: ["multumesc", "mulțumesc", "mersi", "thanks"],
    reply: "Cu plăcere! Dacă mai ai întrebări, sunt aici.",
  },
];

function getBotReply(userText) {
  const text = userText
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

  for (const rule of RULES) {
    if (rule.keywords.some((k) => text.includes(k.normalize("NFD").replace(/[̀-ͯ]/g, "")))) {
      return rule.reply;
    }
  }
  return FALLBACK;
}

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: GREETING }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { from: "user", text: trimmed };
    const botMsg = { from: "bot", text: getBotReply(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <BotAvatar />
              <span>Asistent DagiDeluxe</span>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Închide chat-ul"
            >
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg-row chatbot-msg-row-${m.from}`}>
                {m.from === "bot" && <BotAvatar />}
                <div className={`chatbot-msg chatbot-msg-${m.from}`}>{m.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Scrie un mesaj..."
            />
            <button
              type="button"
              className="chatbot-send"
              onClick={sendMessage}
              aria-label="Trimite mesajul"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Închide chat-ul" : "Deschide chat-ul"}
      >
        {open ? <FaTimes /> : <RobotMascot className="robot-mascot-toggle" />}
      </button>
    </div>
  );
}

export default ChatBot;
