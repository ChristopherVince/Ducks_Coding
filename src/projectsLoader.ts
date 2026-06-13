type Project = {
  year: number;
  id: string;
  title: string;
  desc: string;
  tag: string;
  tech: string[];
  default: {
    year: number;
  };
};
const modules = import.meta.glob("./projects/*.ts", { eager: true });

export const PROJECTS = Object.values(modules)
  .map((m) => (m as { default: Project }).default)
  .sort((a, b) => b.year - a.year);
