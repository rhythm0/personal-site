export default function ExperienceRow({ role, org, period, detail }: { role: string; org: string; period: string; detail: string }) {
  return (
    <div className="transition duration-300 hover:border-neutral-500 grid gap-4 rounded-3xl border border-neutral-800 bg-neutral-950/60 p-6 md:grid-cols-[180px_1fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">{period}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{role}</h3>
        <p className="mt-1 text-neutral-400">{org}</p>
        <p className="mt-3 text-sm md:text-base leading-7 text-neutral-400">{detail}</p>
      </div>
    </div>
  );
}