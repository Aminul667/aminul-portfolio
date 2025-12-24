import AnimatedBackground from "@/components/Shared/Background/AnimatedBackground";
import ProjectCard from "@/components/Shared/Project/ProjectCard";
import { projects } from "@/constants/project.constant";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative overflow-hidden mt-10">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-stone-800 mb-4 tracking-tight">
            My <span className="font-serif italic text-sage-600">Work</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-sage-400 to-mint-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            A journey through creative development, continuous learning, and
            meaningful contributions to innovative projects.
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-10 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
