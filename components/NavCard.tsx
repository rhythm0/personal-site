import { NavCardProps } from "../types";

export default function NavCard({ title, description, href }: NavCardProps) {
  return (
    <a
      href={href}
      className="group block rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:bg-neutral-900"
    >
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
    </a>
  );
}