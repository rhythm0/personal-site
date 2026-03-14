"use client";
import React from "react";
import { motion } from "framer-motion";

const revealLeft = {
  hidden: {
    opacity: 0,
    filter: "blur(6px)",
    clipPath: "inset(0 100% 0 0)",
  },
  show: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    filter: "blur(0px)",
    transition: {
      duration: 8,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 10,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export default function HeroPage() {
    return (
        <motion.section 
          initial="hidden"
          whileInView="show"
          animate={false}
          viewport={{ once: false, amount: 0.5 }}
          id="home"
          className="min-h-screen content-center"
        >
          <div className="w-full mx-auto flex flex-col gap-10">
            <motion.p
              variants={revealLeft}
              className="mb-4 text-lg uppercase tracking-[0.32em] text-neutral-500"
            >
              Siyuan Qi / rhythm0
            </motion.p>

            <motion.h1
              variants={revealLeft}
              className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl"
            >
              Between code and ink, systems and rhythm.
            </motion.h1>

            <motion.p
              variants={heroItem}
              transition={{ delay: 1.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-xl md:leading-9"
            >
              I build distributed systems, AI applications, and scalable software experiences. As rhythm0, I explore music,
              painting, Chinese calligraphy, and photography as parallel forms of composition.
            </motion.p>

            <motion.div
              variants={heroItem}
              transition={{ delay: 1.5 }}
              className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-400"
            >
              <span className="rounded-full border border-neutral-800 px-4 py-2">Software Engineer</span>
              <span className="rounded-full border border-neutral-800 px-4 py-2">Creative Technologist</span>
              <span className="rounded-full border border-neutral-800 px-4 py-2">Artist</span>
            </motion.div>
          </div>
        </motion.section>
    );
}