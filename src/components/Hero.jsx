import { Link } from "react-router-dom";
function Hero(){
  return(
    <section className="hero">
      <div className="container">
      <h1>DagiDeluxe Mobilier personalizat. Gândit să funcționeze natural în viața ta. </h1>       
      <h2></h2>
      <Link to="grid-portofoliu" className="btn btn-main">
        Descoperă colecția
      </Link>
      </div>
    </section>
  )
}

export default Hero
