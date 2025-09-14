import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 rounded-full p-1 flex items-center justify-between
                 bg-gray-200 dark:bg-gray-700 transition-colors shadow-sm"
    >
      {/* static icons at ends */}
      <Sun size={14} className="ml-1 text-yellow-500" />
      <Moon size={14} className="mr-1 text-sky-300" />

      {/* moving knob */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md
                   flex items-center justify-center"
        animate={{ x: isDark ? 32 : 0 }}      /* 32px is tuned for w-16 with p-1 */
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.12 }}
        >
          {isDark ? <Moon size={14} /> : <Sun size={14} />}
        </motion.div>
      </motion.div>
    </button>
  );
}
