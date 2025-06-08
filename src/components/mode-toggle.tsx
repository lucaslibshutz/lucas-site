"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className={`
        w-10 h-10 
        flex items-center justify-center
        rounded-full bg-white/30 dark:bg-black/30
        backdrop-blur-md shawdow-md
        border border-white/20 dark:border-black/20
        transition hover:bg-white/40 dark:hover:bg-black/40
      `}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-sky-600" />
      )}
    </button>
  );
}
