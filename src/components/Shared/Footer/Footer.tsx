import { Heart } from "lucide-react";
import AnimatedBackground from "../Background/AnimatedBackground";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br from-stone-100 via-sage-50/50 to-mint-50/30 border-t border-black flex items-center justify-center">
      <div>
        <AnimatedBackground />

        <div className=" bg-white/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <h3 className="text-stone-600">
                © {currentYear} Md Aminul Islam
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
