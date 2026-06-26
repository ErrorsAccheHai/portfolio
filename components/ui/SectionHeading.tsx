"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;        // Small uppercase label above the title
  title: string;        // Main heading — supports splitting around a highlighted word
  highlight?: string;   // Word(s) inside title to render with gradient
  description?: string; // Optional subtitle paragraph
}

export default function SectionHeading({ label, title, highlight, description }: SectionHeadingProps) {
  // If highlight is provided, split the title around it so we can style it
  const renderTitle = () => {
    if (!highlight) return <span>{title}</span>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      {/* Small label pill */}
      <span
        className="section-label-badge inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ background: "rgba(139,92,246,0.12)", color: "var(--accent-1)", border: "1px solid rgba(139,92,246,0.25)" }}
      >
        {label}
      </span>

      {/* Main title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        {renderTitle()}
      </h2>

      {/* Optional divider */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-px w-12" style={{ background: "var(--border)" }} />
        <div className="h-1.5 w-6 rounded-full" style={{ background: "var(--gradient)" }} />
        <div className="h-px w-12" style={{ background: "var(--border)" }} />
      </div>

      {/* Optional description */}
      {description && (
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
