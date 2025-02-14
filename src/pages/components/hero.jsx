import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import About from "./about";
import ContactMe from "./contact";
import Resume from "./resume";
import Projects from "./projects";
import Services from "./services";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      // Update active section
      setActiveSection(currentSection);

      // Show navbar background only when scrolled to "About" section or beyond
      setIsScrolled(currentSection && currentSection !== "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans h-screen bg-gray-50">
      {/* Navbar */}
      <nav
  className={`fixed w-full left-0 top-0 z-50 transition-all duration-300  ${
    isScrolled ? "bg-white shadow-md" : "bg-transparent"
  }`}
  style={{
    height: "4rem", // Adjust to your navbar height
  }}
>
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <div className="text-2xl font-bold text-black flex items-center relative">
      <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center absolute -left-4 z-0">
        A
      </span>
      <span className="relative z-10 ml-3">gnes</span>
    </div>
    <ul className="flex gap-x-8">
      {["Home", "About", "Resume", "Services", "Projects", "Contact"].map(
        (item, index) => {
          const itemId = item.toLowerCase();
          return (
            <li key={index}>
              <a
                href={`#${itemId}`}
                className={`${
                  activeSection === itemId
                    ? "text-blue-600 underline decoration-blue-600 underline-offset-8 font-medium"
                    : "font-thin"
                } transition duration-200`}
              >
                {item}
              </a>
            </li>
          );
        }
      )}
    </ul>
  </div>
</nav>

      {/* Hero Section */}
      <header id="home" className="flex h-screen ">
        <div className="w-1/2 bg-blue-100"></div>
        <div className="w-1/2 bg-white"></div>
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <div className="text-center">
            <p className="text-blue-600 uppercase tracking-widest font-medium">
              Hey! I am
            </p>
            <h1 className="text-5xl font-extrabold mt-4">
              Agnes Dansowaa Odame
            </h1>
            <h2 className="text-2xl mt-4 flex justify-center items-center">
              <span>I'm a&nbsp;</span>
              <span className="text-blue-600 font-bold underline">
                <Typewriter
                  options={{
                    strings: ["Frontend web developer."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <div className="mt-10">
              <a href="#about">
                <div className="animate-bounce text-blue-600 text-2xl">↓</div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Render Sections */}
      <main>
        <About />
        <Resume />
        <Services />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
};

export default Hero;
