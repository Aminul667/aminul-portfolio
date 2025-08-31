import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePhoto from "../../assets/rahat.jpg";
import AnimatedBackground from "@/components/Shared/Background/AnimatedBackground";
import livanaImage from "../../assets/livana.png";
import appFormImage from "../../assets/app-form.png";
import ProjectLinks from "@/components/Pages/ProjectLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-light text-stone-800 mb-4 tracking-tight">
              <span className="font-serif italic text-sage-600">
                Md Aminul Islam
              </span>
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
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
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

      {/* project section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-sage">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-4">
              Featured{" "}
              <span className="font-serif italic text-sage-600">Artworks</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Each project is a unique blend of technical excellence and
              creative vision, crafted with attention to detail and user
              experience.
            </p>
          </div>

          {/* Asymmetrical Project Grid */}
          <div className="space-y-12">
            {/* Project 1 - Large Left */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <Card className="p-0 group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <Image
                      src={livanaImage}
                      alt="Livana Real Estate project"
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
                  Livana – Smart Property Rental Platform
                  <span className="ml-3 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    On-going
                  </span>
                </h4>
                <ProjectLinks
                  liveUrl="https://livana-client.vercel.app/"
                  frontendUrl="https://github.com/Aminul667/livana-client"
                  backendUrl="https://github.com/Aminul667/livana-server"
                />
                <p className="text-slate-600 leading-relaxed">
                  Livana is a web application that streamlines property rentals.
                  Landlords can list properties with details and photos, while
                  tenants can explore, apply, and complete referencing easily.
                  The platform also features secure payment tracking using
                  stripe.
                </p>
              </div>
            </div>

            {/* Project 2 - Large Right */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="space-y-4 md:order-1">
                <h4 className="text-2xl font-serif text-slate-800">
                  App Form - NPM package for Reusable Form Component
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="gap-1.5 bg-black text-white hover:bg-white hover:text-black"
                  >
                    <a
                      href="https://www.npmjs.com/package/app-form"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      NPM link
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-1.5 bg-transparent hover:bg-white"
                  >
                    <a
                      href="https://github.com/Aminul667/app-form"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
                {/* <ProjectLinks
                  liveUrl="https://livana-client.vercel.app/"
                  frontendUrl="https://github.com/Aminul667/livana-client"
                  backendUrl="https://github.com/Aminul667/livana-server"
                /> */}
                <p className="text-slate-600 leading-relaxed">
                  A reusable form solution for React, built with React Hook
                  Form, Zod, Tailwind CSS, and Shadcn UI. Includes CLI
                  scaffolding for rapid form creation and consistent, validated
                  UI components.
                </p>
              </div>
              <div className="md:col-span-2 md:order-2">
                <Card className="p-0 group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <Image
                      src={appFormImage}
                      alt="Wellness App"
                      width={600}
                      height={300}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            </div>

            {/* Project 3 - Centered */}
            <div className="max-w-4xl mx-auto">
              <Card className="p-0 group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?q=80&w=1302&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Editorial Design"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-sage-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h4 className="text-2xl font-serif text-slate-800 mb-4">
                      Editorial Design Series
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Art direction and layout design for a quarterly lifestyle
                      magazine, balancing typography, imagery, and white space
                      for optimal readability.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                        Editorial
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        Typography
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        Art Direction
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      className="border-sage-300 text-sage-700 hover:bg-sage-50 rounded-full w-fit"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-sage-200 to-mint-200 p-[2px]">
              <Avatar className="w-full h-full">
                <AvatarImage
                  src={profilePhoto.src}
                  alt="Md Aminul Islam"
                  className="object-cover"
                />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
              The Artist Behind the Code
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-stone-700 leading-relaxed">
            <p className="font-serif italic text-xl mb-4">
              &quot;I believe every line of code tells a story, every function
              serves a purpose, and every interface should feel like a gentle
              conversation between human and machine.&quot;
            </p>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3 rounded-full font-medium group cursor-pointer"
          >
            Read My Story
            <div className="ml-2 w-6 h-0.5 bg-sage-400 group-hover:w-8 transition-all duration-300"></div>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-sage">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Let&apos;s Create Something{" "}
            <span className="font-serif italic text-sage-600">Beautiful</span>
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Whether you have a project in mind or just want to chat about the
            intersection of code and creativity, I&apos;d love to hear from you.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, href: "https://github.com/Aminul667", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/md-aminul", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aminulrahat63@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 bg-sage-100 hover:bg-sage-200 rounded-full flex items-center justify-center text-sage-700 hover:text-sage-800 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
}
