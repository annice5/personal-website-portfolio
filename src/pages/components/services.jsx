import serviceBg from '../../assets/images/serviceBg.png';
import { useState, useEffect, useRef } from "react";
import { FaCode, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion for smooth animations

const service = [
  { id: 1, title: "Frontend Development", icon: <FaCode size={40} />, active: false },
  { id: 2, title: "Debugging & Troubleshooting", icon: <FaGlobe size={40} />, active: true },
  { id: 3, title: "Dynamic and Interactive Applications", icon: <FaMobileAlt size={40} />, active: false },
];

const Services = () => {
  const [selected, setSelected] = useState(2);
  const [isInView, setIsInView] = useState(false); // Track when section is in view
  const sectionRef = useRef(null); // Ref to track the Services section

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
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <div className="w-full max-w-6xl">
        {/* Title & Description */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start gap-6 text-center lg:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-[#713EDA] flex-1">
            Services
          </h2>
          <p className="text-[#2E1A57] flex-1">
            I create smooth and engaging web experiences by building responsive user interfaces with React, developing the client side with HTML, CSS, and JavaScript, and fixing issues to keep everything running flawlessly.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="bg-[#2E1A57] p-6 mt-10 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.map((service) => (
            <motion.div
              key={service.id}
              className={`flex flex-col items-center w-full p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                selected === service.id ? "bg-purple-500" : "bg-[#2E1A57]"
              }`}
              onClick={() => setSelected(service.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3 * service.id, // Staggered delay for each service card
              }}
            >
              <div className="text-white">{service.icon}</div>
              <motion.p
                className="text-white mt-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {service.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
