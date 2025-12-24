import ArticleCard from "@/components/Shared/ArticleCard/ArticleCard";
import AnimatedBackground from "@/components/Shared/Background/AnimatedBackground";
import { getAllArticles } from "@/lib/articles";

const BlogPage = () => {
  const articles = getAllArticles();

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative overflow-hidden mt-10">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Blog Header */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-stone-800 mb-4 tracking-tight">
            Creative{" "}
            <span className="font-serif italic text-sage-600">Thoughts</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-sage-400 to-mint-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Exploring the intersection of code, design, and creativity through
            thoughtful writing and shared experiences.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredArticles.length > 0 && (
        <section className="pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-8 text-center">
              Featured{" "}
              <span className="font-serif italic text-sage-600">Articles</span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-8 text-center">
            Latest{" "}
            <span className="font-serif italic text-sage-600">Posts</span>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {regularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
