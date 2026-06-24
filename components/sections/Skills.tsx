"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Cloud, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio-data";

// Map icon string → Lucide component
const iconMap: Record<string, React.ElementType> = {
  Monitor, Server, Cloud, Users,
};

const accentColors = [
  { bg: "rgba(139,92,246,0.12)", color: "var(--accent-1)" },
  { bg: "rgba(6,182,212,0.12)",  color: "var(--accent-2)" },
  { bg: "rgba(236,72,153,0.12)", color: "var(--accent-3)" },
  { bg: "rgba(34,197,94,0.12)",  color: "#22c55e" },
];

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name}: ${level}%`}
          style={{ background: `linear-gradient(90deg, ${color}, var(--accent-2))` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="My Technical Arsenal"
          highlight="Technical Arsenal"
          description="Technologies and tools I've mastered over the years of professional development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIndex) => {
            const Icon = iconMap[cat.icon] ?? Monitor;
            const accent = accentColors[catIndex % accentColors.length];

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: accent.bg }}
                  >
                    <Icon size={20} style={{ color: accent.color }} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {cat.category}
                  </h3>
                </div>

                {/* Skill bars */}
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.1 + skillIndex * 0.08}
                    color={accent.color}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Additional skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl text-center"
          style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}
        >
          <p className="text-sm mb-4 font-medium" style={{ color: "var(--text-muted)" }}>
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Git", "Figma", "REST APIs", "WebSockets", "Testing (Jest / Cypress)", "Agile / Scrum",
              "System Design", "Linux", "Nginx", "Elasticsearch"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
