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

const SERVICE_OPTIONS = ['Desarrollo de apps', 'Migración a la nube', 'Automatización & IA', 'Modernización legacy', 'Datos & dashboards', 'Consultoría'];
const BUDGET_OPTIONS = ['< 5.000 €', '5.000 – 20.000 €', '20.000 – 50.000 €', '> 50.000 €'];

Object.assign(window, { TRACKS, BEFORE, AFTER, STEPS, FAQS, CASES, SERVICE_OPTIONS, BUDGET_OPTIONS });
