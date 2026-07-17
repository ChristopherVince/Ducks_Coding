import "./Hero.css";
import type { Route } from "../../../../types";

type HeroProps = {
  route: Route;
  setRoute: (route: Route) => void;
};

export default function Hero({ route, setRoute }: HeroProps) {
  return (
    <header className="wf-section hero">
      <div className="wf-wrap heroGrid">
        {/* LEFT */}
        <div>
          <p className="wf-kicker">
            Desarrollo de software · Software development
          </p>

          <h1 className="wf-h1">
            Tu negocio, <span className="mark-hl">digitalizado</span>. Sin complicaciones.
          </h1>

          <p className="wf-lead">
            Construimos la web, app o sistema que necesitas — desde negocios locales hasta grandes proyectos.
          </p>

          <p className="wf-lead wf-en">
            We build the web, app or system you need — from local business to enterprise scale.
          </p>
        </div>

        {/* RIGHT */}
        <div className="wf-stack">
          <div
            className={`wf-box routeCard ${route === "pyme" ? "sel" : "dim"}`}
            onClick={() => setRoute("pyme")}
          >
            <span className="wf-chip mark badge">
              Tu negocio · Small business
            </span>

            <h3 className="wf-h3 mt8">Digitaliza tu negocio</h3>

            <p className="wf-muted">
              Web, tienda, app o dashboard. Rápido y sin jerga.
            </p>

            <a href="#form" className="wf-btn sm primary mt">
              Empezar diagnóstico →
            </a>
          </div>

          <div
            className={`wf-box routeCard ${route === "enterprise" ? "sel" : "dim"}`}
            onClick={() => setRoute("enterprise")}
          >
            <span className="wf-chip badge badgeLight">
              Enterprise · Gran proyecto
            </span>

            <h3 className="wf-h3 mt8">
              Escala con seguridad y soporte
            </h3>

            <p className="wf-muted">
              Integraciones, cloud y equipos dedicados.
            </p>

            <a href="#form" className="wf-btn sm mt">
              Empezar diagnóstico →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}