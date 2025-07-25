import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5F7161] mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#5F7161] to-[#6D8B74] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-[#5F7161]/70 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-[#5F7161]/80 leading-relaxed">
              With over 5 years of experience in web development and design,
              I&apos;ve had the privilege of working with startups and
              established companies to bring their digital visions to life.
            </p>
            <p className="text-lg text-[#5F7161]/80 leading-relaxed">
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project not only looks great
              but also delivers exceptional user experiences.
            </p>
            <p className="text-lg text-[#5F7161]/80 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new design
              trends, contributing to open-source projects, or sharing knowledge
              with the developer community.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="p-6 bg-gradient-to-r from-[#EFEAD8] to-[#D0C9C0]/30 rounded-2xl border border-[#D0C9C0]/30">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#5F7161] to-[#6D8B74] rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#5F7161] ml-4">
                  Development
                </h3>
              </div>
              <p className="text-[#5F7161]/70">
                Full-stack development with modern technologies like React,
                Next.js, and Node.js
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-[#D0C9C0]/30 to-[#6D8B74]/20 rounded-2xl border border-[#6D8B74]/30">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#6D8B74] to-[#D0C9C0] rounded-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#5F7161] ml-4">
                  Design
                </h3>
              </div>
              <p className="text-[#5F7161]/70">
                UI/UX design focused on creating intuitive and visually
                appealing interfaces
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-[#6D8B74]/20 to-[#5F7161]/20 rounded-2xl border border-[#5F7161]/30">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#5F7161] to-[#6D8B74] rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#5F7161] ml-4">
                  Performance
                </h3>
              </div>
              <p className="text-[#5F7161]/70">
                Optimization and performance tuning to ensure fast, responsive
                applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
