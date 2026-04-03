"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

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

const tracks = [
  {
    id: 2641847620,
    title: "Silent Techno",
    subtitle: "pop / r&b",
    note:
      "A pop-R&B inspired piece about solitude in autumn. Headphones on, techno quietly flowing through the night — a dance of hidden desires and quiet ecstasy.",
    cover:'http://p2.music.126.net/EnKTsd9M6vBtKdqVOrD9uw==/109951170099892039.jpg',
  },
  {
    id: 2701573091,
    title: "Spark",
    subtitle: "acid techno / minimal / ambient",
    note:
      "Inspired while working on large-scale data processing with Apache Spark. The piece captures the moment of sudden insight — a spark of clarity emerging from structured chaos.",
    cover:'http://p1.music.126.net/gHzD7Fhw68pSDmSPFKI13w==/109951170947737840.jpg',
  },
];

export default function MusicSection() {
    return (
        
        <motion.section
            variants={scrollItem}
            animate={false}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin:'-120px' }}
            id="music" 
            className="py-32 scroll-mt-20"
        >
          <SectionHeading
            eyebrow="rhythm0"
            title="Music as structure, texture, and emotion"
            description="Fragments, loops, and harmonic structures exploring the boundary between engineering and feeling."
          />

          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/70 p-6 md:p-8">
            <div className="grid gap-10 md:items-start">

              {/* Artist Note */}
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
              
              {/* 作品卡 */}
              <div className="space-y-6 flex flex-col md:flex-row gap-10">
                {tracks.map((track, i) => (
                  <div
                    key={track.id}
                    className="flex flex-row md:flex-col lg:flex-row rounded-3xl border border-neutral-800 bg-neutral-950/40 p-5 gap-4 transition duration-300 hover:-translate-y-1 hover:border-neutral-500"
                  >
                    <img src={track.cover} className="w-30 h-30 object-cover"/>
                    <div className="mb-3 relative ">
                      <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                        Track {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="text-white font-medium">{track.title}</p>
                      <p className="text-xs text-neutral-500">{track.subtitle}</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-400 max-w-md">
                        {track.note}
                      </p>
                      <button
                        onClick={() =>
                          window.open(`https://music.163.com/song?id=${track.id}`, "_blank")
                        }
                        className="group relative mt-3 overflow-hidden rounded-4xl px-4 py-1 border border-neutral-800 text-sm text-[#F7E7CE]"
                      >
                        {/* 背景渐变层 */}
                        <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-md" />

                        {/* 文字 */}
                        <span className="relative transition-all duration-500 group-hover:tracking-widest group-hover:scale-105 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300">
                          Listen 🎧
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.section>
    );
}