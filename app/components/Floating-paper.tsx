"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import Image from "next/image"

export function   FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Update dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-gradient-to-br from-white/80 via-blue-50/50 to-indigo-100/30 dark:from-gray-400 dark:via-indigo-600 dark:to-purple-600 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 shadow-lg dark:shadow-indigo-500/20 flex items-center justify-center transform hover:scale-110 transition-all duration-300 group">
            {/* <FileText className="w-8 h-8 text-blue-500/70 dark:text-purple-400/50 group-hover:text-blue-600 dark:group-hover:text-purple-300 transition-colors duration-300" /> */}
            <Image src="/logo.png" alt="Paper" width={100} height={100}  className="w-14 h-14 text-blue-500/70 dark:text-purple-400/50 group-hover:text-blue-600 dark:group-hover:text-purple-300 transition-colors duration-300"/>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

