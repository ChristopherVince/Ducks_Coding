import "./Navbar.css";
import { useState } from "react";
import { Menu, X, ArrowLeft, MessageCircle } from "lucide-react";
import { Brand } from "../ui";
import { WHATSAPP_LINK } from "../site";
import type { Route } from "../types";

type NavbarProps = {
  route?: Route;
  setRoute?: (route: Route) => void;
  onBack?: () => void;
};

export default function Navbar({ route, setRoute, onBack }: NavbarProps) {
  const [open, setOpen] = useState(false);

  // Modo "página de proyectos": solo marca + volver
  if (onBack) {
    return (
      <nav className="nav">
        <div className="nav__inner">
          <button className="nav__brandBtn" onClick={onBack} aria-label="Volver al inicio">
            <Brand />
          </button>
          <button className="wf-btn sm nav__back" onClick={onBack}>
            <ArrowLeft size={15} strokeWidth={2.2} /> Volver al inicio
          </button>
        </div>
      </nav>
    );
  }

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brandBtn" onClick={close}>
          <Brand />
        </a>

        <div className="nav__spacer" />

        {/* Enlaces + acciones (desktop) / menú desplegable (móvil) */}
        <div className={"nav__menu" + (open ? " nav__menu--open" : "")}>
          <a href="#servicios" className="nav__link" onClick={close}>Servicios</a>
          <a href="#proyectos" className="nav__link" onClick={close}>Proyectos</a>
          <a href="#nosotros" className="nav__link" onClick={close}>Nosotros</a>

          {route && setRoute && (
            <div className="seg nav__seg" role="tablist" aria-label="Tipo de cliente">
              <button
                className={route === "pyme" ? "on" : ""}
                onClick={() => setRoute("pyme")}
              >
                Tu negocio
              </button>
              <button
                className={route === "enterprise" ? "on" : ""}
                onClick={() => setRoute("enterprise")}
              >
                Enterprise
              </button>
            </div>
          )}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="wf-btn sm nav__wa"
            onClick={close}
          >
            <MessageCircle size={16} strokeWidth={2.2} /> WhatsApp
          </a>

          <a href="#form" className="wf-btn sm primary nav__cta" onClick={close}>
            Hablemos →
          </a>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
