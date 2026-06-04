import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from './projectsLoader.js';
import { Brand } from './ui.jsx';

export default function ProjectsPage({ onBack }) {
  return (
    <div>
      <nav className="wf-nav">
        <div className="wf-wrap wf-row" style={{ width: '100%', flexWrap: 'nowrap' }}>
          <Brand />
          <div className="spacer"></div>
          <button
            className="wf-btn sm"
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <ArrowLeft size={15} strokeWidth={2.2} /> Volver al inicio
          </button>
        </div>
      </nav>

      <header className="wf-section">
        <div className="wf-wrap" style={{ maxWidth: 760 }}>
          <p className="wf-kicker">Nuestro trabajo · Our work</p>
          <h1 className="wf-h1">Proyectos</h1>
          <p className="wf-lead">
            Un historial de soluciones reales que hemos construido para nuestros clientes
            y en competiciones de software.
          </p>
        </div>
      </header>

      <section className="wf-section" style={{ background: 'var(--paper-2)' }}>
        <div className="wf-wrap">
          <div className="wf-grid cols-3">
            {PROJECTS.map(p => (
              <div className="wf-box" key={p.id}>
                <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={"wf-chip" + (p.tag === 'Hackathon' ? ' mark' : '')}>{p.tag}</span>
                  <span className="wf-muted" style={{ fontSize: 13 }}>{p.year}</span>
                </div>
                <h3 className="wf-h3 mt">{p.title}</h3>
                <p className="wf-muted">{p.desc}</p>
                <div className="wf-row gap-sm mt" style={{ flexWrap: 'wrap' }}>
                  {p.tech.map(t => (
                    <span className="wf-chip" key={t} style={{ fontSize: 12 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wf-section wf-center">
        <div className="wf-wrap">
          <p className="wf-lead">¿Tienes un proyecto en mente?</p>
          <button className="wf-btn primary" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Hablemos →
          </button>
        </div>
      </section>

      <footer className="wf-foot">
        <div className="wf-wrap wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Brand size={22} />
          <button className="wf-btn sm" onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft size={14} strokeWidth={2.2} /> Inicio
          </button>
        </div>
      </footer>
    </div>
  );
}
