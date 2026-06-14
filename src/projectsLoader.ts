type Project = {
  year: number;
  id: string;
  title: string;
  desc: string;
  tag: string;
  tech: string[];
  author?: string[];
  link?: string | null;
};
const modules = import.meta.glob("./projects/*.ts", { eager: true });

export const PROJECTS: Project[] = Object.entries(modules)
  .map(([path, m]) => ({ ...(m as { default: Omit<Project, 'id'> }).default, id: path }))
  .sort((a, b) => b.year - a.year);
