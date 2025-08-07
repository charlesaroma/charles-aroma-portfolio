import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  /* State Management */
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* Initialize theme from localStorage or system preference; sync to system changes
     if the user hasn't explicitly chosen a theme. */
  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    const apply = (dark) => {
      setIsDarkMode(dark);
      root.classList.toggle("dark", dark);
    };

    if (storedTheme === "dark" || storedTheme === "light") {
      apply(storedTheme === "dark");
    } else if (window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      apply(mediaQuery.matches);

      const handleChange = (e) => {
        // Only follow system changes if user hasn't set an explicit theme
        if (!localStorage.getItem("theme")) {
          apply(e.matches);
          window.dispatchEvent(
            new CustomEvent("theme:changed", { detail: { isDark: e.matches } })
          );
        }
      };

      try {
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
      } catch (_err) {
        // Safari compatibility
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, []);

  /* Toggle Theme Function */
  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDarkMode(next);
    // Notify other components (e.g., Navbar) to stay in sync
    window.dispatchEvent(
      new CustomEvent("theme:changed", { detail: { isDark: next } })
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-[1.25rem] right-4 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer",
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
