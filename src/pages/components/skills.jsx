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
  return (
    <section  className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${skillsBg})` }}>

      <div className="relative flex items-center gap-72 justify-between px-10 py-16 ">
      {/* Left Text Section */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-[#713EDA] mt-28">
          Skills
        </h2>
        <div className="w-[250px] space-y-2   gap-4 mt-20  max-w-lg ">
      {skill.map((skill, index) => (
        <div key={index}>
          <p className="text-sm font-semibold">{skill.name}</p>
          <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-1">
            <div
              className="top-0 left-0 h-2 bg-[#713EDA] rounded-lg transition-all duration-500"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
          <p className="text-sm font-semibold text-right">{skill.percentage}%</p>
        </div>
      ))}
    </div>
      </div>

      {/* Right Image Section */}
      <div className=" w-1/2 flex justify-center mt-16 mr-28">
        <div className="border-4 border-[#713EDA] rounded-3xl ">
          <img
            src={skillsImage}
            alt="Creative Work"
            className="w-80 h-auto rounded-3xl"
          />
        </div>
      </div>

    
    </div>
    </section>
  )
}

export default Skills