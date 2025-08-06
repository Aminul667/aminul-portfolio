import AnimatedBackground from "@/components/Shared/Background/AnimatedBackground";
import photo from "../../../assets/rahat.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative overflow-hidden mt-10">
      {/* Animated Background Elements */}
      <AnimatedBackground />
      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-sage-200 to-mint-200 p-1">
              <img
                src={photo.src}
                alt="Photo of Md Aminul Islam"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              The Artist Behind the Code
            </h1>
          </div>

          <div className="prose prose-lg mx-auto text-stone-700 leading-relaxed mb-8">
            <p className="font-serif italic text-xl mb-6">
              &quot;I believe every line of code tells a story, every function
              serves a purpose, and every interface should feel like a gentle
              conversation between human and machine.&quot;
            </p>
            <p className="mb-6 text-lg">
              With 3+ years of crafting digital experiences, I blend technical
              precision with creative intuition, turning complex problems into
              elegant, user-centered solutions.
            </p>
            <p className="mb-6">
              My journey began with a fascination for both art and technology. I
              discovered that coding wasn&apos;t just about solving problems—it
              was about creating experiences, telling stories, and building
              bridges between human needs and digital possibilities.
            </p>
            <p className="mb-8">
              Today, I specialize in creating web applications that don&apos;t
              just function beautifully, but feel intuitive, accessible, and
              delightful to use. Every project is an opportunity to push the
              boundaries of what&apos;s possible while maintaining the elegance
              and simplicity that great design demands.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-sage-200/30">
              <h3 className="text-xl font-semibold text-sage-700 mb-4">
                Frontend Artistry
              </h3>
              <p className="text-stone-600 mb-4">
                Crafting pixel-perfect interfaces with React, Next.js, and
                modern CSS frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-sage-200/30">
              <h3 className="text-xl font-semibold text-sage-700 mb-4">
                Backend Architecture
              </h3>
              <p className="text-stone-600 mb-4">
                Building scalable, efficient systems that power beautiful
                frontend experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-sage-200/30">
              <h3 className="text-xl font-semibold text-sage-700 mb-4">
                Creative Tools
              </h3>
              <p className="text-stone-600 mb-4">
                Bringing designs to life with animation, visualization, and
                interactive experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3 rounded-full font-medium group bg-transparent cursor-pointer"
          >
            Download Resume
            <ArrowRight size={24}/>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
