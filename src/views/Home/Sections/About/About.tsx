import "./About.css";
import logoUrl from "../../../../assets/ducks-systems-principal-horizontal.svg";
import { BRAND_NAME } from "../../../../site";

export default function About() {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-wrap">
        <div className="about-logo">
          <img src={logoUrl} alt={BRAND_NAME} className="about-logo-media" />
        </div>
        <div>
          <p className="wf-kicker">Quiénes somos · About</p>
          <h2 className="wf-h2">
            Programadores con experiencia en competición
          </h2>
          <p className="wf-lead">
            Somos un equipo de desarrolladores de software especializados en
            hackathones y concursos de programación. Construir soluciones reales
            bajo presión nos ha enseñado a entregar rápido, pensar claro y
            escribir código que funciona desde el día uno.
          </p>
          <p className="wf-lead wf-en">
            A team forged in hackathons and coding competitions — we ship fast,
            think sharp, and write code that works from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
