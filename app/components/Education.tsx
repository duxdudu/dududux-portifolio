"use client"

import { GraduationCap, Calendar, Award, StepForward } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Universty of Rwanda",
      period: "2022 – 2026",
      Status: "Ongoing",
      achievements: [
        "To be Graduate with honors",
        "Will be Specialize in Web Technologies ,Mobile apps Developement with Cyber Skills and Artificial Intelligence",

        "To be Complete capstone project on 'Intelligent Mobile Application for Healthcare'",
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >

<div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="education-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Main Square */}
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner Circle */}
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              {/* Corner Circles */}
              <circle cx="10" cy="10" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="90" cy="10" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="10" cy="90" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="90" cy="90" r="4" fill="currentColor" opacity="0.6" />
              {/* Connecting Lines */}
              <line x1="10" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="90" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="10" y1="90" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="90" y1="90" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              {/* Inner Square */}
              <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" transform="rotate(45 50 50)" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#education-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">  <span className="w-6 h-6 mr-8 text-green-500">   Status:</span>{edu.Status}</p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
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
  )
}

