import { motion } from "framer-motion";
import aboutBg from '../../assets/images/aboutBg.png';
import aboutImage from '../../assets/images/aboutImage.jpeg';
import { MdEmail } from "react-icons/md";
import { Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-cover bg-center "
    style={{ backgroundImage: `url(${aboutBg})` }}>

    {/* Image Section */}
       
    <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-80 h-80 rounded-[50px] p-2 bg-white shadow-lg">
          <img 
            src={aboutImage} 
            alt="Your Name" 
            className="w-full h-full object-cover rounded-[50px]"
          />
        </div>
      </motion.div>
    
    {/* Text Section */}
    <motion.div 
      className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left mr-12 "
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-bold text-[#713EDA]">About Me</p>
      <h2 className="text-white font-bold text-2xl mt-4">Your vision, my expertise—let’s create something amazing!</h2>
      <p className="text-white mt-4 leading-relaxed">
      I specialize in crafting modern, high-quality websites tailored to my clients' needs. By prioritizing both functionality and aesthetics, I ensure every website is user-friendly, fully responsive, and designed to leave a lasting impression
      </p>

       {/* Contact Information */}
       <div className="mt-6 text-white flex items-center gap-10">
          <p className="font-semibold flex items-center gap-2"> <Mail className="text-[#713EDA]"/> agnesodame5@gmail.com</p>
          <p className="font-semibold flex items-center gap-2"> <Phone className="text-[#713EDA]"/> +233 539667698</p>
        </div>
      
    </motion.div>
  </section>
  )
}

export default About