"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import FloatingNav from "./components/floating-nav";
import Projects from "./components/Projects";
import Logo from "./components/Logo";
import MobileNav from "./components/mobile-nav";
import BackToTopButton from "./components/BactToTopButton";
import VisitorCounter from "./components/VisitorCounter";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Logo />
      <FloatingNav />
      <MobileNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Contact />
      <BackToTopButton />
      <VisitorCounter />
    </main>
  );
}
