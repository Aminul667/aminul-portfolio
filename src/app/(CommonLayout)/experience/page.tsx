"use client";

import ExperienceCard from "@/components/Pages/ExperienceCard";
import AnimatedBackground from "@/components/Shared/Background/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  categories,
  experiences,
  skills,
} from "@/constants/experience.constante";
import { useState } from "react";

const ExperiencePage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.type === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative overflow-hidden mt-10">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-stone-800 mb-4 tracking-tight">
            Professional{" "}
            <span className="font-serif italic text-sage-600">Experience</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-sage-400 to-mint-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            A journey through creative development, continuous learning, and
            meaningful contributions to innovative projects.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ key, label }) => (
              <Button
                key={key}
                variant={activeFilter === key ? "default" : "outline"}
                onClick={() => setActiveFilter(key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === key
                    ? "bg-sage-600 hover:bg-sage-700 text-white shadow-lg"
                    : "border-sage-300 text-sage-700 hover:bg-sage-50 hover:border-sage-400 bg-white/60 backdrop-blur-sm"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-sage-50/80 to-mint-50/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Skills &{" "}
              <span className="font-serif italic text-sage-600">
                Technologies
              </span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Tools and technologies I use to bring creative ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={skillGroup.category}
                className="p-6 bg-white/70 backdrop-blur-sm border-sage-200/30 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-sage-700 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium hover:bg-sage-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
