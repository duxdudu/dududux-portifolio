"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 980) { // Hide on mobile devices
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [lastScrollY]);

  if (!mounted) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`
        fixed w-full max-w-screen-lg mx-auto left-1/2 -translate-x-1/2 rounded-3xl justify-center z-50 transition-all duration-300
        ${isVisible ? "top-2" : "-top-20"}
        ${theme === "dark" ? "bg-gray-900/95 border-[3px] border-blue-900" : "bg-white/95 border-[2px] border-blue-500"}
        backdrop-blur-sm shadow-md
        sm:w-4/5 md:w-3/4 lg:w-2/3
      `}
    >
      <nav className="container mx-auto px-2 py-2 sm:px-4 sm:py-3">
        <ul className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide">
          {[
            ["about", "About"],
            ["experience", "Experience"],
            ["skills", "Skills"],
            ["projects", "Projects"],
            ["services", "Services"],
            ["education", "Education"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  transition-colors duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap px-2 py-1 rounded-lg
                  ${activeSection === id
                    ? "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30"
                    : theme === "dark"
                    ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"}
                `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
