"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-xl bg-primary/5 hover:bg-primary/10 flex items-center justify-center transition-colors group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 90,
          scale: theme === "dark" ? 0 : 1,
          opacity: theme === "dark" ? 0 : 1,
        }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : -90,
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
      </motion.div>
    </button>
  );
}
