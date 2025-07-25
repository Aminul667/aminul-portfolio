import { projects } from "@/constants/constants";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5F7161] mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-[#5F7161] to-[#6D8B74] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-[#5F7161]/70 max-w-3xl mx-auto">
            A showcase of my recent projects and creative work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#D0C9C0]/30"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5F7161]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-[#5F7161]" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-[#5F7161]" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#5F7161] mb-2 group-hover:text-[#6D8B74] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-[#5F7161]/70 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-[#D0C9C0]/30 to-[#6D8B74]/20 text-[#5F7161] text-sm rounded-full border border-[#D0C9C0]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#5F7161] to-[#6D8B74] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
