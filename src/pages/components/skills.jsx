import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import skillsBg from '../../assets/images/skillsBg.png';
import skillsImage from '../../assets/images/skillsImage.png';

const Skills = () => {
  const skill = [
    { name: "HTML5", percentage: 85 },
    { name: "CSS3", percentage: 90 },
    { name: "Javascript", percentage: 80 },
    { name: "React", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "GIT", percentage: 80 },
    { name: "GITHUB", percentage: 80 },
  ];

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${skillsBg})` }}
    >
      <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-72 justify-between px-6 lg:px-10 py-16">
        {/* Left Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-[#713EDA] mt-28 text-center lg:text-left">
            Skills
          </h2>
          <div className="w-full lg:w-[250px] space-y-2 gap-4 mt-20 max-w-lg mx-auto lg:mx-0">
            {skill.map((skill, index) => (
              <div key={index}>
                <p className="text-sm font-semibold">{skill.name}</p>
                <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-1">
                  <motion.div
                    className="top-0 left-0 h-2 bg-[#713EDA] rounded-lg transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.percentage}%` : 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm font-semibold text-right">{skill.percentage}%</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0 lg:mr-28"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="border-4 border-[#713EDA] rounded-3xl">
            <img
              src={skillsImage}
              alt="Creative Work"
              className="w-80 h-auto rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
