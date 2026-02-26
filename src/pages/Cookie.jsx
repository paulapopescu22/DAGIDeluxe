import "./Cookie.css";

function Cookie() {
  return (
    <div className="cookie-container">
      <h1 className="cookie-title">Politica de Utilizare a Fișierelor de tip Cookie</h1>
      <p className="cookie-update">Ultima actualizare: 11.09.2025</p>

      <section>
        <p>
          Prezenta politică descrie fișierele de tip cookie și tehnologiile similare utilizate pe website-ul dagideluxe.ro (denumit în continuare „Site-ul”), operat de S.C. DAGI DELUXE S.R.L.
        </p>
      </section>

      <section>
        <h2>1. Ce sunt cookie-urile?</h2>
        <p>
          Un „Internet Cookie” (cunoscut și ca „browser cookie” sau pur și simplu „cookie”) este un fișier text de mici dimensiuni...
        </p>
        <p>
          Cookie-urile pot fi „first-party” (plasate direct de site-ul nostru, dagideluxe.ro) sau „third-party” (plasate de alte domenii, precum Google sau Facebook, prin intermediul serviciilor integrate).
        </p>
      </section>

      <section>
        <h2>2. De ce folosim cookie-uri?</h2>
        <p>Utilizăm cookie-uri pentru a asigura funcționarea optimă a Site-ului și pentru a oferi o experiență adaptată vizitatorului:</p>
        <ul>
          <li>Asigurăm funcționalitatea tehnică a site-ului.</li>
          <li>Memorăm preferințele dumneavoastră (limba, consimțământul cookie-urilor etc.).</li>
          <li>Analizăm date statistice anonime pentru îmbunătățirea Site-ului.</li>
          <li>Măsurăm eficiența campaniilor publicitare și retargeting.</li>
        </ul>
      </section>

      <section>
        <h2>3. Ce cookie-uri specifice folosim?</h2>

        <h3>A. Cookie-uri Strict Necesare</h3>
        <table>
          <thead>
            <tr>
              <th>Nume Cookie</th>
              <th>Furnizor</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cookie_consent_status</td>
              <td>dagideluxe.ro</td>
              <td>Stochează preferința dumneavoastră (accept/refuz) din banner-ul de consimțământ pentru cookie-uri.</td>
              <td>1 an</td>
            </tr>
            <tr>
              <td>PHPSESSID</td>
              <td>dagideluxe.ro</td>
              <td>Identificator tehnic de sesiune, necesar pentru funcționalități de bază.</td>
              <td>Sesiune</td>
            </tr>
          </tbody>
        </table>

        <h3>B. Cookie-uri de Performanță și Analiză</h3>
        <table>
          <thead>
            <tr>
              <th>Nume Cookie</th>
              <th>Furnizor</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Distinge utilizatorii unici pentru date statistice despre utilizarea site-ului.</td>
              <td>2 ani</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Distinge utilizatorii, durată mai scurtă.</td>
              <td>24 ore</td>
            </tr>
            <tr>
              <td>_gat_gtag_...</td>
              <td>Google Analytics</td>
              <td>Limitează rata de solicitări către serverele Google.</td>
              <td>1 minut</td>
            </tr>
          </tbody>
        </table>

        <h3>C. Cookie-uri de Marketing și Publicitate</h3>
        <table>
          <thead>
            <tr>
              <th>Nume Cookie</th>
              <th>Furnizor</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_fbp</td>
              <td>Meta (Facebook)</td>
              <td>Livrare publicitate, retargeting.</td>
              <td>3 luni</td>
            </tr>
            <tr>
              <td>_gcl_au</td>
              <td>Google Ads</td>
              <td>Teste eficiență publicitate.</td>
              <td>3 luni</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>4. Cum puteți controla cookie-urile?</h2>
        <p>
          La prima vizită pe site, vi se solicită consimțământul prin banner. Puteți accepta toate cookie-urile, refuza pe cele neesențiale sau personaliza preferințele.
        </p>
        <p>
          De asemenea, browser-ul dumneavoastră permite ștergerea și blocarea cookie-urilor. Dezactivarea cookie-urilor strict necesare poate afecta funcționarea Site-ului, iar a celor de analiză sau marketing limitează experiența personalizată.
        </p>
        <p>
          Pentru orice întrebări suplimentare, ne puteți contacta la adresa de e-mail menționată în Politica de Confidențialitate.
        </p>
      </section>
    </div>
  );
}

export default Cookie;
