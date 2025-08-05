/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { Code, Palette, User, Mail, PenTool } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const { activeSection } = useNavigation();

  const navItems = [
    { id: "home", icon: Code, label: "Home", href: "/" },
    { id: "work", icon: Palette, label: "Work", href: "/work" },
    { id: "about", icon: User, label: "About", href: "/about" },
    { id: "contact", icon: Mail, label: "Contact", href: "/contact" },
    { id: "blog", icon: PenTool, label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg border border-sage-200/50">
      <div className="flex items-center space-x-2 sm:space-x-8">
        {navItems.map(({ id, icon: Icon, label, href }) => (
          <NavItem
            key={id}
            id={id}
            icon={Icon}
            label={label}
            href={href}
            isActive={activeSection === id}
          />
        ))}
      </div>
    </nav>
  );
};
