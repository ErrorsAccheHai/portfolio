"use client";

import { Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks, navLinks } from "@/data/portfolio-data";

const socialIcons = [
  { href: socialLinks.github,    icon: GithubIcon,    label: "GitHub" },
  { href: socialLinks.linkedin,  icon: LinkedinIcon,  label: "LinkedIn" },
  { href: socialLinks.twitter,   icon: TwitterXIcon,  label: "X / Twitter" },
  { href: socialLinks.instagram, icon: InstagramIcon, label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 font-bold text-lg mb-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--gradient)" }}
              >
                <Code2 size={16} className="text-white" aria-hidden="true" />
              </span>
              <span className="gradient-text">{personalInfo.name}</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-violet-400 nav-link-underline relative"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
              Connect
            </h3>
            <div className="flex gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-btn w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-sm"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <p className="flex items-center gap-1">
            © {year} {personalInfo.name}. Made with{" "}
            <Heart size={13} className="text-pink-500 inline" aria-hidden="true" /> using Next.js & Tailwind CSS.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
