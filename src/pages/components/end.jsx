import endBg from '../../assets/images/endBg.png';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube   } from "react-icons/fa";

const End = () => {
  return (
 <section className="h-screen flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${endBg})` }}>
<div>
     <div className='mr-80 mt-32'>
     <p className='text-sm font-bold text-[#713EDA]'>Frontend Developer</p>
      <h1 className='text-[#2E1A57] text-7xl font-semibold mt-4'>THANK <br /> YOU</h1>
      <p className='mt-6  text-[#2E1A57]'> Ready to elevate your brand? Lets connect and build something incredible together. <br/>Reach out now!</p>

     </div>
    <div className="flex justify-center space-x-6 mt-28 ">
      
      <a
        href="https://www.tiktok.com/@yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#713EDA] hover:text-purple-800 text-2xl"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#713EDA] hover:text-purple-800 text-2xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/@yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#713EDA] hover:text-purple-800 text-2xl"
      >
        <FaFacebook/>
      </a>
     
    </div>
    <footer className="text-center text-gray-600 text-sm py-4 ">
      © {new Date().getFullYear()} Agnes D Odame. All Rights Reserved.
    </footer>
   
</div>
    </section>
  )
}

export default End