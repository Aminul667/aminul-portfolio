"use client";

import { skills } from "@/constants/constants";
import { useEffect, useState } from "react";

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-[#EFEAD8] via-[#D0C9C0]/20 to-[#EFEAD8] relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#6D8B74]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D0C9C0]/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#5F7161]/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5F7161] mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-[#5F7161] via-[#6D8B74] to-[#D0C9C0] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-[#5F7161]/70 max-w-3xl mx-auto">
            Crafting digital solutions with cutting-edge technologies
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-[#5F7161] to-[#6D8B74] text-white shadow-lg shadow-[#6D8B74]/25"
                  : "bg-white/80 text-[#5F7161] hover:bg-[#D0C9C0]/30 backdrop-blur-sm border border-[#D0C9C0]/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-[#D0C9C0]/30 hover:border-[#6D8B74]/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#6D8B74]/20">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />

                  {/* Icon and title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#5F7161]">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-[#5F7161]/60">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#5F7161]">
                        {skill.level}%
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#5F7161]/70 text-sm mb-4 group-hover:text-[#5F7161] transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Progress bar */}
                  <div className="relative">
                    <div className="w-full bg-[#D0C9C0]/40 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse" />
                      </div>
                    </div>

                    {/* Skill level indicator */}
                    <div
                      className="absolute -top-1 transform transition-all duration-1000 ease-out"
                      style={{
                        left: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div
                        className={`w-4 h-4 bg-gradient-to-r ${skill.color} rounded-full shadow-lg transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300`}
                      />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6D8B74]/20 to-[#5F7161]/20 rounded-2xl backdrop-blur-sm border border-[#6D8B74]/30 flex items-center justify-center opacity-0 animate-fade-in-up">
                      <div className="text-center text-[#5F7161]">
                        <div className="text-3xl font-bold mb-2">
                          {skill.level}%
                        </div>
                        <div className="text-sm opacity-90">
                          Proficiency Level
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating particles effect */}
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#6D8B74] rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#D0C9C0] rounded-full animate-ping animation-delay-300"></div>
                  <div className="absolute top-1/2 left-1 w-1.5 h-1.5 bg-[#5F7161] rounded-full animate-ping animation-delay-700"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#5F7161] to-[#6D8B74] bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-[#5F7161]/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#6D8B74] to-[#D0C9C0] bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-[#5F7161]/60">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#D0C9C0] to-[#6D8B74] bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-[#5F7161]/60">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#5F7161] to-[#D0C9C0] bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-[#5F7161]/60">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
