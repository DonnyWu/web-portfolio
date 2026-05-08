import React from "react";
import React_logo from "../logo/react_logo.png";
import Github from "../logo/github_logo.png";
import Dotnet from "../logo/.Net_logo.png"
import Csharp from "../logo/Logo_C_sharp.svg.png"
import Git from "../logo/Git-Icon.png"
import Copilot from "../logo/github-copilot-icon.webp"
import Java from "../logo/Java.webp"
import Springboot from "../logo/Springboot.webp" 
import mongoDb from "../logo/mongodb.png"
import python from "../logo/python.png"
import Claude from "../logo/claudecode.png"
import Docker from "../logo/docker.png"

const Experiences = () => {
  return (
    // #102E43
    // #0a192f
    <div
      name="experiences"
      className="text-gray-300"
      style={{ background: 'linear-gradient(180deg, #008080 0%, #008080 10%, #102E43 100%)' }}
    >
      <div className="max-w-[1000px] mx-auto pt-20 flex flex-col justify-center align-middle w-full h-full">
        <div>
          <p className="text-4xl font-bold inline">
            Technical Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

            {/*<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">*/}
            {/*    <img*/}
            {/*        className="w-20 mx-auto"*/}
            {/*        src={Dotnet}*/}
            {/*        alt="Dotnet icon"*/}
            {/*    />*/}
            {/*    <p>.NET</p>*/}
            {/*</div>*/}

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto"
                        src={Claude}
                        alt="Claude Code icon" />
                <p>Claude Code</p>
            </div>
            
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto"
                        src={Copilot}
                        alt="Copilot icon" />
                <p>Github Copilot</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Github}
                    alt="Github"
                />
                <p>Github</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Git}
                    alt="Git"
                />
                <p>Git</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={python}
                    alt="Python icon"
                />
                <p>Python</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Dotnet}
                    alt="Dotnet icon"
                />
                <p>.NET</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Csharp}
                    alt="Csharp icon"
                />
                <p>C#</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto"
                          src={Docker}
                          alt="Docker icon"
                />
                <p>Docker</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" 
                  src={React_logo}
                  alt="React icon"
                />
              <p>React</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto"
                          src={Java}
                          alt="Java icon"
                />
                <p>Java</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Springboot}
                    alt="Springboot icon"
                />
                <p>Springboot</p>
            </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" 
                 src={mongoDb}
                 alt="MongoDB icon"
               />
            <p>MongoDB</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experiences;