"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Server, Code, Trophy, Star, Mic, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, achievements } from "@/data/portfolio-data";

// Icon map for data-driven icon strings
const iconMap: Record<string, React.ElementType> = {
  Cloud, Database, Server, Code, Trophy, Star, Github: GithubIcon, Mic,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Certifications & Achievements"
          title="Credentials & Recognition"
          highlight="Recognition"
          description="Certifications I've earned and achievements that mark key milestones."
        />

        {/* ── Certifications ── */}
        <div className="mb-14">
          <h3
            className="text-xl font-bold mb-6 flex items-center gap-2"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.12)" }}>
              <Code size={16} style={{ color: "var(--accent-1)" }} aria-hidden="true" />
            </span>
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => {
              const Icon = iconMap[cert.icon] ?? Code;
              return (
                <motion.a
                  key={cert.title}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group flex flex-col p-5 rounded-2xl transition-all duration-300 cursor-pointer"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    backdropFilter: "blur(10px)",
                  }}
                  aria-label={`${cert.title} — issued by ${cert.issuer}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: "rgba(139,92,246,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "var(--accent-1)" }} aria-hidden="true" />
                  </div>
                  <h4 className="text-sm font-bold mb-1 leading-snug flex-1" style={{ color: "var(--text-primary)" }}>
                    {cert.title}
                  </h4>
                  <p className="text-xs mb-2" style={{ color: "var(--accent-1)" }}>{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-auto pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{cert.date}</span>
                    <ExternalLink size={12} style={{ color: "var(--text-muted)" }} aria-hidden="true" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ── Achievements ── */}
        <div>
          <h3
            className="text-xl font-bold mb-6 flex items-center gap-2"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(236,72,153,0.12)" }}>
              <Trophy size={16} style={{ color: "var(--accent-3)" }} aria-hidden="true" />
            </span>
            Achievements & Awards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {achievements.map((ach, i) => {
              const Icon = iconMap[ach.icon] ?? Trophy;
              return (
                <motion.div
                  key={ach.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(236,72,153,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "var(--accent-3)" }} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                        {ach.title}
                      </h4>
                      <span
                        className="flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full"
                        style={{ background: "rgba(236,72,153,0.1)", color: "var(--accent-3)" }}
                      >
                        {ach.year}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {ach.description}
                    </p>
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
