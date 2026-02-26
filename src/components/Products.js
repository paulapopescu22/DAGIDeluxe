function Products() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Materiale</h2>

        <div className="row g-5">

          <div className="col-md-4">
            <div className="product-card">
              <img src="/images/Materiale/vopsit.jpg" alt="MDF vopsit" />
              <div className="p-4 text-center">
                <h5>MDF-Vopsit</h5>
                <p>Suprafață netedă și uniformă, ideală pentru mobilier modern și finisaje elegante.</p>
                <button className="btn btn-main">Detalii</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="product-card">
              <img src="/images/Materiale/infoliat.jpg" alt="MDF infoliat" />
              <div className="p-4 text-center">
                <h5>MDF-Infoliat</h5>
                <p>Protecție și varietate de culori sau texturi pentru mobilier.</p>
                <button className="btn btn-main">Detalii</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="product-card">
              <img src="/images/Materiale/pal.jpg" alt="PAL" />
              <div className="p-4 text-center">
                <h5>PAL</h5>
                <p>Rezistent și accesibil, folosit frecvent la construcția mobilierului.</p>
                <button className="btn btn-main">Detalii</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;