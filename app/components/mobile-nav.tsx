"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-16 right-3 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-800/50 z-40 h-[600px]"
              onClick={closeMenu}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 z-50 shadow-xl"
            >
              <div className="flex flex-col gap-4 p-6 pt-20">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                      closeMenu()
                    }}
                    className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {label}
                  </button>
                ))}                
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}