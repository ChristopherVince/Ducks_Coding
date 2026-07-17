import "./WhatsAppCard.css";
import QRCode from "react-qr-code";
import { MessageCircle, QrCode } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "../site";

export default function WhatsAppCard() {
  return (
    <div className="wa">
      <div className="wa__body">
        <div className="wa__copy">
          <span className="wf-chip mark wa__chip">
            <MessageCircle size={15} strokeWidth={2.2} /> WhatsApp
          </span>

          <h3 className="wf-h3 wa__title">¿Prefieres escribirnos directo?</h3>

          <p className="wf-muted wa__text">
            Te respondemos por WhatsApp en horario laboral. Sin formularios, sin
            esperas.
          </p>

          <a
            className="wf-btn primary wa__btn"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} strokeWidth={2.2} /> Contáctanos →
          </a>

          <p className="wa__number">{WHATSAPP_DISPLAY}</p>
        </div>

        {/* QR: útil en escritorio (se escanea con el móvil). Oculto en pantallas pequeñas. */}
        <div className="wa__qr">
          <div className="wa__qrFrame">
            <QRCode
              value={WHATSAPP_LINK}
              size={128}
              bgColor="transparent"
              fgColor="#1e1b4b"
              level="M"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <span className="wa__qrHint">
            <QrCode size={13} strokeWidth={2} /> Escanea para chatear
          </span>
        </div>
      </div>
    </div>
  );
}
