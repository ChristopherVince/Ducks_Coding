/**
 * Datos de marca y contacto.
 * Única fuente de verdad: si cambia el teléfono, el email o el nombre,
 * se cambia AQUÍ y se actualiza en toda la web.
 */

export const BRAND_NAME = "Ducks Systems";

export const EMAIL = "ducks.coding.e@gmail.com";

/** Número en formato internacional, solo dígitos (lo que exige wa.me). */
export const WHATSAPP_NUMBER = "525656114234";

/** Cómo se le muestra al usuario. */
export const WHATSAPP_DISPLAY = "+52 565 611 4234";

/** Mensaje que se autocompleta al abrir el chat. */
const WHATSAPP_GREETING =
  "Hola, vengo de la web y me gustaría info sobre un proyecto.";

/** Link directo al chat de empresa, con mensaje precargado. */
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_GREETING,
)}`;
