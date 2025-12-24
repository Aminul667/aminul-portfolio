"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { TArticleItem } from "@/types";
import AnimatedBackground from "../Shared/Background/AnimatedBackground";
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Check,
  Copy,
  Heart,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import "highlight.js/styles/a11y-dark.css";

const SingleArticle = ({
  article,
}: {
  article: TArticleItem & { contentHtml: string };
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content");
      if (article) {
        const rect = article.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const articleHeight = article.offsetHeight;
        const scrolled = Math.max(0, windowHeight - rect.top);
        const progress = Math.min(100, (scrolled / articleHeight) * 100);
        setReadingProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article?.title || "";

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    setShareMenuOpen(false);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-stone-800 mb-4">
            Post not found
          </h1>
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
            >
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-sage-100/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-sage-500 to-mint-500 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Floating Action Bar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-sage-200/50 space-y-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLiked
                ? "bg-red-100 text-red-600"
                : "bg-sage-50 text-sage-600 hover:bg-sage-100"
            }`}
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </button>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isBookmarked
                ? "bg-sage-200 text-sage-700"
                : "bg-sage-50 text-sage-600 hover:bg-sage-100"
            }`}
          >
            <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
          </button>

          <div className="relative">
            <button
              onClick={() => setShareMenuOpen(!shareMenuOpen)}
              className="w-10 h-10 rounded-full bg-sage-50 text-sage-600 hover:bg-sage-100 flex items-center justify-center transition-all duration-300"
            >
              <Share2 size={18} />
            </button>

            {shareMenuOpen && (
              <div className="absolute left-14 top-0 bg-white/90 backdrop-blur-md rounded-xl p-2 shadow-lg border border-sage-200/50 space-y-1">
                <button
                  onClick={() => handleShare("twitter")}
                  className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors"
                >
                  <Twitter size={14} />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 flex items-center justify-center transition-colors"
                >
                  <Linkedin size={14} />
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="w-8 h-8 rounded-lg bg-sage-50 text-sage-600 hover:bg-sage-100 flex items-center justify-center transition-colors"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="pt-24 pb-20">
        {/* Header */}
        <header className="px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-8 group"
            >
              <ArrowLeft
                className="mr-2 group-hover:-translate-x-1 transition-transform"
                size={18}
              />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-stone-500 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-sage-200 to-mint-200 rounded-full flex items-center justify-center">
                  <span className="text-sage-700 font-medium text-sm">AC</span>
                </div>
                <span className="font-medium">Md Aminul Islam</span>
              </div>

              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-sage-200/50 text-sage-700 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="px-6 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="px-6">
          <div className="max-w-4xl mx-auto">
            <div
              id="article-content"
              className="prose prose-lg prose-stone max-w-none
                prose-headings:font-light prose-headings:text-stone-800
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-sage-700
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                prose-p:text-stone-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-sage-600 prose-a:no-underline hover:prose-a:text-sage-700
                prose-strong:text-stone-800 prose-strong:font-semibold
                prose-em:text-stone-600 prose-em:italic
                prose-code:bg-sage-50 prose-code:text-sage-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-stone-900 prose-pre:border prose-pre:border-sage-200/20
                prose-blockquote:border-l-4 prose-blockquote:border-sage-300 prose-blockquote:bg-sage-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-ul:space-y-2 prose-ol:space-y-2
                prose-li:text-stone-700"
              dangerouslySetInnerHTML={{
                __html: article.contentHtml,
              }}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default SingleArticle;
