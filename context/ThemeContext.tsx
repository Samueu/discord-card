"use client";
import { createContext, useState, useContext, ReactNode } from "react";

const ThemeContext = createContext({
  colorClass: "bg-green-500",
  setColor: (color: string) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorClass, setColor] = useState("bg-red-500");

  return (
    <ThemeContext.Provider value={{ colorClass, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
