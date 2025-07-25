import About from "./Components/Pages/Home/About";
import Contact from "./Components/Pages/Home/Contact";
import Hero from "./Components/Pages/Home/Hero";
import Projects from "./Components/Pages/Home/Projects";
import Skills from "./Components/Pages/Home/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
