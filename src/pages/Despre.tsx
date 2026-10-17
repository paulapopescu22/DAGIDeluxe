import { FaDraftingCompass, FaTree, FaTools } from "react-icons/fa";
import "./Despre.css";
import Reviews from "../components/Reviews";

const valori = [
  {
    icon: <FaDraftingCompass />,
    title: "Design contemporan",
    desc: "Fiecare proiect pornește de la spațiul real al clientului, nu de la un model standard. Liniile curate și proporțiile corecte rămân plăcute ani de zile, nu doar la prima vedere.",
  },
  {
    icon: <FaTree />,
    title: "Materiale alese cu grijă",
    desc: "Lucrăm cu PAL, MDF și lemn masiv, alese în funcție de solicitarea fiecărei piese — de la un dulap de haine până la mobilier de bucătărie expus zilnic la umiditate și căldură.",
  },
  {
    icon: <FaTools />,
    title: "Execuție atentă la detalii",
    desc: "Feronerie de calitate, muchii finisate corect și montaj profesionist. Diferența dintre o piesă premium și una obișnuită se simte cel mai bine în folosința de zi cu zi.",
  },
];

function Despre() {
  return (
    <div className="despre-page">
      <section className="despre-intro">
        <span className="despre-label">Despre noi</span>
        <p>
          DagiDeluxe este un atelier de mobilă la comandă din Timișoara,
          axat pe design contemporan, materiale de calitate și execuție
          atentă la detalii.
        </p>
        <p>
          De la bucătării și dressinguri, până la mobilier pentru spații
          comerciale, fiecare proiect pornește de la nevoile reale ale
          clientului și se transformă, pas cu pas, într-un spațiu
          funcțional și plăcut — fără compromisuri ascunse și fără etape
          sărite.
        </p>
      </section>

      <section className="despre-valori">
        <h2 className="section-title">Ce ne ghidează</h2>
        <div className="despre-valori-grid">
          {valori.map((v, i) => (
            <div className="despre-valoare-card" key={i}>
              <div className="despre-valoare-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="despre-reviews-wrap">
        <Reviews />
      </section>
    </div>
  );
}

export default Despre;
