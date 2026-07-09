"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { achievementsData } from "@/constant";
import { nasalization } from "@/app/fonts";
import { Card } from "../ui/card";
import { FaTrophy } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      id="achievements"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
            variants={itemVariants}
          >
            Achievements
          </motion.h2>
          <motion.p
            className="text-xs text-muted-foreground max-w-2xl mx-auto mt-4"
            variants={itemVariants}
          >
            Milestones and competitive programming accomplishments
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6"
        >
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="relative overflow-hidden backdrop-blur-xl border transition-all duration-300 shadow-lg hover:shadow-xl group p-6"
                style={{
                  background: "hsl(var(--glass-bg))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              >
                <div className="flex items-start">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="flex-shrink-0 mt-1 relative z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <FaTrophy className="text-primary text-lg" />
                    </div>
                  </div>
                  <p 
                    className="ml-5 text-sm md:text-base font-inter leading-relaxed relative z-10" 
                    style={{ color: "hsl(var(--foreground) / 0.8)" }}
                  >
                    {achievement}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
