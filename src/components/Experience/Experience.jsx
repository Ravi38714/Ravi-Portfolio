import React from "react";
// import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        {/* Message instead of actual experience */}
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’m currently looking for my first professional experience and excited to apply my skills in a real-world environment.
        </p>
      </div>

      {/* 
      Timeline and experience cards are currently commented out 
      since there's no experience to display yet.
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative z-10 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 mt-20 sm:mt-0 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
              }`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      */}
    </section>
  );
};

export default Experience;






//---OLD---//

// import React from "react";
// import { experiences } from "../../constants";

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 relative z-10 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Box */}
//             <div
//               className={`w-full sm:max-w-md p-6 sm:p-8 mt-20 sm:mt-0 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
//                 index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
//               }`}
//             >
//               <div className="flex items-center space-x-6">
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                     {experience.role}
//                   </h3>
//                   <h4 className="text-md sm:text-sm text-gray-300">
//                     {experience.company}
//                   </h4>
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>

//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;
