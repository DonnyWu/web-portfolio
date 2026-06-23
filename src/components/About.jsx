import React from "react";
import profile from '../logo/Profile.jpg';


const About = () => {
  // #0a192f
  // #304E62
  // #F76C6C

  return (
      <div
        name="about"
        className="w-full h-screen text-[#D7D7D7]"
        style={{ background: 'linear-gradient(180deg, #102E43 0%, #102E43 10%, #008080 100%)' }}
      >
          <div className="flex flex-col justify-center items-center w-full h-full">
            {/* <img
              src={profile}
              alt="profile"
              className="mx-auto rounded-full object-cover w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 mb-8"
            /> */}
          
  
        
        
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-8xl font-bold">
            <p>
              About <br/> Me
            </p>
          </div>
          <div>
            <p>
             I graduated from the University of Massachusetts, Amherst in 2020. Since then I've been actively pursing full-stack development weather that may be from my job or personal projects, there is always something to learn! Throughout my journey as a software engineer I've been in of all part of the software development lifecycle. Which taught me the invaluable lesson of it takes more than just coding ability to be a great engineer. But also through the use of good design, coding standards, and QA testing. Which are just as imporant for an engineer to understand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
