import "./BeforeAfter.css";
import {
  AlertTriangle,
  ClipboardList,
  Unlink,
  Clock,
  Zap,
  Bot,
  Link2,
  RefreshCw,
  ShieldCheck,
  MapPin,
  Gift,
  CheckCircle2,
  User,
  Home,
} from "lucide-react";
const BEFORE_ICONS = [AlertTriangle, ClipboardList, Unlink, Clock];
export const BEFORE = [
  ['Sistemas anticuados', 'Lentos, frágiles, caros de mantener.'],
  ['Todo hecho a mano', 'Excel y copia-pega sin fin.'],
  ['Datos desconectados', 'Nada se habla entre sí.'],
  ['Sin actualizaciones', 'Problemas técnicos que se acumulan.'],
];



export const AFTER = [
  ['Plataforma moderna', 'Rápida, estable, escalable.'],
  ['Flujos automatizados', 'El software hace lo repetitivo.'],
  ['Todo integrado', 'Un solo origen de verdad.'],
  ['Siempre al día', 'Mejora continua y soporte.'],
];


const AFTER_ICONS = [Zap, Bot, Link2, RefreshCw];

export default function BeforeAfter() {
  return (
    <section className="before-after-section" id="dolor">
      <div className="before-after-wrap">
        <div className="before-after-header">
          <p className="wf-kicker">Puntos de dolor · Pain points</p>
          <h2 className="wf-h2">
            De cómo estás hoy{" "}
            <span className="squiggle">a cómo trabajarás</span>
          </h2>
        </div>

        <div className="ba">
          {/* BEFORE */}
          <div className="col">
            <div className="ba-label ba-label--before">
              <strong>ANTES · Before</strong>
            </div>

            {BEFORE.map(([t, d], i) => {
              const Icon = BEFORE_ICONS[i];

              return (
                <div className="wf-box flat" key={t}>
                  <h3 className="wf-h3 ba-item-title">
                    {Icon && (
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className="ba-icon ba-icon--before"
                      />
                    )}
                    {t}
                  </h3>
                  <p className="wf-muted">{d}</p>
                </div>
              );
            })}
          </div>

          <div className="vs">→</div>

          {/* AFTER */}
          <div className="col">
            <div className="ba-label ba-label--after">
              <strong>DESPUÉS · After</strong>
            </div>

            {AFTER.map(([t, d], i) => {
              const Icon = AFTER_ICONS[i];

              return (
                <div className="wf-box" key={t}>
                  <h3 className="wf-h3 ba-item-title">
                    {Icon && (
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className="ba-icon ba-icon--after"
                      />
                    )}
                    {t}
                  </h3>
                  <p className="wf-muted">{d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}