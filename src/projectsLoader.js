const modules = import.meta.glob('./projects/*.js', { eager: true });

export const PROJECTS = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => b.year - a.year);
