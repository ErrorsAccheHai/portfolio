"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/portfolio-data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          highlight="People Say"
          description="Kind words from colleagues, managers, and collaborators I've had the pleasure of working with."
        />

        <div className="max-w-3xl mx-auto">
          {/* Featured testimonial */}
          <div
            className="relative p-8 sm:p-10 rounded-3xl mb-6 overflow-hidden"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Decorative quote icon */}
            <Quote
              size={80}
              className="absolute -top-4 -left-4 opacity-[0.04]"
              style={{ color: "var(--accent-1)" }}
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6" aria-label={`${testimonials[active].rating} out of 5 stars`}>
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" style={{ color: "#f59e0b" }} aria-hidden="true" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote
                  className="text-base sm:text-lg leading-relaxed mb-8 italic"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: "2px solid var(--accent-1)" }}
                  >
                    <Image
                      src={testimonials[active].avatar}
                      alt={testimonials[active].name}
                      fill
                      sizes="48px"
                      className="object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    {/* Initials fallback */}
                    <div
                      className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: "var(--gradient)" }}
                      aria-hidden="true"
                    >
                      {testimonials[active].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: "var(--text-primary)" }}>{testimonials[active].name}</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {testimonials[active].title} · {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`View testimonial ${i + 1} from ${testimonials[i].name}`}
                  className="transition-all duration-200"
                  style={{
                    width: i === active ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === active ? "var(--accent-1)" : "var(--border)",
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "var(--gradient)", color: "#fff" }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* All testimonials thumbnail row */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200"
              style={{
                background: i === active ? "rgba(139,92,246,0.12)" : "var(--bg-card)",
                border: `1px solid ${i === active ? "var(--accent-1)" : "var(--border)"}`,
              }}
              aria-label={`Jump to testimonial from ${t.name}`}
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image src={t.avatar} alt={t.name} fill sizes="32px" className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "var(--gradient)" }} aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold" style={{ color: i === active ? "var(--accent-1)" : "var(--text-primary)" }}>
                  {t.name}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.company}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
