import "./SocialProof.css";
import { PROJECTS } from "../../../../projectsLoader";

export default function SocialProof({ setPage }: { setPage: (page: string) => void }) {
  return (
    <section className="wf-section social-proof" id="proyectos">
      <div className="wf-wrap">
        <div className="wf-center">
          <p className="wf-kicker">Nuestro trabajo · Our work</p>
          <h2 className="wf-h2">Proyectos que hemos construido</h2>
          <p className="wf-lead">Soluciones reales, entregadas.</p>
        </div>
        <div className="wf-grid cols-3 mt-lg">
          {PROJECTS.slice(0, 3).map((p) => (
            <div className="wf-box" key={p.id}>
              <div className="wf-row project-header">
                <span className="wf-chip">{p.tag}</span>
                <span className="wf-muted project-year">{p.year}</span>
              </div>
              <h3 className="wf-h3 mt">{p.title}</h3>
              <p className="wf-muted">{p.desc}</p>
              <div className="wf-row gap-sm mt project-tech">
                {p.tech.map((t) => (
                  <span className="wf-chip project-tech__tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="wf-center mt-lg">
          <button className="wf-btn mark" onClick={() => setPage("projects")}>
            Ver todos los proyectos →
          </button>
        </div>
      </div>
    </section>
  );
}