"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import { Code, Database, Server, Zap, Cloud, Shield } from "lucide-react";
import Image from "next/image";

export default function About() {
  const testimonials = [
    {
      quote:
        "Your creativity and problem-solving skills have made our project a success. Congratulations on delivering such a fantastic product!",
      name: "Kunda Pouline",
      designation: "Product Manager at NB Dukunda",
      src: "/popo.jpg",
    },
    {
      quote:
        "Congratulations on this incredible work! I’m excited to collaborate with you on future projects as well.",
      name: "Sano Beni",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "You delivered on time and exceeded expectations. Congrats on such a smooth and successful project!",
      name: "Gisele",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Congratulations on an amazing job! The app is working perfectly, and I appreciate your dedication and expertise",
      name: "bkz Clement",
      designation: "CEO AT KATISHA",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me & Clients
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 border-4 rounded-3xl border-blue-500  p-8 shadow-lg dark:border-blue-700 dark:shadow-blue-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="text-4xl font-bold mb-4 text-center dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {" "}
              About me{" "}
            </motion.h3>
            <motion.div
              className=" flex "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                🔹<span className="font-bold text-xl">Full-Stack Development:</span> Expert
                in MERN stack (MongoDB, Express.js, React, Node.js) for building
                dynamic and scalable web applications. <br></br>
                🔹<span className="font-bold text-xl">Mobile App Development:</span>  Proficient in React Native for
                cross-platform mobile applications and exploring Flutter for
                more versatility. <br></br>
                🔹<span className="font-bold text-xl">Modern Web Technologies:</span> Strong knowledge of Next.js for
                server-side rendering (SSR) and improved SEO.
              </p>
            </motion.div>
            <motion.div
              className=" flex "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-bold text-xl">improved SEO.</span> <br></br>
                🔹<span className="font-bold text-xl">UI/UX Optimization:</span> Focus on creating
                responsive, fast, and user-friendly interfaces. <br></br>
                🔹<span className="font-bold text-xl">APIDevelopment & Integration:</span>  Experience in building and
                integrating RESTful & GraphQL APIs.<br></br>
                🔹<span className="font-bold text-xl">Database Management:</span> 
                Skilled in MongoDB, Firebase, and PostgreSQL for efficient data
                handling. <br></br>
                
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <Image src="/logo.png" alt="logo for about me" width={256} height={256} /> */}
            <motion.h3
              className="text-3xl font-bold text-center dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {" "}
              What Client Says
            </motion.h3>
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
             <AnimatedTestimonials
              testimonials={testimonials.filter(
                (
                  t
                ): t is {
                  quote: string;
                  name: string;
                  designation: string;
                  src: string;
                } => "name" in t
              )}
            /> 
            </motion.div>
            
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Main Diamond */}
              <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner Diamond */}
              <path d="M50,30 L70,50 L50,70 L30,50 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              {/* Connection Points */}
              <circle cx="50" cy="10" r="2" fill="currentColor" />
              <circle cx="90" cy="50" r="2" fill="currentColor" />
              <circle cx="50" cy="90" r="2" fill="currentColor" />
              <circle cx="10" cy="50" r="2" fill="currentColor" />
              {/* Center Circle */}
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              {/* Connecting Lines */}
              <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="90" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="50" y1="90" x2="50" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="10" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#about-pattern)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96  -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
          className="rounded-t-full"
        />
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
      
    </section>
  );
}
