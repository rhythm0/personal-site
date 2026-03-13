// =====================================================
// app/page.tsx
// =====================================================

import React from "react";
import { runSelfChecks } from "../lib/test";
import SectionHeading from "../components/SectionHeading";
import NavCard from "../components/NavCard";
import ProjectCard from "../components/ProjectCard";
import GalleryTile from "../components/GalleryTile";
import ExperienceRow from "../components/ExperienceRow";
import MusicSection from "../components/MusicSection";


import { navItems } from "../data/navItems";
import { featuredProjects } from "../data/projects";
import { experienceItems } from "../data/experience";
import { paintingItems, calligraphyItems, photographyItems } from "../data/gallery";

if (process.env.NODE_ENV === "development") {
  runSelfChecks();
}

export default function Rhythm0SiteTemplate() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black">

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <header className="mb-20 md:mb-28">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-neutral-500">Siyuan Qi / rhythm0</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Between code and ink, systems and rhythm.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-xl md:leading-9">
            I build distributed systems, AI applications, and scalable software experiences. As rhythm0, I explore music,
            painting, Chinese calligraphy, and photography as parallel forms of composition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-400">
            <span className="rounded-full border border-neutral-800 px-4 py-2">Software Engineer</span>
            <span className="rounded-full border border-neutral-800 px-4 py-2">Creative Technologist</span>
            <span className="rounded-full border border-neutral-800 px-4 py-2">Artist</span>
          </div>
        </header>

        <section className="mb-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Site navigation">
          {navItems.map((item) => (
            <NavCard key={item.title} title={item.title} description={item.description} href={item.href} />
          ))}
        </section>

        <section id="projects" className="mb-20 scroll-mt-20">
          <SectionHeading
            eyebrow="Selected Work"
            title="Engineering projects shaped by systems thinking"
            description="A portfolio spanning distributed systems, retrieval-augmented generation, large-scale data processing, and cloud architecture."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            ))}
          </div>
        </section>

        <section id="experience" className="mb-20 scroll-mt-20">
          <SectionHeading
            eyebrow="Experience"
            title="Industry, research, and teaching"
            description="Work across product engineering, systems, applied AI, and technical instruction."
          />
          <div className="space-y-5">
            {experienceItems.map((item) => (
              <ExperienceRow key={`${item.org}-${item.role}`} {...item} />
            ))}
          </div>
        </section>

        {/* <section id="music" className="mb-20 scroll-mt-20">
          <SectionHeading
            eyebrow="rhythm0"
            title="Music as structure, texture, and emotion"
            description="Replace the placeholder card below with NetEase embeds, Spotify links, release notes, lyrics, or process sketches."
          />
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/70 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-lg text-white">Current artist note</p>
                <p className="mt-4 max-w-xl text-sm md:text-base leading-7 text-neutral-400">
                  Music is where architecture becomes feeling. It lets me work with repetition, contrast, silence, and release in
                  a way that feels related to software, but less bounded by utility.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-500">
                  <span className="rounded-full border border-neutral-800 px-4 py-2">NetEase embed</span>
                  <span className="rounded-full border border-neutral-800 px-4 py-2">release notes</span>
                  <span className="rounded-full border border-neutral-800 px-4 py-2">artist alias: rhythm0</span>
                </div>
              </div>
              <div className="rounded-3xl border border-dashed border-neutral-700 p-6 text-neutral-500">
                <p className="text-sm uppercase tracking-[0.2em]">Embed Placeholder</p>
                <div className="mt-4 rounded-2xl border border-neutral-800 bg-black p-4">
                  <p className="text-white">NetEase player</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Replace this block with your iframe once you have your song IDs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <MusicSection />

        <section id="painting" className="mb-20 scroll-mt-20">
          <SectionHeading
            eyebrow="Painting"
            title="Visual studies in atmosphere and form"
            description="A gallery-style section for paintings, sketches, or mixed-media work."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {paintingItems.map((item) => (
              <GalleryTile key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="calligraphy" className="mb-20 scroll-mt-20">
          <SectionHeading
            eyebrow="Calligraphy"
            title="Gesture, discipline, and the rhythm of ink"
            description="Chinese calligraphy sits at the center of motion, control, and expression — a practice of both structure and freedom."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {calligraphyItems.map((item) => (
              <GalleryTile key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="photography" className="mb-20 scroll-mt-20">
          <SectionHeading
            eyebrow="Photography"
            title="Fragments of light, line, and stillness"
            description="A clean grid you can later replace with real images, hover states, or a lightbox experience."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photographyItems.map((item) => (
              <GalleryTile key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[2rem] border border-neutral-800 bg-neutral-950/60 p-8 md:p-10">
          <SectionHeading
            eyebrow="Garden"
            title="Engineering systems. Composing rhythm. Exploring form."
            description="Fragments from my creative process."
          />
            <p className="max-w-4xl text-sm md:text-base leading-8 text-neutral-400">
              The creation of something new is not accomplished by the intellect but by the play instinct. — <i>Carl Jung</i> <br/>
              A work is never completed, only abandoned. — <i>Paul Valéry</i><br/>
              I have nothing to say and I am saying it. — <i>John Cage</i><br/>
            </p>
        </section>

        <footer className="flex flex-col gap-4 border-t border-neutral-900 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Siyuan Qi / rhythm0</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/rhythm0" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/alexandra-siyuanq/" className="hover:text-white">LinkedIn</a>
            <a href="mailto:alexqii779@gmail.com" className="hover:text-white">Email</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
