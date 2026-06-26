"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio-data";

const typeConfig = {
  work:       { icon: Briefcase,      label: "Work",        color: "var(--accent-1)", bg: "rgba(139,92,246,0.12)" },
  internship: { icon: GraduationCap,  label: "Internship",  color: "var(--accent-2)", bg: "rgba(6,182,212,0.12)" },
  leadership: { icon: Award,          label: "Leadership",  color: "var(--accent-3)", bg: "rgba(236,72,153,0.12)" },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My Professional Journey"
          highlight="Professional Journey"
          description="From internships to senior roles — here's where I've worked and what I've accomplished."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line" aria-hidden="true" />

          <div className="space-y-10">
            {experience.map((exp, index) => {
              const config = typeConfig[exp.type as keyof typeof typeConfig] ?? typeConfig.work;
              const Icon = config.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card — takes up half width on desktop */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="hover-glow p-6 rounded-2xl transition-all duration-300"
                      style={{
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {/* Type badge */}
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                        style={{ background: config.bg, color: config.color }}
                      >
                        <Icon size={11} aria-hidden="true" />
                        {config.label}
                      </span>

                      <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold mb-1" style={{ color: config.color }}>
                        {exp.company}
                      </p>
                      <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                        {exp.period} · {exp.location}
                      </p>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      {exp.highlights.length > 0 && (
                        <ul className="space-y-1.5 mb-4">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                              <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: config.color }} aria-hidden="true" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech tags */}
                      {exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="hover-tag px-2.5 py-1 rounded-full text-xs"
                              style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                color: "var(--text-muted)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Centre dot */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center z-10"
                    style={{ background: config.color, top: "1.75rem" }}
                    aria-hidden="true"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  {/* Mobile dot (left side) */}
                  <div
                    className="md:hidden flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-2 z-10"
                    style={{ background: config.color }}
                    aria-hidden="true"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
