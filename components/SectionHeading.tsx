import { SectionHeadingProps } from "../types";

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs uppercase tracking-[0.28em] text-neutral-500">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-neutral-400">{description}</p> : null}
    </div>
  );
}

