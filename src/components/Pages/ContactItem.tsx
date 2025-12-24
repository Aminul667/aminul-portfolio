import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation(); // stop <a> click
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const content = (
    <div className="relative flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-sage-200/30 rounded-lg hover:shadow-md transition-all duration-300">
      {/* Icon */}
      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
        {icon}
      </div>

      {/* Label + Value */}
      <div>
        <h3 className="font-medium text-stone-800">{label}</h3>
        <p className="text-stone-600">{value}</p>
      </div>

      {/* Copy button in top-right */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 text-sage-600 hover:text-sage-900 transition"
        title="Copy"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block hover:scale-105 transition-transform duration-300"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactItem;
