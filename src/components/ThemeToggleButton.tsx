"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./ui/button";

export const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const ToggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return (
    <Button variant="ghost" size="icon" onClick={ToggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
