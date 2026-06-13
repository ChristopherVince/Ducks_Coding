import "./Services.css";
import {TRACKS } from "../../../../data";
export default function Services({ route }: { route: string }) {
  return (
    <section
      className="wf-section services"
      id="servicios"
    >
      <div className="wf-wrap">
        <div className="wf-center">
          <p className="wf-kicker">Servicios · Services</p>
          <h2 className="wf-h2">¿Qué podemos construir para ti?</h2>
        </div>
        <div className="twoTrack mt-lg">
          {Object.entries(TRACKS).map(([key, t]) => (
            <div
              className={"wf-box track " + (route === key ? "" : "dim")}
              key={key}
            >
              <span className={"wf-chip" + (key === "pyme" ? " mark" : "")}>
                {t.chip}
              </span>
              <div className="wf-stack mt">
                {t.items.map((it) => (
                  <div className="wf-row gap-sm" key={it}>
                    <span className="wf-chip">▸</span> {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}