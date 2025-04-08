import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';
import endBg from '../../assets/images/endBg.png';
import { GithubIcon } from "lucide-react";

const End = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${endBg})` }}
    >
      <div className="px-6 lg:px-10">
        <div className="lg:mr-80 mt-32">
          {/* Fade-in and Slide-up for text */}
          <motion.p
            className="text-sm font-bold text-[#713EDA] text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            className="text-[#2E1A57] text-4xl lg:text-7xl font-semibold mt-4 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            THANK <br /> YOU
          </motion.h1>

          <motion.p
            className="mt-6 text-[#2E1A57] text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Ready to elevate your brand? Let's connect and build something incredible together. <br />
            Reach out now!
          </motion.p>
        </div>

        <div className="flex justify-center space-x-6 mt-28">
          {/* Scale-in and Fade-in for social media icons */}
          <motion.a
            href="https://www.tiktok.com/@_annice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#713EDA] hover:text-purple-800 text-3xl lg:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <FaTiktok />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/__annice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#713EDA] hover:text-purple-800 text-3xl lg:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@_annice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#713EDA] hover:text-purple-800 text-3xl lg:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/agnes.odame.71"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#713EDA] hover:text-purple-800 text-3xl lg:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://github.com/annice5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#713EDA] hover:text-purple-800 text-3xl lg:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          >
            <GithubIcon/>
          </motion.a>
        </div>

        <footer className="text-center text-gray-600 text-sm py-4">
          © {new Date().getFullYear()} Agnes D Odame. All Rights Reserved.
        </footer>
      </div>
    </section>
  );
};

export default End;
