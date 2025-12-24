import Link from "next/link";

interface NavItemProps {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  href: string;
  isActive: boolean;
}

export const NavItem = ({
  id,
  icon: Icon,
  label,
  href,
  isActive,
}: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`relative group flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-full transition-all duration-300 ${
        isActive
          ? "bg-slate-100 text-sage-700"
          : "text-stone-600 hover:text-sage-600"
      }`}
    >
      <Icon size={14} className="sm:w-4 sm:h-4" />
      <span className="text-xs sm:text-sm font-medium hidden sm:inline">
        {label}
      </span>

      {/* Mobile tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-stone-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 sm:hidden pointer-events-none">
        {label}
      </div>

      {isActive && (
        <div className="absolute inset-0 bg-sage-200/30 rounded-full animate-pulse"></div>
      )}
    </Link>
  );
};
