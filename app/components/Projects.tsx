"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { Code, Layout, Server, Smartphone } from "lucide-react";
import Image from "next/image";

export default function CardHoverEffectDemo() {
  const projects = [
    {
      title: "Expenses Tracker",
      description:
        "A simple expense tracker that allows you to track your expenses and income.",
      link: "https://fine-expense-tracker-o9nl.vercel.app/",
      sourceCode: "https://github.com/duxdudu/fine-expense-tracker.git",
      image: "/image.png",
      technologies: ["Next js", "Prisma", "Clerk"],
    },
    {
      title: "Coffee Shop",
      description:
        "A coffee shop website that allows you to order coffee and have it delivered to your doorstep.",
      link: "https://my-coffee-eight.vercel.app/",
      sourceCode: "https://github.com/duxdudu/myCoffee.git",
      image: "/coffee.png",
      technologies: ["React", "Node.js", "GraphQL"],
    },
    {
      title: "E-electronicZone",
      description:
        "An e-commerce platform that allows you to buy and sell electronics.",
      link: "https://www.figma.com/design/rETQNJlfz9Q9cijqF1K7uy/e-commerce-website?node-id=0-1&t=sNdwVidZynId1Qly-1",
      sourceCode: "https://github.com/google",
      image: "/ecommerce.png",
      technologies: ["Next js", "node js", "Clerk","MongoDB"],
    },
    // {
    //   title: "Meta",
    //   description:
    //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    //   link: "https://meta.com",
    //   sourceCode: "https://github.com/facebook",
    //   image: "/images/meta.png",
    //   technologies: ["React", "Redux"],
    // },
    // {
    //   title: "Amazon",
    //   description:
    //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    //   link: "https://amazon.com",
    //   sourceCode: "https://github.com/amazon",
    //   image: "/images/amazon.png",
    //   technologies: ["Vue.js", "AWS"],
    // },
    // {
    //   title: "Microsoft",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    //   sourceCode: "https://github.com/microsoft",
    //   image: "/images/microsoft.png",
    //   technologies: ["React", "Azure"],
    // },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >

<div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M50,0 L85,20 L85,60 L50,80 L15,60 L15,20 Z" fill="currentColor" fillOpacity="0.05" />
              <circle cx="50" cy="10" r="2" fill="currentColor" />
              <circle cx="85" cy="30" r="2" fill="currentColor" />
              <circle cx="85" cy="70" r="2" fill="currentColor" />
              <circle cx="50" cy="90" r="2" fill="currentColor" />
              <circle cx="15" cy="70" r="2" fill="currentColor" />
              <circle cx="15" cy="30" r="2" fill="currentColor" />
              <circle cx="50" cy="50" r="3" fill="currentColor" fillOpacity="0.3" />
              <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="85" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="85" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="90" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="15" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="15" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Live Projects
        </motion.h2>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      
      <div className="absolute top-0 left-0 w-96 h-96  -mb-32 -mr-32 opacity-20 ">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
          className="rounded-b-full bg-blue-800"
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96  -mb-32 -mr-32 opacity-20 ">
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
