"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-gray-800/50 rounded-full p-1">
      <motion.button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === "fr"
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            : "text-gray-400 hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        FR
      </motion.button>
      <motion.button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === "en"
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            : "text-gray-400 hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  )
}
