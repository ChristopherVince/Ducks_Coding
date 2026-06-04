import { useState } from 'react';
import {
  AlertTriangle, ClipboardList, Unlink, Clock,
  Zap, Bot, Link2, RefreshCw,
  ShieldCheck, MapPin, Gift, CheckCircle2,
} from 'lucide-react';
import { TRACKS, BEFORE, AFTER, STEPS, FAQS, PROJECTS, SERVICE_OPTIONS, BUDGET_OPTIONS } from './data.js';
import { Brand, Logo, Lines, Field } from './ui.jsx';
import fotoEquipo from './assets/talent.png';

const BEFORE_ICONS = [AlertTriangle, ClipboardList, Unlink, Clock];
const AFTER_ICONS = [Zap, Bot, Link2, RefreshCw];

export function Nav({ route, setRoute }) {
  return (
    <nav className="wf-nav">
      <div className="wf-wrap wf-row" style={{ width: '100%', flexWrap: 'nowrap' }}>
        <Brand />
        <div className="spacer"></div>
        <div className="seg">
          <button className={route === 'pyme' ? 'on' : ''} onClick={() => setRoute('pyme')}>Tu negocio</button>
          <button className={route === 'enterprise' ? 'on' : ''} onClick={() => setRoute('enterprise')}>Enterprise</button>
        </div>
        <a href="#form" className="wf-btn sm primary">Hablemos →</a>
      </div>
    </nav>
  );
}

export function Hero({ route, setRoute }) {
  return (
    <header className="wf-section" data-screen-label="B-hero">
      <div className="wf-wrap splitHero">
        <div>
          <p className="wf-kicker">Desarrollo de software · Software development</p>
          <h1 className="wf-h1">Tu negocio, <span className="mark-hl">digitalizado</span>. Sin complicaciones.</h1>
          <p className="wf-lead">Construimos la web, app o sistema que necesitas — desde negocios locales hasta grandes proyectos.</p>
          <p className="wf-lead wf-en">We build the web, app or system you need — from local business to enterprise scale.</p>
        </div>
        <div className="wf-stack">
          <div className={"wf-box routeCard " + (route === 'pyme' ? 'sel' : 'dim')} onClick={() => setRoute('pyme')}>
            <span className="wf-chip mark badge">Tu negocio · Small business</span>
            <h3 className="wf-h3" style={{ marginTop: 8 }}>Digitaliza tu negocio</h3>
            <p className="wf-muted">Web, tienda, app o dashboard. Rápido y sin jerga.</p>
            <a href="#form" className="wf-btn sm primary mt">Quiero mi proyecto →</a>
          </div>
          <div className={"wf-box routeCard " + (route === 'enterprise' ? 'sel' : 'dim')} onClick={() => setRoute('enterprise')}>
            <span className="wf-chip badge" style={{ background: 'var(--paper)' }}>Enterprise · Gran proyecto</span>
            <h3 className="wf-h3" style={{ marginTop: 8 }}>Escala con seguridad y soporte</h3>
            <p className="wf-muted">Integraciones, cloud y equipos dedicados.</p>
            <a href="#form" className="wf-btn sm mt">Hablar de mi proyecto →</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function LogoBand() {
  return (
    <section style={{ padding: '22px 0', borderBottom: '2.5px solid var(--line)', background: 'var(--paper-2)' }}>
      <div className="wf-wrap wf-row" style={{ justifyContent: 'center', gap: 14 }}>
        
        
      </div>
    </section>
  );
}

export function BeforeAfter() {
  return (
    <section className="wf-section" id="dolor">
      <div className="wf-wrap">
        <div className="wf-center">
          <p className="wf-kicker">Puntos de dolor · Pain points</p>
          <h2 className="wf-h2">De cómo estás hoy <span className="squiggle">a cómo trabajarás</span></h2>
        </div>
        <div className="ba mt-lg">
          <div className="col">
            <div className="wf-box tint flat wf-center"><strong>ANTES · Before</strong></div>
            {BEFORE.map(([t, d], i) => {
              const Icon = BEFORE_ICONS[i];
              return (
                <div className="wf-box flat" key={t}>
                  <h3 className="wf-h3" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon size={17} strokeWidth={2} style={{ color: 'var(--ink-soft)', flexShrink: 0 }} />{t}
                  </h3>
                  <p className="wf-muted">{d}</p>
                </div>
              );
            })}
          </div>
          <div className="vs">→</div>
          <div className="col">
            <div className="wf-box wf-center" style={{ background: 'var(--accent)' }}><strong>DESPUÉS · After</strong></div>
            {AFTER.map(([t, d], i) => {
              const Icon = AFTER_ICONS[i];
              return (
                <div className="wf-box" key={t}>
                  <h3 className="wf-h3" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon size={17} strokeWidth={2} style={{ color: 'var(--accent-ink)', flexShrink: 0 }} />{t}
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

export function Services({ route }) {
  return (
    <section className="wf-section" id="servicios" style={{ background: 'var(--paper-2)' }}>
      <div className="wf-wrap">
        <div className="wf-center">
          <p className="wf-kicker">Servicios · Services</p>
          <h2 className="wf-h2">¿Qué podemos construir para ti?</h2>
        </div>
        <div className="twoTrack mt-lg">
          {Object.entries(TRACKS).map(([key, t]) => (
            <div className={"wf-box track " + (route === key ? '' : 'dim')} key={key}>
              <span className={"wf-chip" + (key === 'pyme' ? ' mark' : '')}>{t.chip}</span>
              <div className="wf-stack mt">
                {t.items.map(it => (
                  <div className="wf-row gap-sm" key={it}><span className="wf-chip">▸</span> {it}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="wf-section">
      <div className="wf-wrap" style={{ maxWidth: 760 }}>
        <p className="wf-kicker">Cómo trabajamos · How we work</p>
        <h2 className="wf-h2">Un proceso claro, sin sorpresas</h2>
        <div className="timeline mt-lg">
          {STEPS.map(([t, d]) => (
            <div className="step" key={t}><h3 className="wf-h3">{t}</h3><p className="wf-muted">{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const empty = { nombre: '', email: '', empresa: '', tel: '', servicio: '', presupuesto: '', msg: '' };
  const [f, setF] = useState(empty);
  const [sent, setSent] = useState(false);
  const set = k => e => setF(s => ({ ...s, [k]: e.target.value }));
  const submit = e => { e.preventDefault(); setSent(true); };
  return (
    <section className="wf-section" id="form">
      <div className="wf-wrap formRail">
        <div>
          <p className="wf-kicker">Contacto · Lead form</p>
          <h2 className="wf-h2">Empieza tu diagnóstico</h2>
          <p className="wf-lead">Cuéntanos lo justo y nosotros proponemos la mejor solución para tu negocio.</p>
          <div className="wf-grid cols-2 mt">
            <div className="wf-box flat">
              <h3 className="wf-h3" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Clock size={18} strokeWidth={2} /> 24 h
              </h3>
              <p className="wf-muted">Tiempo de respuesta</p>
            </div>
            <div className="wf-box flat">
              <h3 className="wf-h3" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Gift size={18} strokeWidth={2} /> Gratis
              </h3>
              <p className="wf-muted">Primer diagnóstico</p>
            </div>
            <div className="wf-box flat">
              <h3 className="wf-h3" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <ShieldCheck size={18} strokeWidth={2} /> NDA
              </h3>
              <p className="wf-muted">Confidencialidad</p>
            </div>
            <div className="wf-box flat">
              <h3 className="wf-h3" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <MapPin size={18} strokeWidth={2} /> Local
              </h3>
              <p className="wf-muted">Equipo de la zona</p>
            </div>
          </div>
        </div>
        <form className="wf-box stickyform" onSubmit={submit}>
          {sent ? (
            <div className="wf-center" style={{ padding: '18px 4px' }}>
              <CheckCircle2 size={44} strokeWidth={1.8} style={{ color: 'var(--accent-ink)' }} />
              <h3 className="wf-h3 mt">¡Recibido, {f.nombre || 'gracias'}!</h3>
              <p className="wf-muted">Te respondemos en menos de 24 h.</p>
              <button type="button" className="wf-btn sm mt" onClick={() => { setSent(false); setF(empty); }}>Enviar otro →</button>
            </div>
          ) : (
            <>
              <Field label="Nombre *" placeholder="Nombre" value={f.nombre} onChange={set('nombre')} />
              <Field label="Email *" type="email" placeholder="tu@empresa.com" value={f.email} onChange={set('email')} />
              <Field label="Empresa" placeholder="Empresa" value={f.empresa} onChange={set('empresa')} />
              <Field label="Teléfono" type="tel" placeholder="+34 ..." value={f.tel} onChange={set('tel')} />
              <Field label="Tipo de servicio" select placeholder="Selecciona…" value={f.servicio} onChange={set('servicio')} options={SERVICE_OPTIONS} />
              <Field label="Presupuesto" select placeholder="Rango…" value={f.presupuesto} onChange={set('presupuesto')} options={BUDGET_OPTIONS} />
              <Field label="Mensaje" area placeholder="Tu proyecto…" value={f.msg} onChange={set('msg')} />
              <button type="submit" className="wf-btn primary" style={{ width: '100%', justifyContent: 'center' }}>Enviar →</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export function SocialProof({ setPage }) {
  return (
    <section className="wf-section" id="proyectos" style={{ background: 'var(--paper-2)' }}>
      <div className="wf-wrap">
        <div className="wf-center">
          <p className="wf-kicker">Nuestro trabajo · Our work</p>
          <h2 className="wf-h2">Proyectos que hemos construido</h2>
          <p className="wf-lead">Soluciones reales, entregadas.</p>
        </div>
        <div className="wf-grid cols-3 mt-lg">
          {PROJECTS.slice(0, 3).map(p => (
            <div className="wf-box" key={p.id}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="wf-chip">{p.tag}</span>
                <span className="wf-muted" style={{ fontSize: 13 }}>{p.year}</span>
              </div>
              <h3 className="wf-h3 mt">{p.title}</h3>
              <p className="wf-muted">{p.desc}</p>
              <div className="wf-row gap-sm mt" style={{ flexWrap: 'wrap' }}>
                {p.tech.map(t => <span className="wf-chip" key={t} style={{ fontSize: 12 }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="wf-center mt-lg">
          <button className="wf-btn mark" onClick={() => setPage('projects')}>Ver todos los proyectos →</button>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="wf-section" id="faq">
      <div className="wf-wrap wf-grid cols-2" style={{ alignItems: 'start' }}>
        <div>
          <p className="wf-kicker">FAQ</p>
          <h2 className="wf-h2">Dudas frecuentes</h2>
          <p className="wf-lead">Las preguntas que más nos hacen antes de arrancar un proyecto.</p>
        </div>
        <div className="wf-stack">
          {FAQS.map(([q, a], i) => (
            <div className={"wf-box flat faqItem" + (open === i ? ' open' : '')} key={q} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="wf-row" style={{ justifyContent: 'space-between' }}>
                <span>{q}</span><span className="tgl">+</span>
              </div>
              <div className="ans"><p className="wf-muted" style={{ marginBottom: 0, paddingTop: 8 }}>{a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="wf-section" id="nosotros" style={{ background: 'var(--paper-2)' }}>
      <div className="wf-wrap wf-grid cols-2" style={{ alignItems: 'center' }}>
        <div className="wf-img" style={{ minHeight: 230 }}>
          <img 
            src={fotoEquipo} 
            alt="Nuestro equipo" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <div>
          <p className="wf-kicker">Quiénes somos · About</p>
          <h2 className="wf-h2">Programadores con experiencia en competición</h2>
          <p className="wf-lead">Somos un equipo de desarrolladores de software especializados en hackathones y concursos de programación. Construir soluciones reales bajo presión nos ha enseñado a entregar rápido, pensar claro y escribir código que funciona desde el día uno.</p>
          <p className="wf-lead wf-en">A team forged in hackathons and coding competitions — we ship fast, think sharp, and write code that works from day one.</p>
          
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wf-foot">
      <div className="wf-wrap wf-grid cols-4">
        <div><Brand size={22} /><p className="wf-muted">Software que funciona para tu negocio.</p></div>
        <div className="wf-stack gap-sm"><strong>Servicios</strong><span className="wf-muted">Páginas web</span><span className="wf-muted">Apps a medida</span><span className="wf-muted">Automatización</span></div>
        <div className="wf-stack gap-sm"><strong>Enterprise</strong><span className="wf-muted">Cloud</span><span className="wf-muted">Legacy</span><span className="wf-muted">Datos & IA</span></div>
        <div className="wf-stack gap-sm"><strong>Contacto</strong><span className="wf-muted">ducks.coding.e@gmail.com</span><span className="wf-muted">+52 2721287943</span></div>
      </div>
    </footer>
  );
}
