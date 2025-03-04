"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Globe, Workflow } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import Image from "next/image"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    tech: "React.js, Next.js,React Native ,Flutter",
    description:
      "Developing dynamic and user-friendly interfaces using React and Next.js, ensuring high performance and seamless user experiences.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Backend Development",
    tech: "Node.js, Express, Fastify, postman",
    description: "Building high-performance backend systems with a focus on scalability, maintainability, and best practices",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Database Management",
    tech: "MongoDB, Mongoose,posgreSQL, Firebase",
    description: "Developing and optimizing database architectures to ensure seamless data storage, retrieval, and performance",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "UI/UX Design",
    tech: "Tailwind CSS, Material,Shadcn",
    description: "Designing visually appealing and user-friendly interfaces using cutting-edge frameworks and best design practices.",
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git, GitHub",
    description: "Utilizing Git for version control and leveraging GitHub for seamless collaboration and code management",
    color: "text-orange-500",
  },


  {
    icon: Cpu,
    name: "API Development",
    tech: "REST, GraphQL",
    description: "Designing and implementing efficient APIs for seamless data communication.",
    color: "text-red-500",
  },
  {
    icon: Globe,
    name: "Web Performance",
    tech: "Optimization, SEO",
    description: "Optimizing web applications for speed, accessibility, and search engine visibility.",
    color: "text-teal-500",
  },
  {
    icon: Workflow,
    name: "Agile Methodologies",
    tech: "Scrum, Kanban",
    description: "Working efficiently in agile environments with focus on continuous delivery.",
    color: "text-cyan-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Main Square */}
              <rect x="5" y="5" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Diagonal Lines */}
              <line x1="5" y1="5" x2="75" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="75" y1="5" x2="5" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              {/* Center Circle */}
              <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Corner Circles */}
              <circle cx="5" cy="5" r="3" fill="currentColor" opacity="0.7" />
              <circle cx="75" cy="5" r="3" fill="currentColor" opacity="0.7" />
              <circle cx="5" cy="75" r="3" fill="currentColor" opacity="0.7" />
              <circle cx="75" cy="75" r="3" fill="currentColor" opacity="0.7" />
              {/* Inner Square */}
              <rect x="25" y="25" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
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

