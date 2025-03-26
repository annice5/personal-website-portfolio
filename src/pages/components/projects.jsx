import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import projectsBg from '../../assets/images/projectsBg.png';
import projectImageOne from '../../assets/images/projectImageOne.png';
import projectImageTwo from '../../assets/images/projectImageTwo.jpeg';
import projectImageThree from '../../assets/images/projectImageThree.jpeg';

const Projects = () => {
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
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${projectsBg})` }}
    >
      <div>
        <h2 className="text-center text-[#713EDA] font-bold text-3xl">
          Projects
        </h2>

        <div className="max-w-5xl mx-auto px-4 mt-8">
          <Swiper
            modules={[Navigation, Autoplay]} // Add Autoplay module
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 1000, // Adjust time (in ms) between slides
              disableOnInteraction: true, // Keep autoplay running even after user interaction
            }}
            navigation
            dir="rtl" // Makes it slide to the right
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {works.map((work) => (
             <SwiperSlide key={work.id}>
             <div className="relative bg-white rounded-3xl shadow-lg p-3 pb-24 text-center overflow-visible">
               <img
                 src={work.img}
                 alt={work.title}
                 className="rounded-3xl w-full h-56 object-cover"
               />
               <h3 className="text-sm font-semibold mt-4">{work.title}</h3>
               <p className="text-sm mt-4">{work.description}</p>

                 {/* Button positioned half inside, half outside the card */}
               <a
                 href={work.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="absolute left-1/2 -translate-x-1/2 translate-y-1/2"
               >
                 <button className=" text-[#713EDA] py-2 px-4 rounded-lg shadow-lg mt-2 border-[#713EDA] border-2 bg-transparent">
                   View
                 </button>
               </a>
            </div>
             
           </SwiperSlide>
           
            ))}
          </Swiper>
        </div>
       
         
      </div>
    </section>
  );
};

export default Projects;
