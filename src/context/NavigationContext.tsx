"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NavigationContextType {
  activeSection: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Map pathname to section
  const getActiveSection = (path: string) => {
    if (path === "/") return "home";
    if (path === "/experience") return "experience";
    if (path === "/work" || path.startsWith("/work")) return "work";
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    if (path.includes("/blog")) return "blog";

    return "home";
  };

  const activeSection = getActiveSection(pathname);

  return (
    <NavigationContext.Provider value={{ activeSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
