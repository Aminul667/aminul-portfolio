import { Code2, Database, Palette, Server, Wrench, Zap } from "lucide-react";

export const skills = [
  {
    name: "React",
    level: 95,
    category: "Frontend",
    icon: Code2,
    description: "Building dynamic user interfaces",
    color: "from-[#5F7161] to-[#6D8B74]",
  },
  {
    name: "Next.js",
    level: 90,
    category: "Frontend",
    icon: Zap,
    description: "Full-stack React framework",
    color: "from-[#6D8B74] to-[#D0C9C0]",
  },
  {
    name: "TypeScript",
    level: 88,
    category: "Frontend",
    icon: Code2,
    description: "Type-safe JavaScript development",
    color: "from-[#5F7161] to-[#D0C9C0]",
  },
  {
    name: "Node.js",
    level: 85,
    category: "Backend",
    icon: Server,
    description: "Server-side JavaScript runtime",
    color: "from-[#6D8B74] to-[#5F7161]",
  },
  {
    name: "PostgreSQL",
    level: 82,
    category: "Backend",
    icon: Database,
    description: "Advanced relational database",
    color: "from-[#D0C9C0] to-[#6D8B74]",
  },
  {
    name: "MongoDB",
    level: 78,
    category: "Backend",
    icon: Database,
    description: "NoSQL document database",
    color: "from-[#5F7161] to-[#6D8B74]",
  },
  {
    name: "Tailwind CSS",
    level: 92,
    category: "Frontend",
    icon: Palette,
    description: "Utility-first CSS framework",
    color: "from-[#6D8B74] to-[#D0C9C0]",
  },
  {
    name: "Docker",
    level: 75,
    category: "Tools",
    icon: Wrench,
    description: "Containerization platform",
    color: "from-[#5F7161] to-[#D0C9C0]",
  },
  {
    name: "AWS",
    level: 70,
    category: "Tools",
    icon: Server,
    description: "Cloud computing services",
    color: "from-[#6D8B74] to-[#5F7161]",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive portfolio website with smooth animations and modern design",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Weather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Full-stack social media application with real-time messaging",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "Data visualization dashboard for business analytics",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Frontend Development with React 19",
    excerpt:
      "Exploring the new features and improvements coming in React 19, including Server Components and Actions. This is a longer excerpt to demonstrate the layout.",
    image: "/placeholder.svg?height=400&width=800&text=Featured Blog Post",
    date: "July 10, 2024",
    tags: ["React", "Frontend", "Next.js", "Featured"],
    featured: true,
    link: "#",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Rapid UI Development",
    excerpt:
      "A deep dive into Tailwind CSS best practices for building beautiful and responsive user interfaces quickly.",
    image: "/placeholder.svg?height=250&width=400&text=Tailwind CSS",
    date: "June 25, 2024",
    tags: ["Tailwind CSS", "CSS", "UI/UX"],
    link: "#",
  },
  {
    id: 3,
    title: "Demystifying Serverless Functions with Next.js API Routes",
    excerpt:
      "Understanding how to leverage Next.js API routes to create powerful serverless functions for your applications.",
    image: "/placeholder.svg?height=250&width=400&text=Serverless Functions",
    date: "June 15, 2024",
    tags: ["Next.js", "Serverless", "Backend"],
    link: "#",
  },
  {
    id: 4,
    title: "Optimizing Web Performance: A Comprehensive Guide",
    excerpt:
      "Tips and tricks to significantly improve your website's loading speed and overall performance.",
    image: "/placeholder.svg?height=250&width=400&text=Web Performance",
    date: "May 30, 2024",
    tags: ["Performance", "Web Dev", "Optimization"],
    link: "#",
  },
  {
    id: 5,
    title: "Building Accessible Web Applications: Best Practices",
    excerpt:
      "Learn how to create inclusive web experiences for all users by following accessibility guidelines.",
    image: "/placeholder.svg?height=250&width=400&text=Accessibility",
    date: "May 10, 2024",
    tags: ["Accessibility", "UI/UX", "Web Standards"],
    link: "#",
  },
  {
    id: 6,
    title: "State Management in React: Choosing the Right Solution",
    excerpt:
      "A comparison of popular state management libraries and patterns in React, from Context API to Zustand.",
    image: "/placeholder.svg?height=250&width=400&text=State Management",
    date: "April 20, 2024",
    tags: ["React", "State Management", "JavaScript"],
    link: "#",
  },
  {
    id: 7,
    title: "Exploring Modern CSS Techniques",
    excerpt:
      "Dive into the latest CSS features like container queries, subgrid, and more for responsive design.",
    image: "/placeholder.svg?height=250&width=400&text=Modern CSS",
    date: "March 15, 2024",
    tags: ["CSS", "Frontend", "Design"],
    link: "#",
  },
  {
    id: 8,
    title: "The Power of WebAssembly in Web Development",
    excerpt:
      "Understand how WebAssembly is revolutionizing web performance and enabling new possibilities.",
    image: "/placeholder.svg?height=250&width=400&text=WebAssembly",
    date: "February 28, 2024",
    tags: ["WebAssembly", "Performance", "Advanced"],
    link: "#",
  },
];
