"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio-data";

// Derive unique categories (preserving order of appearance)
const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          highlight="Built"
          description="A selection of projects that showcase my skills and love of solving real problems."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="group" aria-label="Filter projects by category">
          <Filter size={16} style={{ color: "var(--text-muted)" }} className="mr-1" aria-hidden="true" />
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="filter-btn px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              style={
                activeFilter === cat
                  ? { background: "var(--gradient)", color: "#fff" }
                  : { background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }
              }
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center py-12" style={{ color: "var(--text-muted)" }}>
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

// ── Individual project card ──────────────────────────────────────────────────
type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="hover-glow group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        backdropFilter: "blur(10px)",
      }}
      aria-label={project.title}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {imgError ? (
          /* Fallback gradient — only when image fails */
          <div
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white"
            style={{ background: "var(--gradient)", opacity: 0.85 }}
            aria-hidden="true"
          >
            {project.title.charAt(0)}
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white z-10"
            style={{ background: "var(--gradient)" }}
          >
            Featured
          </div>
        )}
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium z-10"
          style={{ background: "rgba(0,0,0,0.6)", color: "#fff", backdropFilter: "blur(6px)" }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="hover-tag px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ background: "rgba(139,92,246,0.1)", color: "var(--accent-1)", border: "1px solid rgba(139,92,246,0.2)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            aria-label={`View ${project.title} source on GitHub`}
          >
            <GithubIcon size={15} aria-hidden="true" />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "var(--gradient)" }}
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={15} aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
