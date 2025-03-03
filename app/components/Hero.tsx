"use client";

import Image from "next/image";
import {
  GithubIcon as GitHub,
  Linkedin,
  Mail,
  ArrowDown,
  InstagramIcon,
  Facebook,
  Github,
  PhoneCall,
} from "lucide-react";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Header from "./Header";
import FloatingNav from "./floating-nav";
import { FloatingPaper } from "./Floating-paper";

const CodePattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle
        id="pattern-circle"
        cx="10"
        cy="10"
        r="1.6257413380501518"
        fill="#000"
      ></circle>
    </pattern>
    <rect
      id="rect"
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#pattern-circles)"
    ></rect>
  </svg>
);

export default function Hero() {
  const links = [
    {
      title: "Github",
      icon: (
        <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/duxdudu",
    },

    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/dux-forreally-210134353/",
    },
    {
      title: "Instragram",
      icon: (
        <InstagramIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/_i.dux_dudu/?__pwa=1",
    },
    {
      title: "it's me Dux",
      icon: (
        <Image src="/logo.png" width={40} height={40} alt="Aceternity Logo" />
      ),
      href: "https://www.instagram.com/_i.dux_dudu/?__pwa=1",
    },
    {
      title: "Gmail",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/_i.dux_dudu/?__pwa=1",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/DuduDux22495",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/duxdudu",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-[#ff3c3c] dark:via-[#3b3838] dark:to-[#0b0808] "
    >
       <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Hexagon */}
              <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner Hexagon */}
              <path d="M50,30 L67.5,40 L67.5,60 L50,70 L32.5,60 L32.5,40 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              {/* Connecting Lines */}
              <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="85" y1="30" x2="67.5" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="85" y1="70" x2="67.5" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="50" y1="90" x2="50" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="15" y1="70" x2="32.5" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="15" y1="30" x2="32.5" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              {/* Center Point */}
              <circle cx="50" cy="50" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>
      <div>
        <Header />
      </div>

      {/* Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x"></div>
      </div>
      <FloatingPaper count={4} />
      <div className="container  px-6 pt-32 pb-20 relative z-10">
      
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              D.dieudonne
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Full Stack & Mobile Apps 
              <br></br>Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              "Developing innovative and scalable digital products across web
              and mobile platforms. Expert in full-stack development (MERN
              stack) and mobile app development using React Native, ensuring
              seamless, high-performance experiences for users."
            </p>
            <div className="flex lg:hidden justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/duxdudu"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/dux-forreally-210134353/"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/_i.dux_dudu/?__pwa=1"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <InstagramIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="dudufredu@gmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.facebook.com/dushime.dieudonne.54/                          "
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Facebook className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <div className="w-[26rem] mb-10">
              <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
              />
            </div>
            <motion.button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
              <ArrowDown className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center ml-2 gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <PhoneCall className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto ">
            
              <div className="relative inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 border-8 border-blue-700 transform  opacity-75 w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/dudu.jpg"
                  alt="duxforreally"
                  fill
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-96 h-96  -mb-32 -mr-32 opacity-20 ">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
          className="rounded-t-full bg-blue-800"
        />
      </div>
    </section>
  );
}

