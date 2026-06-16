"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import { personalInfo, socialLinks, typingStrings } from "@/data/portfolio-data";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const socialIcons = [
  { href: socialLinks.github,   icon: GithubIcon,   label: "GitHub" },
  { href: socialLinks.linkedin, icon: LinkedinIcon,  label: "LinkedIn" },
  { href: socialLinks.twitter,  icon: TwitterXIcon,  label: "X / Twitter" },
];

// Staggered container animation
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const typedText = useTypingEffect(typingStrings);
  const [imgError, setImgError] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
      aria-label="Hero section"
    >
      {/* Animated background gradients */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            {/* Location badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            >
              <MapPin size={13} aria-hidden="true" style={{ color: "var(--accent-1)" }} />
              {personalInfo.location}
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              Hi, I&rsquo;m{" "}
              <span className="gradient-text-full">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-semibold mb-6 h-9"
              style={{ color: "var(--text-secondary)" }}
            >
              <span aria-live="polite" aria-atomic="true">{typedText}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </motion.div>

            {/* Short intro */}
            <motion.p variants={item} className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.bio[0]}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center"
                style={{ background: "var(--gradient)", boxShadow: "0 0 30px rgba(139,92,246,0.3)" }}
              >
                <Download size={17} aria-hidden="true" />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-hover)",
                  color: "var(--text-primary)",
                }}
              >
                <Mail size={17} aria-hidden="true" />
                Contact Me
              </button>
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                View Projects
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-60 blur-xl"
                style={{ background: "var(--gradient)" }}
                aria-hidden="true"
              />
              {/* Spinning gradient border ring */}
              <div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: "var(--gradient)",
                  animation: "spin 8s linear infinite",
                  opacity: 0.5,
                }}
                aria-hidden="true"
              />
              {/* Image container */}
              <div
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{ border: "3px solid var(--bg-primary)" }}
              >
                {imgError ? (
                  /* Initials fallback — only shown when image fails to load */
                  <div
                    className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white"
                    style={{ background: "var(--gradient)" }}
                    aria-hidden="true"
                  >
                    {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                ) : (
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} — ${personalInfo.title}`}
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                    className="object-cover"
                    priority
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Floating badge — experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl text-sm font-semibold"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)", backdropFilter: "blur(10px)" }}
                aria-hidden="true"
              >
                🚀 Intern @ Nighwan Technology
              </motion.div>
              {/* Floating badge — open to work */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-6 px-4 py-2 rounded-xl text-sm font-semibold"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)", backdropFilter: "blur(10px)" }}
                aria-hidden="true"
              >
                ✅ Open to Work
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll down cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} style={{ color: "var(--text-muted)" }} />
        </motion.div>
      </motion.div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
