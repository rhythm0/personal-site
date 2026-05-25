"use client";

import type { ReactNode } from "react";

import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const defaultVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const defaultViewport = { once: false, margin: "-120px" } as const;

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
  viewport?: MotionProps["viewport"];
}

export default function AnimatedSection({
  children,
  id,
  className,
  ariaLabel,
  viewport,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      variants={defaultVariants}
      initial="hidden"
      whileInView="show"
      animate={false}
      viewport={viewport ?? defaultViewport}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
