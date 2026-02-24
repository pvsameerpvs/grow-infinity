"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
 const { theme, setTheme, resolvedTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
 setMounted(true);
 }, []);

 if (!mounted) return <div className="w-10 h-10" />;

 const currentTheme = theme === "system" ? resolvedTheme : theme;

 return (
 <button
 onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
 className="relative w-10 h-10 rounded-xl bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors group"
 aria-label="Toggle theme"
 >
 <motion.div
 initial={false}
 animate={{
 rotate: currentTheme === "dark" ? 0 : 90,
 scale: currentTheme === "dark" ? 0 : 1,
 opacity: currentTheme === "dark" ? 0 : 1,
 }}
 className="absolute"
 >
 <Sun className="w-5 h-5 text-foreground/70 group-hover:scale-110 transition-transform" />
 </motion.div>
 <motion.div
 initial={false}
 animate={{
 rotate: currentTheme === "dark" ? 0 : -90,
 scale: currentTheme === "dark" ? 1 : 0,
 opacity: currentTheme === "dark" ? 1 : 0,
 }}
 className="absolute"
 >
 <Moon className="w-5 h-5 text-foreground/70 group-hover:scale-110 transition-transform" />
 </motion.div>
 </button>
 );
}
