import "./Process.css";

import { STEPS } from "../../../../data";

export default function Process() {
  return (
    <section className="wf-section">
      <div className="wf-wrap" style={{ maxWidth: 760 }}>
        <p className="wf-kicker">Cómo trabajamos · How we work</p>
        <h2 className="wf-h2">Un proceso claro, sin sorpresas</h2>
        <div className="timeline mt-lg">
          {STEPS.map(([t, d]) => (
            <div className="step" key={t}>
              <h3 className="wf-h3">{t}</h3>
              <p className="wf-muted">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}