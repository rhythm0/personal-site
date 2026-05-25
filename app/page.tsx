// =====================================================
// app/page.tsx
// =====================================================
"use client";

import React from "react";
import { motion } from "framer-motion";

import AnimatedSection from "../components/AnimatedSection";
import ExperienceRow from "../components/ExperienceRow";
import GalleryTile from "../components/GalleryTile";
import HeroPage from "../components/HeroPage";
import MusicSection from "../components/MusicSection";
import NavCard from "../components/NavCard";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { experienceItems } from "../data/experience";
import { paintingItems, calligraphyItems, photographyItems } from "../data/gallery";
import { featuredProjects } from "../data/projects";
import { getSectionById, siteSections } from "../data/sections";
import { runSelfChecks } from "../lib/test";

if (process.env.NODE_ENV === "development") {
  runSelfChecks();
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Rhythm0SiteTemplate() {
  const navCardSections = siteSections.filter(
    (section) => section.showInNavCards && section.navTitle && section.navDescription,
  );
  const projectsSection = getSectionById("projects");
  const experienceSection = getSectionById("experience");
  const paintingSection = getSectionById("painting");
  const calligraphySection = getSectionById("calligraphy");
  const photographySection = getSectionById("photography");
  const gardenSection = getSectionById("garden");

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black">
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10"
      >
        <HeroPage />

        <AnimatedSection
          ariaLabel="Site navigation"
          className="py-32 p-10 content-center grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {navCardSections.map((section) => (
            <NavCard
              key={section.id}
              title={section.navTitle!}
              description={section.navDescription!}
              href={`#${section.id}`}
            />
          ))}
        </AnimatedSection>

        <AnimatedSection
          id={projectsSection?.id}
          className={projectsSection?.className}
          viewport={projectsSection?.viewport}
        >
          <SectionHeading
            eyebrow={projectsSection?.eyebrow ?? ""}
            title={projectsSection?.title ?? ""}
            description={projectsSection?.description}
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
        </AnimatedSection>

        <AnimatedSection
          id={experienceSection?.id}
          className={experienceSection?.className}
          viewport={experienceSection?.viewport}
        >
          <SectionHeading
            eyebrow={experienceSection?.eyebrow ?? ""}
            title={experienceSection?.title ?? ""}
            description={experienceSection?.description}
          />
          <div className="space-y-5">
            {experienceItems.map((item) => (
              <ExperienceRow key={`${item.org}-${item.role}`} {...item} />
            ))}
          </div>
        </AnimatedSection>

        <MusicSection />

        <AnimatedSection
          id={paintingSection?.id}
          className={paintingSection?.className}
          viewport={paintingSection?.viewport}
        >
          <SectionHeading
            eyebrow={paintingSection?.eyebrow ?? ""}
            title={paintingSection?.title ?? ""}
            description={paintingSection?.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {paintingItems.map((item) => (
              <GalleryTile key={item.title} {...item} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id={calligraphySection?.id}
          className={calligraphySection?.className}
          viewport={calligraphySection?.viewport}
        >
          <SectionHeading
            eyebrow={calligraphySection?.eyebrow ?? ""}
            title={calligraphySection?.title ?? ""}
            description={calligraphySection?.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {calligraphyItems.map((item) => (
              <GalleryTile key={item.title} {...item} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id={photographySection?.id}
          className={photographySection?.className}
          viewport={photographySection?.viewport}
        >
          <SectionHeading
            eyebrow={photographySection?.eyebrow ?? ""}
            title={photographySection?.title ?? ""}
            description={photographySection?.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {photographyItems.map((item) => (
              <GalleryTile key={item.title} {...item} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id={gardenSection?.id}
          className={gardenSection?.className}
          viewport={gardenSection?.viewport}
        >
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/60 p-8 md:p-10">
            <SectionHeading
              eyebrow={gardenSection?.eyebrow ?? ""}
              title={gardenSection?.title ?? ""}
              description={gardenSection?.description}
            />
            <p className="max-w-4xl text-sm md:text-base leading-8 text-neutral-400">
              The creation of something new is not accomplished by the intellect but by the play instinct. —{" "}
              <i>Carl Jung</i> <br />
              A work is never completed, only abandoned. — <i>Paul Valéry</i>
              <br />
              I have nothing to say and I am saying it. — <i>John Cage</i>
              <br />
            </p>
          </div>
        </AnimatedSection>

        <footer className="flex flex-col gap-4 border-t border-neutral-900 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Siyuan Qi / rhythm0</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/rhythm0" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/alexandra-siyuanq/" className="hover:text-white">LinkedIn</a>
            <a href="mailto:alexqii779@gmail.com" className="hover:text-white">Email</a>
          </div>
        </footer>
      </motion.section>
    </main>
  );
}
