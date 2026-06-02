/* ============================================================
   sections.jsx — Secciones de la landing "Doble ruta"
   Depende de: data.jsx (datos) y ui.jsx (Brand, Logo, Lines, Field)
   Todas las secciones se exponen en window para App.jsx.
   ============================================================ */

const { useState } = React;

function Nav({ route, setRoute }) {
  return (
    <nav className="wf-nav">
      <div className="wf-wrap wf-row" style={{ width: '100%', flexWrap: 'nowrap' }}>
        <Brand />
        <div className="spacer"></div>
        <div className="seg">
          <button className={route === 'pyme' ? 'on' : ''} onClick={() => setRoute('pyme')}>PYME</button>
          <button className={route === 'enterprise' ? 'on' : ''} onClick={() => setRoute('enterprise')}>Enterprise</button>
        </div>
        <a href="#form" className="wf-btn sm primary">Hablemos →</a>
      </div>
    </nav>
  );
}

function Hero({ route, setRoute }) {
  return (
    <header className="wf-section" data-screen-label="B-hero">
      <div className="wf-wrap splitHero">
        <div>
          <p className="wf-kicker">Consultora de software · Software consultancy</p>
          <h1 className="wf-h1">Tu sistema, <span className="mark-hl">modernizado</span>. Tú, sin complicaciones.</h1>
          <p className="wf-lead">Elige tu camino y te llevamos del problema al resultado — local o gran escala.</p>
          <p className="wf-lead wf-en">Pick your path; we take you from problem to result.</p>
          <p className="wf-note">UVP a la izquierda; las DOS rutas conviven desde el primer scroll (decisión arriba del todo).</p>
        </div>
        <div className="wf-stack">
          <div className={"wf-box routeCard " + (route === 'pyme' ? 'sel' : 'dim')} onClick={() => setRoute('pyme')}>
            <span className="wf-chip mark badge">PYME · Small business</span>
            <h3 className="wf-h3" style={{ marginTop: 8 }}>Digitaliza tu negocio local</h3>
            <p className="wf-muted">Rápido, asequible, sin jerga.</p>
            <a href="#form" className="wf-btn sm primary mt">Empezar como PYME →</a>
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

function LogoBand() {
  return (
    <section style={{ padding: '22px 0', borderBottom: '2.5px solid var(--line)', background: 'var(--paper-2)' }}>
      <div className="wf-wrap wf-row" style={{ justifyContent: 'center', gap: 14 }}>
        <span className="wf-kicker" style={{ margin: 0 }}>Nos eligen ·</span>
        {[1, 2, 3, 4, 5].map(n => <Logo key={n}>logo 0{n}</Logo>)}
      </div>
    </section>
  );
}

function BeforeAfter() {
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
            {BEFORE.map(([t, d]) => (
              <div className="wf-box flat" key={t}><h3 className="wf-h3">{t}</h3><p className="wf-muted">{d}</p></div>
            ))}
          </div>
          <div className="vs">→</div>
          <div className="col">
            <div className="wf-box wf-center" style={{ background: 'var(--accent)' }}><strong>DESPUÉS · After</strong></div>
            {AFTER.map(([t, d]) => (
              <div className="wf-box" key={t}><h3 className="wf-h3">{t}</h3><p className="wf-muted">{d}</p></div>
            ))}
          </div>
        </div>
        <p className="wf-note">Comparativa Antes / Después en dos columnas espejo, con flecha de transformación al centro.</p>
      </div>
    </section>
  );
}

function Services({ route }) {
  return (
    <section className="wf-section" id="servicios" style={{ background: 'var(--paper-2)' }}>
      <div className="wf-wrap">
        <div className="wf-center"><p className="wf-kicker">Servicios y casos de uso · Services</p><h2 className="wf-h2">Servicios por camino</h2></div>
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
        <p className="wf-note">Servicios divididos en dos tracks que reflejan la decisión de ruta del hero (toca el toggle).</p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="wf-section">
      <div className="wf-wrap" style={{ maxWidth: 760 }}>
        <p className="wf-kicker">Cómo trabajamos · How we work</p>
        <h2 className="wf-h2">Mismo proceso, los dos caminos</h2>
        <div className="timeline mt-lg">
          {STEPS.map(([t, d]) => (
            <div className="step" key={t}><h3 className="wf-h3">{t}</h3><p className="wf-muted">{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const empty = { nombre: '', email: '', empresa: '', tel: '', servicio: '', presupuesto: '', msg: '' };
  const [f, setF] = useState(empty);
  const [sent, setSent] = useState(false);
  const set = k => e => setF(s => ({ ...s, [k]: e.target.value }));
  const submit = e => { e.preventDefault(); setSent(true); };
  return (
    <section className="wf-section" id="form">
      <div className="wf-wrap formRail">
        <div>
          <p className="wf-kicker">Captación · Lead form</p>
          <h2 className="wf-h2">Empieza tu diagnóstico</h2>
          <p className="wf-lead">El formulario te acompaña mientras lees. Cuéntanos lo justo y nosotros proponemos.</p>
          <div className="wf-grid cols-2 mt">
            <div className="wf-box flat"><h3 className="wf-h3">⏱ 24 h</h3><p className="wf-muted">Tiempo de respuesta</p></div>
            <div className="wf-box flat"><h3 className="wf-h3">🆓 0 €</h3><p className="wf-muted">Primer diagnóstico</p></div>
            <div className="wf-box flat"><h3 className="wf-h3">🔒 NDA</h3><p className="wf-muted">Confidencialidad</p></div>
            <div className="wf-box flat"><h3 className="wf-h3">📍 Local</h3><p className="wf-muted">Equipo de la zona</p></div>
          </div>
        </div>
        <form className="wf-box stickyform" onSubmit={submit}>
          {sent ? (
            <div className="wf-center" style={{ padding: '18px 4px' }}>
              <div className="wf-stat" style={{ fontSize: 40 }}>✓</div>
              <h3 className="wf-h3 mt">¡Recibido, {f.nombre || 'gracias'}!</h3>
              <p className="wf-muted">Te respondemos en menos de 24 h.</p>
              <button type="button" className="wf-btn sm mt" onClick={() => { setSent(false); setF(empty); }}>Enviar otro →</button>
            </div>
          ) : (
            <React.Fragment>
              <Field label="Nombre *" placeholder="Nombre" value={f.nombre} onChange={set('nombre')} />
              <Field label="Email *" type="email" placeholder="tu@empresa.com" value={f.email} onChange={set('email')} />
              <Field label="Empresa" placeholder="Empresa" value={f.empresa} onChange={set('empresa')} />
              <Field label="Teléfono" type="tel" placeholder="+34 ..." value={f.tel} onChange={set('tel')} />
              <Field label="Tipo de servicio" select placeholder="Selecciona…" value={f.servicio} onChange={set('servicio')} options={SERVICE_OPTIONS} />
              <Field label="Presupuesto" select placeholder="Rango…" value={f.presupuesto} onChange={set('presupuesto')} options={BUDGET_OPTIONS} />
              <Field label="Mensaje" area placeholder="Tu proyecto…" value={f.msg} onChange={set('msg')} />
              <button type="submit" className="wf-btn primary" style={{ width: '100%', justifyContent: 'center' }}>Enviar →</button>
            </React.Fragment>
          )}
        </form>
      </div>
      <div className="wf-wrap"><p className="wf-note">Formulario en rail pegajoso (sticky) y controlado en React: visible mientras el usuario revisa el contenido.</p></div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="wf-section" id="casos" style={{ background: 'var(--paper-2)' }}>
      <div className="wf-wrap">
        <div className="wf-center"><p className="wf-kicker">Prueba social · Casos de éxito</p><h2 className="wf-h2">Lo que logramos juntos</h2></div>
        <div className="wf-stack mt-lg">
          {CASES.map(([c, tag, a, hl, b]) => (
            <div className="wf-box flat wf-row" style={{ justifyContent: 'space-between' }} key={c}>
              <Logo>{c}</Logo>
              <span className="wf-lead" style={{ margin: 0 }}>{tag} · {a} <span className="mark-hl">{hl}</span> {b}</span>
            </div>
          ))}
        </div>
        <div className="wf-grid cols-3 mt-lg">
          {['PYME', 'Enterprise', 'Mixto'].map(t => (
            <div className="wf-box" key={t}><div className="wf-img"><span>captura proyecto</span></div><h3 className="wf-h3 mt">Caso · {t}</h3><Lines short /></div>
          ))}
        </div>
        <div className="wf-center mt-lg"><a href="../Proyectos.html" className="wf-btn mark">Ver más proyectos →</a></div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="wf-section" id="faq">
      <div className="wf-wrap wf-grid cols-2" style={{ alignItems: 'start' }}>
        <div><p className="wf-kicker">FAQ</p><h2 className="wf-h2">Dudas frecuentes</h2><p className="wf-lead">Las preguntas que nos hacen PYMEs y grandes proyectos.</p></div>
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

function About() {
  return (
    <section className="wf-section" id="nosotros" style={{ background: 'var(--paper-2)' }}>
      <div className="wf-wrap wf-grid cols-2" style={{ alignItems: 'center' }}>
        <div className="wf-img" style={{ minHeight: 230 }}><span>foto equipo / oficina</span></div>
        <div>
          <p className="wf-kicker">Quiénes somos · About</p>
          <h2 className="wf-h2">Cercanos con las PYMEs, sólidos con los grandes</h2>
          <p className="wf-lead">El mismo equipo que te toma un café también despliega en producción a gran escala.</p>
          <p className="wf-lead wf-en">Close to small business, solid at enterprise scale.</p>
          <a href="#form" className="wf-btn primary mt">Conoce al equipo →</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wf-foot">
      <div className="wf-wrap wf-grid cols-4">
        <div><Brand size={22} /><p className="wf-muted">Dos caminos, un mismo equipo.</p></div>
        <div className="wf-stack gap-sm"><strong>PYME</strong><span className="wf-muted">Webs</span><span className="wf-muted">Apps</span><span className="wf-muted">Automatización</span></div>
        <div className="wf-stack gap-sm"><strong>Enterprise</strong><span className="wf-muted">Cloud</span><span className="wf-muted">Legacy</span><span className="wf-muted">Datos & IA</span></div>
        <div className="wf-stack gap-sm"><strong>Contacto</strong><span className="wf-muted">hola@codingducks.dev</span><span className="wf-muted">+34 ...</span></div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, LogoBand, BeforeAfter, Services, Process, LeadForm, SocialProof, Faq, About, Footer });
