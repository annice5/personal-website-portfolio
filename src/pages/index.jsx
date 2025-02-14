import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Services from "./components/services";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Resume />
      <Services />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Landing;
