// This is the root page — it assembles all sections.
// To add or reorder sections, simply add/remove/reorder the components below.
import Navbar         from "@/components/layout/Navbar";
import Footer         from "@/components/layout/Footer";
import BackToTop      from "@/components/ui/BackToTop";
import Hero           from "@/components/sections/Hero";
import About          from "@/components/sections/About";
import Skills         from "@/components/sections/Skills";
import Projects       from "@/components/sections/Projects";
import Experience     from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Testimonials   from "@/components/sections/Testimonials";
import Contact        from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Sticky navigation bar */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Experience */}
        <Experience />

        {/* 6. Certifications & Achievements */}
        <Certifications />

        {/* 7. Testimonials — hidden for now */}
        {/* <Testimonials /> */}

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />
    </>
  );
}
