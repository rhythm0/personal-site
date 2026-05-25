"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

import { getSectionById } from "../data/sections";

const tracks = [
  {
    id: 2641847620,
    title: "Silent Techno",
    subtitle: "pop / r&b",
    note:
      "A pop-R&B inspired piece about solitude in autumn. Headphones on, techno quietly flowing through the night — a dance of hidden desires and quiet ecstasy.",
  },
  {
    id: 2701573091,
    title: "Spark",
    subtitle: "acid techno / minimal / ambient",
    note:
      "Inspired while working on large-scale data processing with Apache Spark. The piece captures the moment of sudden insight — a spark of clarity emerging from structured chaos.",
  },
];

export default function MusicSection() {
  const section = getSectionById("music");

  if (!section?.eyebrow || !section.title) {
    return null;
  }

  return (
    <AnimatedSection
      id={section.id}
      className={section.className}
      viewport={section.viewport}
    >
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/70 p-6 md:p-8">
        <div className="grid gap-10 md:items-start">
          <div>
            <p className="text-lg text-white">Artist note</p>

            <p className="mt-4 max-w-xl text-sm md:text-base leading-7 text-neutral-400">
              Music is where architecture becomes feeling.
              I treat composition similarly to building software systems —
              patterns, tension, repetition, and release.
            </p>

            <p className="mt-4 max-w-xl text-sm md:text-base leading-7 text-neutral-400">
              Under the alias <span className="text-white font-semibold italic">rhythm0</span>, I explore
              minimal structures, quiet textures, and slowly evolving sonic forms.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-500">
              <span className="rounded-full border border-neutral-800 px-4 py-2">
                NetEase Music
              </span>
              <span className="rounded-full border border-neutral-800 px-4 py-2">
                experimental composition
              </span>
              <span className="rounded-full border border-neutral-800 px-4 py-2">
                artist alias: rhythm0
              </span>
            </div>
          </div>

          <div className="space-y-6 flex flex-col md:flex-row gap-10">
            {tracks.map((track, i) => (
              <div
                key={track.id}
                className="rounded-3xl border border-neutral-800 bg-black/40 p-5 transition duration-300 hover:border-neutral-500"
              >
                <div className="mb-3">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Track {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-white font-medium">{track.title}</p>
                  <p className="text-xs text-neutral-500">{track.subtitle}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-400 max-w-md">
                    {track.note}
                  </p>
                </div>

                <a
                  href={`https://music.163.com/song?id=${track.id}`}
                  target="_blank"
                  className="text-sm underline italic text-[#F7E7CE]"
                >
                  Listen on NetEase
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
