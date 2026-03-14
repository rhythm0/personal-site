// =====================================================
// app/page.tsx
// =====================================================
"use client";
import React from "react";
import { motion } from "framer-motion";
import { runSelfChecks } from "../lib/test";
import SectionHeading from "../components/SectionHeading";
import NavCard from "../components/NavCard";
import ProjectCard from "../components/ProjectCard";
import GalleryTile from "../components/GalleryTile";
import ExperienceRow from "../components/ExperienceRow";
import MusicSection from "../components/MusicSection";
import HeroPage from "../components/HeroPage";

import { navItems } from "../data/navItems";
import { featuredProjects } from "../data/projects";
import { experienceItems } from "../data/experience";
import { paintingItems, calligraphyItems, photographyItems } from "../data/gallery";

if (process.env.NODE_ENV === "development") {
  runSelfChecks();
}

const scrollItem = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(6px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Rhythm0SiteTemplate() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black">

      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10"
      >
        {/* Hero */}
        <HeroPage />

        {/* Nav Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          animate={false}
          viewport={{ once: false, amount: 0.6}}
          variants={scrollItem} 
          className="min-h-[80vh] p-10 content-center grid gap-5 md:grid-cols-2 xl:grid-cols-3" 
          aria-label="Site navigation"
        >
          {navItems.map((item) => (
            <NavCard key={item.title} title={item.title} description={item.description} href={item.href} />
          ))}
        </motion.section>
        
        {/* Projects */}
        <motion.section 
            variants={scrollItem}
            initial="hidden"
            whileInView="show"
            animate={false}
            viewport={{ once: false, amount: 0.6 }}
            id="projects" 
            className="py-32 items-center justify-center scroll-mt-20"
        >
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
        </motion.section>
        
        {/* Experience */}
        <motion.section 
          variants={scrollItem}
          initial="hidden"
          whileInView="show"
          animate={false}
          viewport={{ once: false, amount: 0.6 }}
          id="experience" 
          className="py-32 scroll-mt-20"
        >
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
        </motion.section>

        <MusicSection />

        {/* Painting */}
        <motion.section 
          variants={scrollItem}
          initial="hidden"
          whileInView="show"
          animate={false}
          viewport={{ once: false, amount: 0.6 }}
          id="painting" 
          className="py-32 scroll-mt-20"
        >
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
        </motion.section>

        <motion.section 
          variants={scrollItem}
          initial="hidden"
          whileInView="show"
          animate={false}
          viewport={{ once: false, amount: 0.6 }}
          id="calligraphy" 
          className="py-32 scroll-mt-20"
        >
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
        </motion.section>

        <motion.section 
          variants={scrollItem}
          initial="hidden"
          whileInView="show"
          animate={false}
          viewport={{ once: false, amount: 0.6 }}
          id="photography" 
          className="py-32 scroll-mt-20"
        >
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
        </motion.section>


        {/* Garden */}
        <motion.section 
          variants={scrollItem}
          initial="hidden"
          whileInView="show"
          animate={false}
          viewport={{ once: false, amount: 0.6 }} 
          className="py-32 scroll-mt-20"
        >
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/60 p-8 md:p-10">
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
          </div>
        </motion.section>

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
