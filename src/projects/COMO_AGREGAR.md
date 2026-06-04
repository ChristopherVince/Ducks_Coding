# Cómo agregar un proyecto

1. Crea un archivo nuevo en esta carpeta con el formato:
   `NNN-nombre-del-proyecto.js`
   Donde `NNN` es el siguiente número disponible (007, 008, etc.).

2. Copia esta estructura y rellena tus datos:

```js
export default {
  title: 'Nombre de tu proyecto',
  tag: 'Web App',        // Web App | Dashboard | E-commerce | App Web | Automatización | Hackathon | API | Otro
  desc: 'Descripción breve de qué hace el proyecto y cuál fue el resultado.',
  tech: ['React', 'Node.js'],   // tecnologías usadas
  year: 2024,
  author: ['TuNombre'],         // ['TuNombre', 'OtroNombre'] si fue en grupo
  link: null,                   // 'https://...' si tiene URL pública, si no: null
};
```

3. Haz commit solo de tu archivo. Nadie más toca el mismo archivo → sin conflictos.

## Reglas

- El número del prefijo (`007-`) controla el orden en que aparece en la página (menor = primero).
- Si tu proyecto es grupal, ponle el número siguiente al último existente.
- No modifiques archivos de otros compañeros.
- No toques `projectsLoader.js` ni `ProjectsPage.jsx` — se actualizan solos.
