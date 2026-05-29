import React from "react";
import { GrLocation } from "react-icons/gr";
import "../App.css";
import SecurityCard from './SecurityCard';

const Home = () => {
  return (
      // #4484CE
      // #0d2137
      // #12354C
    <div
      name="home"
      className="w-full min-h-screen pt-20"
      style={{ background: 'linear-gradient(180deg, #24305E 0%, #24305E 50%, #102E43 100%)' }}
    >
      <div className="max-w-[1000px] mx-auto px-4 flex items-start md:items-center justify-center py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 w-full">
          <SecurityCard />
          <div className="flex flex-col">
            <div className="Message">
              <ul className="dynamic text-1xl sm:text-7xl">
                <li>
                  <span>Hello World!</span>
                </li>
                <li>
                  <span>हैलो वर्ल्ड!</span>
                </li>
                <li>
                  <span>你好, 世界!</span>
                </li>
                <li>
                  <span>مرحبا بالعالم!</span>
                </li>
              </ul>
            </div>
            {/* text-bg-[#F727AB]
            text-pink-600 */}
            <p className="text-red-300">My name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Donnie Wu
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] py-1">
              A Full Stack Developer
            </h2>

            <p className="text-[#8892b0] py-4 max-w-[700px]">
              People often ask me what my favorite tech stack is, and my answer is usually the one I'm currently working with. I believe a great engineer isn't defined by one set of tools, but by their ability to learn quickly and solve problems. I take joy in picking up new technologies, and I’m eager to find an opportunity where I can apply my skills and keep growing.
              {/* I've often been asked the question of what is my favorite "tech stack"? My answers would always be the tech stack that my current projects uses. Because it is even more important for an engineer to have the capacity to continue learning and apply their problem solving skills to everyday problems. Not just focusing on one "tech stack". <br/>  As an engineer, I am a self-starter and I take joy in learning new things, but most importantly I am a problem solver. Which is why I am excited about opportunities where I can demonstrate my technical skills and continue to grow as an engineer. */}
            </p>
            {/* <p className="text-[#8892b0] py-4 max-w-[700px]">
            As an engineer, I am a self-starter and I take joy in learning new things, but most importantly I am a problem solver. Which is why I am excited about the opportunity to demonstrate my technical skills and continue to grow as an engineer
            </p> */}
            <h3 className="flex py-2 text-[white]">
              <div className="mr-2">
                <GrLocation style={{color: 'red'}} size = {20}/>
              </div>Boston, MA</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
