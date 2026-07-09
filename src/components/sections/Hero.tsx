"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { quentine, mono } from "@/app/fonts";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-start px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-full sm:max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-4xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border shadow-sm backdrop-blur-xl w-fit mb-4 cursor-default transition-shadow hover:shadow-md"
              style={{
                background: "hsl(var(--glass-bg))",
                borderColor: "hsl(var(--glass-border))",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wide" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
                Available for work
              </span>
            </motion.div>

            <motion.h1
              className={`${quentine.className} text-5xl md:text-7xl lg:text-8xl font-bold`}
              style={{ color: "hsl(var(--primary))" }}
              variants={itemVariants}
            >
              {selfData.name}
            </motion.h1>

            <motion.p
              role="doc-subtitle"
              className={`${mono.className} text-lg md:text-xl`}
              style={{ color: "hsl(var(--secondary))" }}
              variants={itemVariants}
            >
              Full Stack Developer & AI Engineer
            </motion.p>

            <motion.p
              className="text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.8)" }}
              variants={itemVariants}
            >
              {selfData.bio}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="relative group overflow-hidden btn-primary shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link href="/resume">
                  <span className="relative z-10 font-medium">View Resume</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
