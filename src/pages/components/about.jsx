import { motion } from "framer-motion";
import aboutBg from '../../assets/images/aboutBg.png';
import aboutImage from '../../assets/images/aboutImage.jpeg';
import { Mail, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [isInView, setIsInView] = useState(false); // Track when section is in view
  const sectionRef = useRef(null); // Ref to track the About section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state when section is in view
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef} // Reference to the section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center px-4 py-10 text-center md:text-left"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[40px] p-2 bg-white shadow-lg">
          <img
            src={aboutImage}
            alt="Your Name"
            className="w-full h-full object-cover rounded-[40px]"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 md:pl-12 text-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-lg font-bold text-[#713EDA]">About Me</p>
        <h2 className="font-bold text-2xl mt-4">Your vision, my expertise—let’s create something amazing!</h2>
        <p className="mt-4 leading-relaxed">
          I specialize in crafting modern, high-quality websites tailored to my clients' needs. By prioritizing both functionality and aesthetics, I ensure every website is user-friendly, fully responsive, and designed to leave a lasting impression.
        </p>

        {/* Contact Information */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-10">
          <p className="font-semibold flex items-center gap-2">
            <Mail className="text-[#713EDA]" /> agnesodame5@gmail.com
          </p>
          <p className="font-semibold flex items-center gap-2">
            <Phone className="text-[#713EDA]" /> +233 539667698
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
