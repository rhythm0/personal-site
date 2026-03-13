import { ProjectCardProps } from "../types";

export default function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 transition duration-300 hover:border-neutral-500">
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm md:text-base leading-7 text-neutral-400">{description}</p>
      <p className="mt-4 text-sm text-neutral-500">{tech}</p>
    </div>
  );
}

