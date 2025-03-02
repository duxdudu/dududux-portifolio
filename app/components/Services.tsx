"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Smartphone } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Web Application Development",
      description: "Custom web applications built with React and Next.js, focusing on performance and user experience.",
    },
      {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Mobile Apps Development",
      description: "Custom Mobile apps applications built with React Native / Flutter and Kotlin for Android Swift for Ios, focusing on performance and user experience.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Backend Development",
      description: "Robust and scalable server-side solutions using Node.js, Firebase, Superbase, Express, and Fastify.",
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "API Development",
      description:
        "RESTful and GraphQL API design and implementation for seamless data flow between client and server.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: "Responsive Design",
      description: "Mobile-first, responsive web designs that work flawlessly across all devices and screen sizes.",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
       <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="service-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Main Octagon */}
              <path d="M60,20 L85,30 L95,55 L85,80 L60,90 L35,80 L25,55 L35,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Inner Octagon */}
              <path d="M60,40 L75,45 L80,60 L75,75 L60,80 L45,75 L40,60 L45,45 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              {/* Connection Points */}
              <circle cx="60" cy="20" r="2" fill="currentColor" />
              <circle cx="85" cy="30" r="2" fill="currentColor" />
              <circle cx="95" cy="55" r="2" fill="currentColor" />
              <circle cx="85" cy="80" r="2" fill="currentColor" />
              <circle cx="60" cy="90" r="2" fill="currentColor" />
              <circle cx="35" cy="80" r="2" fill="currentColor" />
              <circle cx="25" cy="55" r="2" fill="currentColor" />
              <circle cx="35" cy="30" r="2" fill="currentColor" />
              {/* Center Circle */}
              <circle cx="60" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              {/* Connecting Lines */}
              <line x1="60" y1="20" x2="60" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="85" y1="30" x2="75" y2="45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="95" y1="55" x2="80" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="85" y1="80" x2="75" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="60" y1="90" x2="60" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="35" y1="80" x2="45" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="25" y1="55" x2="40" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="35" y1="30" x2="45" y2="45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#service-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
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
  )
}

