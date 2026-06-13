import "./LeadForm.css";
import { useState } from "react";
import { Clock, Gift, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

import {Field}  from "../../../../ui";
/* ============================================================
   data.jsx — Contenido del wireframe "Doble ruta"
   Se expone en window para compartirlo entre los demás .jsx
   ============================================================ */

const TRACKS = {
  pyme: {
    chip: 'PYME', label: 'PYME · Small business',
    items: ['Webs y tiendas online', 'Apps a medida sencillas', 'Automatización de tareas', 'Migración básica a la nube'],
  },
  enterprise: {
    chip: 'Enterprise', label: 'Enterprise · Gran proyecto',
    items: ['Modernización de legacy', 'Migración cloud a gran escala', 'Integraciones & APIs', 'Datos, IA & equipos dedicados'],
  },
};

const BEFORE = [
  ['🐌 Sistemas obsoletos', 'Lentos, frágiles, caros de mantener.'],
  ['📄 Procesos manuales', 'Excel y copia-pega sin fin.'],
  ['🔌 Datos en silos', 'Nada se habla entre sí.'],
  ['⏳ Falta de actualización', 'Deuda técnica acumulada.'],
];

const AFTER = [
  ['⚡ Plataforma moderna', 'Rápida, estable, escalable.'],
  ['🤖 Flujos automatizados', 'El software hace lo repetitivo.'],
  ['🔗 Todo integrado', 'Un solo origen de verdad.'],
  ['🚀 Siempre al día', 'Mejora continua y soporte.'],
];

const STEPS = [
  ['01 · Diagnóstico gratuito', 'Entendemos tu negocio y tus cuellos de botella.'],
  ['02 · Propuesta y presupuesto', 'Alcance claro, sin sorpresas.'],
  ['03 · Construcción por fases', 'Entregas frecuentes que puedes ver.'],
  ['04 · Lanzamiento y soporte', 'Te acompañamos después de entregar.'],
];

const FAQS = [
  ['¿Hay un mínimo de proyecto?', 'Trabajamos desde pequeñas automatizaciones para negocios locales hasta plataformas enterprise. No hay mínimo: empezamos por donde más te duele.'],
  ['¿Cómo cobran (fijo o por horas)?', 'Según el proyecto: precio cerrado por alcance para PYMEs y modelo por fases o equipo dedicado para grandes proyectos.'],
  ['¿Firman acuerdos de confidencialidad?', 'Sí, firmamos NDA antes de ver cualquier dato sensible de tu negocio.'],
  ['¿Puedo migrar por fases?', 'Siempre. Modernizamos sin parar tu operación, entregando valor en cada fase.'],
];

const CASES = [
  ['cliente A', 'PYME', '“De papel a app en', '6 semanas', '.”'],
  ['cliente B', 'Enterprise', '“Cloud sin caídas,', '−35%', 'de coste.”'],
  ['cliente C', 'PYME', '“Automatizamos facturación:', '10 h/sem', 'ahorradas.”'],
];
const WORKER_URL = "https://codingduckworker.ducks-coding-e.workers.dev";

const SERVICE_OPTIONS = ['Desarrollo de apps', 'Migración a la nube', 'Automatización & IA', 'Modernización legacy', 'Datos & dashboards', 'Consultoría'];
const BUDGET_OPTIONS = ['< 5.000 €', '5.000 – 20.000 €', '20.000 – 50.000 €', '> 50.000 €'];
export default  function LeadForm() {
  const empty = {
    nombre: "",
    email: "",
    empresa: "",
    tel: "",
    servicio: "",
    presupuesto: "",
    msg: "",
  };

  const [f, setF] = useState(empty);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange =
    (k: keyof typeof f) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setF((prev) => ({
        ...prev,
        [k]: e.target.value,
      }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setSent(true);
    } catch {
      setError("Hubo un problema al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lead-section" id="form">
      <div className="lead-wrap">
        <div>
          <p className="wf-kicker">Contacto · Lead form</p>
          <h2 className="wf-h2">Empieza tu diagnóstico</h2>
          <p className="wf-lead">
            Cuéntanos lo justo y nosotros proponemos la mejor solución para tu
            negocio.
          </p>

          <div className="lead-badges">
            <div className="wf-box flat">
              <h3 className="wf-h3 lead-badge-title">
                <Clock size={18} strokeWidth={2} /> 24 h
              </h3>
              <p className="wf-muted">Tiempo de respuesta</p>
            </div>

            <div className="wf-box flat">
              <h3 className="wf-h3 lead-badge-title">
                <Gift size={18} strokeWidth={2} /> Gratis
              </h3>
              <p className="wf-muted">Primer diagnóstico</p>
            </div>

            <div className="wf-box flat">
              <h3 className="wf-h3 lead-badge-title">
                <ShieldCheck size={18} strokeWidth={2} /> NDA
              </h3>
              <p className="wf-muted">Confidencialidad</p>
            </div>

            <div className="wf-box flat">
              <h3 className="wf-h3 lead-badge-title">
                <MapPin size={18} strokeWidth={2} /> Local
              </h3>
              <p className="wf-muted">Equipo de la zona</p>
            </div>
          </div>
        </div>

        <form className="wf-box lead-form" onSubmit={submit}>
          {sent ? (
            <div className="lead-success">
              <CheckCircle2
                size={44}
                strokeWidth={1.8}
                className="lead-success-icon"
              />
              <h3 className="wf-h3 lead-success-heading">
                ¡Recibido, {f.nombre || "gracias"}!
              </h3>
              <p className="wf-muted">Te respondemos en menos de 24 h.</p>

              <button
                type="button"
                className="wf-btn sm lead-success-btn"
                onClick={() => {
                  setSent(false);
                  setF(empty);
                }}
              >
                Enviar otro →
              </button>
            </div>
          ) : (
            <>
              <Field
                label="Nombre *"
                placeholder="Nombre"
                value={f.nombre}
                onChange={handleChange("nombre")}
                area={false}
                select={false}
              />

              <Field
                label="Email *"
                type="email"
                placeholder="tu@empresa.com"
                value={f.email}
                onChange={handleChange("email")}
                area={false}
                select={false}
              />

              <Field
                label="Empresa"
                placeholder="Empresa"
                value={f.empresa}
                onChange={handleChange("empresa")}
                area={false}
                select={false}
              />

              <Field
                label="Teléfono"
                type="tel"
                placeholder="+34 ..."
                value={f.tel}
                onChange={handleChange("tel")}
                area={false}
                select={false}
              />

              <Field
                label="Tipo de servicio"
                select
                placeholder="Selecciona…"
                value={f.servicio}
                onChange={handleChange("servicio")}
                options={SERVICE_OPTIONS}
              />

              <Field
                label="Presupuesto"
                select
                placeholder="Rango…"
                value={f.presupuesto}
                onChange={handleChange("presupuesto")}
                options={BUDGET_OPTIONS}
              />

              <Field
                label="Mensaje"
                area
                placeholder="Tu proyecto…"
                value={f.msg}
                onChange={handleChange("msg")}
                select={false}
              />

              {error && <p className="lead-error">{error}</p>}

              <button
                type="submit"
                className="wf-btn primary lead-submit"
                disabled={loading}
              >
                {loading ? "Enviando…" : "Enviar →"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}