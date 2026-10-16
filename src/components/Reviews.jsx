import { useState, useEffect } from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Andreea M.",
    text: "Bucătăria a ieșit exact cum ne-am dorit — fiecare sertar e gândit pentru ce aveam nevoie. Recomand cu încredere.",
  },
  {
    name: "Mihai T.",
    text: "Comunicare foarte bună de la prima discuție până la montaj. Dressingul arată premium și s-a încadrat perfect în spațiu.",
  },
  {
    name: "Ioana P.",
    text: "Atenție la detalii și termene respectate. Mobila din dormitor e solidă și finisajele arată impecabil.",
  },
  {
    name: "Alexandru R.",
    text: "Am cerut o soluție pentru un hol cu formă neobișnuită și au reușit să folosească fiecare colț. Super mulțumit.",
  },
  {
    name: "Cristina D.",
    text: "Raport calitate-preț foarte bun, iar echipa a fost deschisă la ajustări pe parcurs. Recomand cu toată încrederea.",
  },
];

function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Ce spun clienții noștri</h2>

      <div className="reviews-carousel">
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`review-card ${i === index ? "active" : ""}`}
          >
            <p className="review-stars">★★★★★</p>
            <p className="review-text">„{review.text}”</p>
            <p className="review-name">{review.name}</p>
          </div>
        ))}
      </div>

      <div className="reviews-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Recenzia ${i + 1}`}
            className={`review-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
