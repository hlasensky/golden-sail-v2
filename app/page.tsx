import About from "@/components/(sections)/about";
import Contact from "@/components/(sections)/contact";
import Home from "@/components/(sections)/home";
import Projects from "@/components/(sections)/projects";

export default function Index() {
  return <main className="min-h-screen">
    <Home />
    <About />
    <Projects />
    <Contact />
  </main>;
}
