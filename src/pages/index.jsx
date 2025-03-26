import About from "./components/about";
import End from "./components/end";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Services from "./components/services";
import Skills from "./components/skills";

const Landing = () => {
  return (
    <div>
      
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience/>
      <Skills/>
       <End/>
    </div>
  );
};

export default Landing;
