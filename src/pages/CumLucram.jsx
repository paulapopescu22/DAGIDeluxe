import { useState } from "react";
import "./CumLucram.css";
const etape = [
  {
    titlu: "Contact inițial & ofertă pe măsura nevoilor",
    descriere: "Ascultăm ecoul dorințelor tale într-un apel, pe WhatsApp sau prin email. Îți notăm preferințele funcționale și estetice, apoi îți trimitem o propunere clară, echilibrând optim bugetul și rezultatul așteptat.",
  },
  {
    titlu: "Consultanță pe teren & măsurători precise",
    descriere: "Când oferta devine un acord tacit, pășim împreună în spațiul tău. Măsurătorile milimetrice se împletesc cu dialogul atent: fiecare fereastră, fiecare colț ascunde o oportunitate de design...",
  },
  {
    titlu: "Ajustare ofertă & confirmare",
    descriere: "Întoarcem datele în atelierul nostru și conturăm din nou propunerea: optimizăm costuri, rafinăm detalii și totodată asigurăm un echilibru vizual plăcut și claritate în funcționalitate.",
  },
  {
    titlu: "Semnarea parteneriatului & avansul creativ",
    descriere: "Odată perfectat planul, fixăm data primei semnături: contractul devine puntea între viziune și realitate, iar avansul deschide astfel drumul spre etapa de proiectare.",
  },
  {
    titlu: "Proiectarea 3D: viziune transpusă în spațiu",
    descriere: "Schimbăm schițele cu ecranul tridimensional. Pe baza consultanței și măsurătorilor, construim proiectul: dimensionare exactă, compartimentări logice și soluții inteligente de depozitare.",
  },
  {
    titlu: "Execuție & finisaje desăvârșite",
    descriere: "În atelier, transformăm planul în realitate: acordăm atenție fiecărei muchii, testăm mecanismele și verificăm îmbinările. Finisajul discret și precizia proceselor noastre rămân promisiuni respectate.",
  },
  {
    titlu: "Transport atent & montaj la destinație",
    descriere: "Fiecare piesă pornește spre casa ta sub supraveghere atentă. La fața locului, mobilierul prinde viață în mâinile echipei noastre: poziționăm, reglăm și armonizăm fiecare element.",
  },
  {
    titlu: "Finalizare & susținere continuă",
    descriere: "Cu ultima semnătură și achitarea diferenței, încheiem formal procesul. Apoi, rămânem aproape pentru orice ajustare sau întreținere, asigurându-ne că spațiul tău continuă să reflecte echilibrul și rafinamentul DagiDeluxe.",
  },
];

function CumLucram() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="cum-lucram-container">
      <h1 className="cum-lucram-title">Cum lucrăm</h1>
      <p className="cum-lucram-intro">
        De la prima discuție la ultimul șurub montat. Fără etape ignorate. Fără compromisuri ascunse.
      </p>

      <div className="timeline">
        {etape.map((etapa, index) => (
          <div
            key={index}
            className={`timeline-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleIndex(index)}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{etapa.titlu}</h3>
              {activeIndex === index && <p>{etapa.descriere}</p>}
            </div>
          </div>
        ))}
      </div>

      <p className="cum-lucram-concluzie">
        Satisfacția Clientului Nostru: Cea Mai Bună Recomandare! Feedback-ul tău pozitiv este motorul nostru zilnic.
      </p>
    </div>
  );
}

export default CumLucram;
