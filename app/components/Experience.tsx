"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Freelance",
      location: "Remote",
      period: "2024 - Present",
      role: "MERN Stack Developer",
      responsibilities: [
        "Designing and developing custom web applications for global clients",
        "Creating responsive, high-performance user interfaces using React.js",
        "Building and securing backend services with Node.js and Express.js",
        "Developing and optimizing RESTful APIs and managing MongoDB databases",
        "Collaborating with clients and teams to deliver scalable and efficient solutions",
      ],
    },
    {
      company: "Freelance",
      location: "Remote",
      period: "2025 - Present",
      role: "Full Stact Developer",
      responsibilities: [
        "Built a comprehensive ERP system using the MERN stack",
        "Designed and developed scalable RESTful APIs for seamless communication",
        "Developed dynamic and responsive user interfaces with React.js and Redux",
        "Integrated secure authentication and authorization mechanisms",
        "Implemented real-time functionality using WebSockets",
      ],
    },
    {
      company: "Freelance",
      location: "Remote",
      period: "2025 - Present",
      role: "Mobile App Developer",
      responsibilities: [
        "Design and Development of Mobile Applications: Android and iOS",
        "Testing and Debugging: Unit Testing, Integration Testing, and Debugging",
        "Deployment: App Store and Play Store",
        "Maintenance: Regular Updates and Bug Fixes",
        "Client Communication: Regular Updates and Feedback",
        "Built backend REST API and OAuth",
        "Integrated third-party APIs",
        
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20  bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
       <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="experience-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Main Triangle */}
              <path d="M50,20 L80,70 L20,70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner Triangle */}
              <path d="M50,40 L65,65 L35,65 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              {/* Connection Points */}
              <circle cx="50" cy="20" r="2" fill="currentColor" />
              <circle cx="80" cy="70" r="2" fill="currentColor" />
              <circle cx="20" cy="70" r="2" fill="currentColor" />
              {/* Center Point */}
              <circle cx="50" cy="50" r="1.5" fill="currentColor" />
              {/* Connecting Lines */}
              <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="20" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="80" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#experience-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className=" w-full  grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-700 rounded-br-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
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
      <div className="absolute top-0 right-0 w-96 h-96  -mb-32 -mr-32 opacity-20 ">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
          className="rounded-b-full bg-blue-800"
        />
      </div>
    
    </section>
  )
}

