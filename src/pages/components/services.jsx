import serviceBg from '../../assets/images/serviceBg.png'
import { useState } from "react";
import { FaCode, FaGlobe, FaMobileAlt, FaComments } from "react-icons/fa";

const service = [
  { id: 1, title: "Frontend Development", icon: <FaCode size={40} />, active: false },
  { id: 2, title: "Debugging & Troubleshooting", icon: <FaGlobe size={40} />, active: true },
  { id: 3, title: "Dynamic and Interactive Applications", icon: <FaMobileAlt size={40} />, active: false },
  
];


  


const Services = () => {
  const [selected, setSelected] = useState(2);
  
  return (
    <section className="h-screen flex items-center justify-center bg-cover bg-center "
        style={{ backgroundImage: `url(${serviceBg})` }}>

      <div>
        
      <div className="flex justify-between items-start gap-3 ">
          <h2 className="text-3xl font-bold text-[#713EDA] flex-1 ml-52 mt-3">
                Services
         </h2>
          <p className="text-[#2E1A57] text-left mt-3 flex-1 mr-52">
               I create smooth and engaging web experiences by building responsive user interfaces with React, developing the client side with HTML, CSS, and JavaScript, and fixing issues to keep everything running flawlessly.
          </p>
       </div>
        

        {/* Right Services Section */}
        <div className="bg-[#2E1A57] p-8 rounded-lg  flex  gap-2  mt-20 max-w-5xl mx-auto md:grid-cols-2 ">
          {service.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col items-center w-full p-8 rounded-lg cursor-pointer transition-all duration-300 ${
                selected === service.id ? "bg-purple-500" : "bg-[#2E1A57]"
              }`}
              onClick={() => setSelected(service.id)}
            >
              <div className="text-white">{service.icon}</div>
              <p className="text-white mt-2 text-sm">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Services