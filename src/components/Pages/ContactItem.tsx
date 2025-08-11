interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => {
  const content = (
    <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-sage-200/30 rounded-lg hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-stone-800">{label}</h3>
        <p className="text-stone-600">{value}</p>
      </div>
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
