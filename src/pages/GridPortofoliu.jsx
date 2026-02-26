import { useNavigate, Link } from "react-router-dom";
import "./GridPortofoliu.css";

const categorii = [
  { id: 1, nume: "Bucătărie", img: "/images/images-kitchen/p36.jpg", link: "/bucatarie" },
  { id: 2, nume: "Living", img: "/images/images-living/p10.jpg", link: "/living" },
  { id: 3, nume: "Dormitor", img: "/images/images-bedroom/p12.jpg", link: "/dormitor" },
  { id: 4, nume: "Dressing", img: "/images/images-dressing/p17.jpg", link: "/dressing" },
  { id: 5, nume: "Copii si Tineret", img: "/images/images-kids/p25.jpg", link: "/copii" },
  { id: 6, nume: "Hol", img: "/images/images-h/p30.jpg", link: "/hol" },
  { id: 7, nume: "Baie", img: "/images/images-bathroom/p28.jpg", link: "/baie" },
  { id: 8, nume: "Spatiu Comercial", img: "/images/images-comercial/p33.jpg", link: "/comercial" },
];

function GridPortofoliu() {
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      <h1 className="text-center my-5">Portofoliu</h1>

      <div className="grid">
        {categorii.map((cat) => (
          <div
            key={cat.id}
            className="grid-item"
            onClick={() => navigate(cat.link)}
            style={{ cursor: "pointer" }}
          >
            <img src={cat.img} alt={cat.nume} className="grid-img" />
            <div className="grid-overlay">
              <span className="grid-label">{cat.nume}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary btn-lg">
          Înapoi la Pagina Principală
        </Link>
      </div>
    </div>
  );
}

export default GridPortofoliu;