"use client";

import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, socialLinks } from "@/data/portfolio-data";

const contactItems = [
  { icon: Mail,    label: "Email",    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: Phone,   label: "Phone",    value: personalInfo.phone,    href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: MapPin,  label: "Location", value: personalInfo.location, href: "#" },
];

const socialItems = [
  { icon: GithubIcon,    label: "GitHub",     href: socialLinks.github },
  { icon: LinkedinIcon,  label: "LinkedIn",   href: socialLinks.linkedin },
  { icon: TwitterXIcon,  label: "X/Twitter",  href: socialLinks.twitter },
  { icon: InstagramIcon, label: "Instagram",  href: socialLinks.instagram },
];

type FormState = { name: string; email: string; subject: string; message: string };
type Status    = "idle" | "sending" | "success" | "error";

function validate(form: FormState): Partial<FormState> {
  const errors: Partial<FormState> = {};
  if (!form.name.trim())                                       errors.name    = "Name is required.";
  if (!form.email.trim())                                      errors.email   = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))   errors.email   = "Enter a valid email.";
  if (!form.subject.trim())                                    errors.subject = "Subject is required.";
  if (form.message.trim().length < 20)                         errors.message = "Message must be at least 20 characters.";
  return errors;
}

export default function Contact() {
  const formRef             = useRef<HTMLFormElement>(null);
  const [form, setForm]     = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length) { setErrors(newErrors); return; }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 ${
      errors[field] ? "ring-2 ring-red-500/50" : "focus:ring-violet-500/40"
    }`;

  const inputStyle = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          highlight="Work Together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                Get in Touch
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Whether you have a question, a project proposal, or just want to connect — I&apos;d love to hear from you. I usually respond within 24 hours.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="contact-item flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  aria-label={`${label}: ${value}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(139,92,246,0.12)" }}
                  >
                    <Icon size={18} style={{ color: "var(--accent-1)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socialItems.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-btn w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-3xl"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", backdropFilter: "blur(10px)" }}
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Full Name <span aria-hidden="true" style={{ color: "var(--accent-3)" }}>*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" autoComplete="name"
                    value={form.name} onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass("name")}
                    style={inputStyle}
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-xs mt-1" style={{ color: "#f87171" }} role="alert">{errors.name}</p>}
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Email Address <span aria-hidden="true" style={{ color: "var(--accent-3)" }}>*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" autoComplete="email"
                    value={form.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass("email")}
                    style={inputStyle}
                    aria-required="true"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-xs mt-1" style={{ color: "#f87171" }} role="alert">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Subject <span aria-hidden="true" style={{ color: "var(--accent-3)" }}>*</span>
                </label>
                <input
                  id="subject" name="subject" type="text"
                  value={form.subject} onChange={handleChange}
                  placeholder="Project inquiry / Collaboration / Say hi"
                  className={inputClass("subject")}
                  style={inputStyle}
                  aria-required="true"
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && <p id="subject-error" className="text-xs mt-1" style={{ color: "#f87171" }} role="alert">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Message <span aria-hidden="true" style={{ color: "var(--accent-3)" }}>*</span>
                </label>
                <textarea
                  id="message" name="message" rows={5}
                  value={form.message} onChange={handleChange}
                  maxLength={500}
                  placeholder="Tell me about your project or what you'd like to discuss…"
                  className={`${inputClass("message")} resize-none`}
                  style={inputStyle}
                  aria-required="true"
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <div className="flex items-center justify-between mt-1">
                  {errors.message
                    ? <p id="message-error" className="text-xs" style={{ color: "#f87171" }} role="alert">{errors.message}</p>
                    : <span />
                  }
                  <p className="text-xs" style={{ color: form.message.length >= 500 ? "#f87171" : "var(--text-muted)" }}>
                    {form.message.length} / 500
                  </p>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: "var(--gradient)" }}
                aria-live="polite"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} aria-hidden="true" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mt-4 p-3 rounded-xl text-sm"
                  style={{ background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}
                  role="status"
                >
                  <CheckCircle size={16} aria-hidden="true" />
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mt-4 p-3 rounded-xl text-sm"
                  style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}
                  role="alert"
                >
                  <AlertCircle size={16} aria-hidden="true" />
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
