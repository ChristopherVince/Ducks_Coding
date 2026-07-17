import "./LeadForm.css";
import { useState } from "react";
import { Clock, Gift, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

import { Field } from "../../../../ui";
import WhatsAppCard from "../../../../components/WhatsAppCard";
import { SERVICE_OPTIONS } from "../../../../data.js";

const WORKER_URL =
  import.meta.env.VITE_WORKER_URL ??
  "https://codingduckworker.ducks-coding-e.workers.dev";

export default  function LeadForm() {
  const empty = {
    nombre: "",
    email: "",
    empresa: "",
    tel: "",
    servicio: "",
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

          <WhatsAppCard />
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
                required
                area={false}
                select={false}
              />

              <Field
                label="Email *"
                type="email"
                placeholder="tu@empresa.com"
                value={f.email}
                onChange={handleChange("email")}
                required
                area={false}
                select={false}
              />

              <Field
                label="Nombre del negocio o empresa"
                placeholder="Nombre del negocio o empresa"
                value={f.empresa}
                onChange={handleChange("empresa")}
                area={false}
                select={false}
              />

              <Field
                label="Teléfono"
                type="tel"
                placeholder="+52 ..."
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