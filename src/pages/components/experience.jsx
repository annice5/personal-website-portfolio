import { CircleCheck } from 'lucide-react';
import experienceBg from '../../assets/images/experienceBg.png';
import experienceImage from '../../assets/images/experienceImage.png'

const Experience = () => {
  return (
    <section  className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${experienceBg})` }}>
     <div className="max-w-6xl mx-auto py-12 px-6 mt-36">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={experienceImage} // Replace with your experience image
            alt="Experience"
            className="w-[400px] h-[500px] rounded-xl shadow-lg "
          />
          <p className='bg-[#31245C] text-white rounded-lg absolute p-4 top-56 right-[86px] w-[105px] '>
            1 Year of Experience
          </p>
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#713EDA]"> Experience</h2>
          <p className="mt-4 text-[#31245C]">
          As a Web Developer Talent for UNDP Young Africa Innovates, I had the opportunity to design and develop high-quality landing pages for emerging innovators. My role involved creating visually appealing and functional web solutions to showcase their startup businesses, helping them establish a strong digital presence and attract potential investors and customers.
          </p>

          {/* Experience Highlights */}
          <ul className="mt-10 space-y-3 text-[#31245C]">
            
            <li className="flex items-center gap-2 ">
              <CircleCheck className='text-[#713EDA]'/> <span> Website Development</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className='text-[#713EDA]'/> <span>Landing Page Design</span>
            </li>
          </ul>

         
        </div>
      </div>
    </div>
    
    </section>
  )
}

export default Experience