import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import projectsBg from '../../assets/images/projectsBg.png';
import projectImageOne from '../../assets/images/projectImageOne.png';
import projectImageTwo from '../../assets/images/projectImageTwo.jpeg';
import projectImageThree from '../../assets/images/projectImageThree.jpeg';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [isInView, setIsInView] = useState(false); // Track when section is in view
  const sectionRef = useRef(null); // Ref to track the Projects section

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

  const works = [
    {
      id: 1,
      title: "Ticketty",
      description: "Website to book tickets when traveling by Bus",
      img: projectImageOne,
      link: "https://ticketting.netlify.app",
    },
    {
      id: 2,
      title: "Motorcycle Stand Sensor",
      description: "Landing Page for an Innovator",
      img: projectImageThree,
      link: "https://motorcycle-sensor.netlify.app",
    },
    {
      id: 3,
      title: "Adtech Agro Limited",
      description: "Landing Page for an Innovator",
      img: projectImageTwo,
      link: "https://adtech-agro.netlify.app",
    },
  ];

  return (
    <section
      ref={sectionRef} // Reference to the section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
      style={{ backgroundImage: `url(${projectsBg})` }}
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-[#713EDA] font-bold text-3xl mb-8">
          Projects
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          navigation
          dir="rtl"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <motion.div
                className="relative bg-white rounded-3xl shadow-lg p-3 pb-24 text-center overflow-visible"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={work.img}
                  alt={work.title}
                  className="rounded-3xl w-full h-56 object-cover"
                />
                <h3 className="text-sm font-semibold mt-4">{work.title}</h3>
                <p className="text-sm mt-4">{work.description}</p>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                  <button className="text-[#713EDA] py-2 px-4 rounded-lg shadow-lg mt-2 border-[#713EDA] border-2 bg-transparent">
                    View
                  </button>
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
