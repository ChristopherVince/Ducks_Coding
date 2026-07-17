import "./Footer.css";
import { Mail, MessageCircle, Globe } from "lucide-react";
import {
  BRAND_NAME,
  EMAIL,
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
} from "../site";
import footerLogoUrl from "../assets/logo_nombre.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="foot__inner">
        <div className="foot__brand">
          <img src={footerLogoUrl} alt="Ducks Systems" style={{ height: 32, width: "auto" }} />
          <p className="wf-muted foot__tagline">
            Software que funciona para tu negocio — desde landing pages hasta
            sistemas de gestión a gran escala.
          </p>
          <div className="foot__social">
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="foot__icon">
              <Mail size={18} strokeWidth={2} />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="foot__icon"
            >
              <MessageCircle size={18} strokeWidth={2} />
            </a>
            <a href="#top" aria-label="Inicio" className="foot__icon">
              <Globe size={18} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="foot__col">
          <strong>Servicios</strong>
          <a href="#servicios">Páginas web</a>
          <a href="#servicios">Apps a medida</a>
          <a href="#servicios">Automatización</a>
        </div>

        <div className="foot__col">
          <strong>Enterprise</strong>
          <a href="#servicios">Cloud</a>
          <a href="#servicios">Modernización legacy</a>
          <a href="#servicios">Datos &amp; IA</a>
        </div>

        <div className="foot__col">
          <strong>Contacto</strong>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            WhatsApp · {WHATSAPP_DISPLAY}
          </a>
          <a href="#form">Empezar diagnóstico</a>
        </div>
      </div>

      <div className="foot__bar">
        <span>© {year} {BRAND_NAME}</span>
        <span className="wf-muted">Hecho con café y código.</span>
      </div>
    </footer>
  );
}
