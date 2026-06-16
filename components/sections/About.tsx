"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, User } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, education } from "@/data/portfolio-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          highlight="I Am"
          description="A little background on my journey, education, and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Bio ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {/* Section icon header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.12)" }}>
                <User size={20} style={{ color: "var(--accent-1)" }} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>My Story</h3>
            </div>

            {personalInfo.bio.map((para, i) => (
              <p key={i} className="leading-relaxed text-base" style={{ color: "var(--text-secondary)" }}>
                {para}
              </p>
            ))}

            {/* Career goals */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Target size={18} style={{ color: "var(--accent-2)" }} aria-hidden="true" />
                <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>Career Goals</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {personalInfo.careerGoals}
              </p>
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Heart size={18} style={{ color: "var(--accent-3)" }} aria-hidden="true" />
                <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>Personal Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Education ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(6,182,212,0.12)" }}>
                <GraduationCap size={20} style={{ color: "var(--accent-2)" }} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>Education</h3>
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, borderColor: "var(--border-hover)" }}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>{edu.degree}</h4>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "var(--accent-1)" }}>{edu.institution}</p>
                  </div>
                  <span
                    className="flex-shrink-0 text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: "rgba(139,92,246,0.12)", color: "var(--accent-1)" }}
                  >
                    {edu.year}
                  </span>
                </div>
                {edu.gpa && (
                  <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
                    GPA: <span style={{ color: "var(--accent-2)" }}>{edu.gpa}</span>
                  </p>
                )}
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {edu.description}
                </p>
              </motion.div>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: "1",    label: "Internship" },
                { value: "10+",  label: "Projects" },
                { value: "100%", label: "Dedication" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl text-center"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
