import React from 'react';
import about from '../../assets/images/about.jpg';

const About = () => {
  return (
    <section id="about" className="h-screen bg-white ">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto overflow-hidden h-full">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full h-full">
          <img
            src={about} // Replace with actual image
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Right Info Section */}
        <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 flex flex-col justify-center h-full p-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-gray-500 mb-8 mt-6">
          I am a creative problem-solver who turns ideas into stunning digital experiences.
          With every line of code, I bring visions to life and make the web a better place.
          </p>
          
          <div className="text-gray-700 space-y-3">
             <p><span className="font-bold inline-block w-32 text-gray-900">Name:</span> Agnes Dansowaa Odame</p>
             <p><span className="font-bold inline-block w-32 text-gray-900">Date of birth:</span> June 01, 1998</p>
             <p><span className="font-bold inline-block w-32 text-gray-900">Address:</span> Greater Accra, Tema</p>
             <p><span className="font-bold inline-block w-32 text-gray-900">Email:</span> agnesodame5@gmail.com</p>
             <p><span className="font-bold inline-block w-32 text-gray-900">Phone:</span> 0539667698</p>
          </div>

          
          <p className="mt-12 text-lg font-semibold text-gray-900">
            <span className="text-blue-600 font-bold">120</span> Project complete
          </p>
          <button className=' bg-blue-600 text-white rounded-full h-12 w-40 font-thin mt-11 '>
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
