import Blog from "../Components/Pages/Blog/Blog";
import { Navigation } from "lucide-react";

const BlogPage = () => {
  return (
    <main className="relative">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-[#EFEAD8] via-[#D0C9C0]/20 to-[#EFEAD8] min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#5F7161] mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-[#5F7161] to-[#6D8B74] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-[#5F7161]/70 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development and design.
            </p>
          </div>
          <Blog />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
