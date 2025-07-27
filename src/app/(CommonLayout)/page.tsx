import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-mint-200/20 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-eucalyptus-200/15 rounded-full blur-2xl animate-float-slow"></div>

        {/* Generative Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-sage-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-light text-stone-800 mb-4 tracking-tight">
              Alex <span className="font-serif italic text-sage-600">Chen</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-sage-400 to-mint-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
              I write code like a canvas — clean, purposeful, and expressive.
            </p>
          </div>

          {/* Artistic Quote */}
          <div className="relative mb-12 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-sage-200/30 shadow-xl">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-sage-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-mint-300 rounded-full opacity-40"></div>
            <blockquote className="text-lg md:text-xl text-stone-700 font-serif italic leading-relaxed">
              &quot;Coding is an art of logic painted with creativity&quot;
            </blockquote>
          </div>

          <Link href="/work">
            <Button
              size="lg"
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore My Work
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </Link>
        </div>

        {/* Live Code Art */}
        <div className="absolute bottom-10 right-10 bg-stone-900 rounded-lg p-4 shadow-2xl border border-sage-200/20 hidden lg:block">
          <div className="text-green-400 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-1">
              <div className="animate-typing">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">art</span> ={" "}
                <span className="text-yellow-400">creativity</span>
              </div>
              <div className="animate-typing-delayed">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">code</span> ={" "}
                <span className="text-yellow-400">logic</span>
              </div>
              <div className="animate-typing-delayed-2">
                <span className="text-green-400">return</span> art + code
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
