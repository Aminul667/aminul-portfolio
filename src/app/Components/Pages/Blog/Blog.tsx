import { getAllArticles } from "@/lib/articles";
import { ArrowRight, CalendarDays, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  // const otherPosts = blogPosts.filter((post) => !post.featured);

  const articles = getAllArticles();
  const featuredArticle = articles.find((post) => post.featured);
  const otherArticles = articles.filter((post) => !post.featured);

  return (
    <div className="space-y-12">
      {/* Featured Blog Post */}
      {featuredArticle && (
        <Link
          href={`/blog/${featuredArticle.id}`}
          className="block group bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-[#D0C9C0]/40 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5F7161]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#5F7161] to-[#6D8B74] text-white text-sm font-semibold">
                Featured Article
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5F7161] group-hover:text-[#6D8B74] transition-colors duration-300 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-[#5F7161]/80 text-lg leading-relaxed line-clamp-3">
                {/* {featuredArticle.excerpt} */} This is some featured article
              </p>
              <div className="flex items-center text-sm text-[#5F7161]/70">
                <CalendarDays className="w-5 h-5 mr-2" />
                <span>{featuredArticle.date}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {featuredArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-gradient-to-r from-[#D0C9C0]/40 to-[#6D8B74]/30 text-[#5F7161] text-sm rounded-full border border-[#D0C9C0]/40 flex items-center"
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-[#6D8B74] font-semibold group-hover:text-[#5F7161] transition-colors duration-300 mt-6">
                Read More{" "}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Other Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherArticles.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#D0C9C0]/30 flex flex-col"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5F7161]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#5F7161] mb-2 group-hover:text-[#6D8B74] transition-colors duration-200 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[#5F7161]/70 mb-4 text-sm line-clamp-3 flex-grow">
                {/* {post.excerpt} */}
                This is some explanation
              </p>
              <div className="flex items-center text-xs text-[#5F7161]/60 mb-4">
                <CalendarDays className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gradient-to-r from-[#D0C9C0]/30 to-[#6D8B74]/20 text-[#5F7161] text-xs rounded-full border border-[#D0C9C0]/30 flex items-center"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-[#6D8B74] font-semibold group-hover:text-[#5F7161] transition-colors duration-300 mt-4">
                Read Article{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
