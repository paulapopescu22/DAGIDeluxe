import { useNavigate } from "react-router-dom";

function Hero(){
  const navigate = useNavigate();

  return(
    <section className="hero">
      <div className="container text-center">
        <h1 className="text-center">Mobilier premium pentru un spațiu memorabil</h1>
        <p className="text-center">
          Design contemporan, materiale de top și execuție perfectă pentru casa ta.
        </p>
        <button
          className="btn btn-main"
          onClick={() => navigate("/grid-portofoliu")}
        >
          Descoperă colecția
        </button>
      </div>
    </section>
  )
}

export default Hero
