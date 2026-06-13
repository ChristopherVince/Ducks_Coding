import { useState } from "react";
import { FAQS } from "../../../../data";
import "./Faq.css";

export  default function Faq() {
  const [open, setOpen] = useState<number>(0);
  



  return (
    <section className="wf-section" id="faq">
      <div className="wf-wrap wf-grid cols-2 faqGrid">
        <div>
          <p className="wf-kicker">FAQ</p>
          <h2 className="wf-h2">Dudas frecuentes</h2>
          <p className="wf-lead">
            Las preguntas que más nos hacen antes de arrancar un proyecto.
          </p>
        </div>

        <div className="wf-stack">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;

            return (
              <div
                key={q}
                className={`wf-box flat faqItem ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <div className="faqHeader">
                  <span>{q}</span>
                  <span className="tgl">{isOpen ? "−" : "+"}</span>
                </div>

                <div className="ans">
                  <p className="wf-muted">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}