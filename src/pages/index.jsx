import About from "./components/about";
import ContactMe from "./components/contactMe";
import Footer from "./components/footer";
import Hero from "./components/hero";
import HireMe from "./components/hireMe";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Services from "./components/services";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Projects />
      <HireMe />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Landing;
