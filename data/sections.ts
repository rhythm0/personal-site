import type { HTMLAttributes } from "react";

import type { MotionProps } from "framer-motion";

export interface SiteSection {
  id: string;
  navTitle?: string;
  navDescription?: string;
  navbarLabel?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  showInNavCards?: boolean;
  showInNavbar?: boolean;
  className?: HTMLAttributes<HTMLElement>["className"];
  viewport?: MotionProps["viewport"];
}

export const siteSections: SiteSection[] = [
  {
    id: "projects",
    navTitle: "Projects",
    navDescription: "Systems · AI · Infrastructure",
    eyebrow: "Selected Work",
    title: "Engineering projects shaped by systems thinking",
    description:
      "A portfolio spanning distributed systems, retrieval-augmented generation, large-scale data processing, and cloud architecture.",
    showInNavCards: true,
    showInNavbar: true,
    className: "py-32 items-center justify-center scroll-mt-20",
  },
  {
    id: "experience",
    navTitle: "Experience",
    navDescription: "Industry · Research · Teaching",
    eyebrow: "Experience",
    title: "Industry, research, and teaching",
    description:
      "Work across product engineering, systems, applied AI, and technical instruction.",
    showInNavCards: true,
    showInNavbar: true,
    className: "py-32 scroll-mt-20",
  },
  {
    id: "music",
    navTitle: "Music",
    navDescription: "Compositions by rhythm0",
    navbarLabel: "Gallery",
    eyebrow: "rhythm0",
    title: "Music as structure, texture, and emotion",
    description:
      "Fragments, loops, and harmonic structures exploring the boundary between engineering and feeling.",
    showInNavCards: true,
    showInNavbar: true,
    className: "py-32 scroll-mt-20",
  },
  {
    id: "painting",
    navTitle: "Painting",
    navDescription: "Visual experiments",
    eyebrow: "Painting",
    title: "Visual studies in atmosphere and form",
    description:
      "A gallery-style section for paintings, sketches, or mixed-media work.",
    showInNavCards: true,
    className: "py-32 scroll-mt-20",
  },
  {
    id: "calligraphy",
    navTitle: "Calligraphy",
    navDescription: "Ink · rhythm · gesture",
    eyebrow: "Calligraphy",
    title: "Gesture, discipline, and the rhythm of ink",
    description:
      "Chinese calligraphy sits at the center of motion, control, and expression — a practice of both structure and freedom.",
    showInNavCards: true,
    className: "py-32 scroll-mt-20",
  },
  {
    id: "photography",
    navTitle: "Photography",
    navDescription: "Captured moments",
    eyebrow: "Photography",
    title: "Fragments of light, line, and stillness",
    description:
      "A clean grid you can later replace with real images, hover states, or a lightbox experience.",
    showInNavCards: true,
    className: "py-32 scroll-mt-20",
    viewport: { once: false, amount: 0.4 },
  },
  {
    id: "garden",
    eyebrow: "Garden",
    title: "Engineering systems. Composing rhythm. Exploring form.",
    description: "Fragments from my creative process.",
    className: "pb-32 scroll-mt-20",
  },
];

export function getSectionById(id: SiteSection["id"]) {
  return siteSections.find((section) => section.id === id);
}
