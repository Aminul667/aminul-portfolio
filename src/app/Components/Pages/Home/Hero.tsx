"use client";

import profileImage from "../../../../assets/rahat.jpg";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const codeLines = [
  "const developer = {",
  "    name: 'Md Aminul Islam',",
  "    skills: ['TypeScript', 'Next.js', 'PostgreSQL', 'MongoDB'],",
  "    passion: 'Building amazing experiences',",
  "    status: 'Always learning'",
  "};",
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedCode((prev) => {
            const newCode = [...prev];
            if (newCode[currentLineIndex]) {
              newCode[currentLineIndex] = currentLine.slice(
                0,
                currentCharIndex + 1
              );
            } else {
              newCode[currentLineIndex] = currentLine.slice(
                0,
                currentCharIndex + 1
              );
            }
            return newCode;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, 50);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 500);

        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIndex, currentCharIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#5F7161] to-slate-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-[#6D8B74]/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-[#D0C9C0]/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white">Hello,</span>
                  <span className="block bg-gradient-to-r from-[#D0C9C0] via-[#6D8B74] to-[#5F7161] bg-clip-text text-transparent">
                    Welcome here
                  </span>
                </h1>
              </div>

              {/* Animated Code Display */}
              <div className="hidden sm:block animate-fade-in-up animation-delay-200">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-[#6D8B74]/30 font-mono text-sm max-w-2xl">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-[#6D8B74] rounded-full"></div>
                    </div>
                    <span className="ml-4 text-gray-400">developer.js</span>
                  </div>
                  <div className="space-y-1">
                    {displayedCode.map((line, index) => (
                      <div key={index} className="flex">
                        <span className="text-gray-500 mr-4 select-none">
                          {index + 1}
                        </span>
                        <span className="text-gray-300">
                          {line}
                          {index === currentLineIndex &&
                            currentCharIndex <
                              codeLines[currentLineIndex]?.length && (
                              <span className="animate-pulse bg-[#6D8B74] w-2 h-5 inline-block ml-1"></span>
                            )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-[#5F7161] to-[#6D8B74] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-full font-semibold hover:border-[#6D8B74] hover:text-[#6D8B74] transition-all duration-300">
                  Download CV
                </button>
              </div>

              <div className="animate-fade-in-up animation-delay-800 flex gap-6 justify-center lg:justify-start">
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group border border-gray-700"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-[#6D8B74]" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group border border-gray-700"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-[#6D8B74]" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group border border-gray-700"
                >
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-[#6D8B74]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5F7161] to-[#6D8B74] rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden border-2 border-gray-700">
                  <Image
                    src={profileImage}
                    alt="Md Aminul Islam"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#6D8B74] to-[#D0C9C0] rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#5F7161] to-[#6D8B74] rounded-full animate-bounce animation-delay-1500"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 text-gray-400 hover:text-[#6D8B74] transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
