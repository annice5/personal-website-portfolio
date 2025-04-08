import heroImage from '../../assets/images/heroImage.png';
import heroImageTwo from '../../assets/images/heroImageTwo.png'
import { useState, useEffect } from 'react';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const roles = [" A Frontend Developer"];
  const roleSpeed = 150;
  const cursor = "|";

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const interval = setInterval(() => {
      setRoleText(roles[roleIndex].slice(0, charIndex) + cursor);

      if (!deleting) {
        charIndex++;
        if (charIndex > roles[roleIndex].length) {
          deleting = true;
          setTimeout(() => {}, 1000);
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
    }, roleSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="top-0 left-0 w-full bg-transparent p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side - Portfolio */}
          <div className="text-xl font-bold text-[#31245C]">Portfolio</div>
          {/* Right Side - Resume */}
          <div>
            <a href="#resume" className="text-lg text-[#31245C] font-medium hover:text-[#713EDA] transition">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side - Text */}
          <div className="md:w-1/2 w-full text-center md:text-left md:ml-20">
            <p className="font-bold mb-4 text-[#713EDA]">Hello, I Am</p>
            <h1 className="text-4xl md:text-5xl mb-6 text-[#31245C]">Agnes Dansowaa Odame</h1>
            <h2 className="text-xl md:text-2xl">
              <span className="underline text-[#31245C]">{roleText}</span>
            </h2>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 w-full flex justify-center md:mr-10">
            <img src={heroImageTwo} alt="Hero" className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
