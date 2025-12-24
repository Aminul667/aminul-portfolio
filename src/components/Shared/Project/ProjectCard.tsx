import ProjectLinks from "@/components/Pages/ProjectLinks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TProject } from "@/constants/project.constant";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2">
        <Card className="p-0 group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
          <div className="relative overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.imageAlt || "Project Image"}
              width={600}
              height={300}
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <Button
                size="sm"
                className="bg-white/90 text-slate-800 hover:bg-white rounded-full shadow-lg"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <div className="space-y-4">
        <h4 className="text-2xl font-serif text-slate-800">
          {project.title}
          <span className="ml-3 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            {project.isOngoing ? "On-going" : ""}
          </span>
        </h4>
        <ProjectLinks
          liveUrl={project.liveLink}
          frontendUrl={project.frontendLink}
          backendUrl={project.backendLink}
          liveText={project.liveText}
          codeText={project.codeText}
        />
        <p className="text-slate-600 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
