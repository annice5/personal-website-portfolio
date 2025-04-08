import { CircleCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import experienceBg from '../../assets/images/experienceBg.png';
import experienceImage from '../../assets/images/experienceImage.png';

const Experience = () => {
  const [isInView, setIsInView] = useState(false); // Track when the section is in view
  const sectionRef = useRef(null); // Ref for the experience section

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
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: `url(${experienceBg})` }}
    >
      <div className="w-full max-w-6xl mx-auto py-12 mt-24 md:mt-36">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-10">
          {/* Left - Image */}
          <motion.div
            className="w-full md:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={experienceImage}
              alt="Experience"
              className="w-full max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-xl shadow-lg"
            />
            <p className="bg-[#31245C] text-white rounded-lg absolute text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 top-[45%] sm:top-[50%] md:top-56 right-2 sm:right-4 md:right-[86px] w-fit whitespace-nowrap shadow-md">
              1 Year of Experience
            </p>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#713EDA]">Experience</h2>
            <p className="mt-4 text-[#31245C] text-sm sm:text-base leading-relaxed">
              As a Web Developer Talent for UNDP Young Africa Innovates, I had the opportunity to design and develop high-quality landing pages for emerging innovators. My role involved creating visually appealing and functional web solutions to showcase their startup businesses, helping them establish a strong digital presence and attract potential investors and customers.
            </p>

            {/* Experience Highlights */}
            <ul className="mt-8 sm:mt-10 space-y-3 text-[#31245C]">
              <li className="flex items-center gap-2 justify-center md:justify-start text-sm sm:text-base">
                <CircleCheck className="text-[#713EDA]" /> <span>Website Development</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start text-sm sm:text-base">
                <CircleCheck className="text-[#713EDA]" /> <span>Landing Page Design</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
