"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const isHome = pathname === "/";

  const navItems = [
    { id: "home", label: "Home", type: "section" },
    { id: "about", label: "About", type: "section" },
    { id: "skills", label: "Skills", type: "section" },
    { id: "portfolio", label: "Portfolio", type: "section" },
    { id: "contact", label: "Contact", type: "section" },
    { id: "blog", label: "Blog", type: "route", href: "/blog" },
  ];

  useEffect(() => {
    if (!isHome) {
      setActiveSection("blog");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        if (item.type !== "section") continue;
        const el = document.getElementById(item.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const getLinkClass = (id: string, isRoute: boolean) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      activeSection === id || (isRoute && pathname === id)
        ? "bg-gradient-to-r from-[#5F7161] to-[#6D8B74] text-white"
        : "text-[#5F7161] hover:text-[#6D8B74]"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EFEAD8]/90 backdrop-blur-md border-b border-[#D0C9C0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#5F7161] to-[#6D8B74] bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.id}
                    href={item.href!}
                    className={getLinkClass(item.id, true)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.id}
                    href={`/#${item.id}`}
                    className={getLinkClass(item.id, false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#5F7161] hover:text-[#6D8B74]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#EFEAD8]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.id}
                  href={item.href!}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-[#5F7161] hover:text-[#6D8B74]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-[#5F7161] hover:text-[#6D8B74]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
