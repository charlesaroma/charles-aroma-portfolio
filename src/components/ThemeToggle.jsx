import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  /* State Management */
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* Initialize Theme from LocalStorage */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  /* Toggle Theme Function */
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-[1.25rem] right-4 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer",
        "focus:outline-none hover:bg-primary/10"
      )}
    >
      {/* Theme Icon */}
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-amber-400" />
      ) : (
        <Moon className="h-6 w-6 text-slate-700" />
      )}
    </button>
  );
};
