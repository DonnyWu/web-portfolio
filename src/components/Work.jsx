import React, { useState } from "react";
import InfoModal from "./Modals/InfoModal";
import interpro2 from '../logo/interpro.png';
import Allscript from '../logo/Allscript-logo.png';
import Mitsubishi from '../logo/mitsubishi.jpg';
import MitsubishiBoard from '../logo/mitsubishi-board.jpeg';
import AllscriptsTeam from '../logo/Allscripts-Platform-team.jpg';
import Serendie from '../logo/serendie-logo.jpg';
import SerendieOffice from '../logo/serendie-office.jpg';

const Work = () => {
    const [openModal0, setOpenModal0] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
  return (
    // #102E43
    // #0a192f
    <div name="work" className="w-full md:h-screen text-gray-300 bg-gradient-to-b from-[#102E43] to-[#24305E]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  text-gray-300">
            Work Experiences
          </p>
          <p></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div
                style={{ backgroundImage: `url(${Serendie})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
                <div>
                    <InfoModal
                        open={openModal3}
                        onClose={() => setOpenModal3(false)}
                        image={SerendieOffice}
                        square
                        frameBg="linear-gradient(180deg, #14352B 0%, #123A46 60%, #102E43 100%)"
                        caption={<>New Team, New Energy<br />- Serendie Innovation Hub, 2026</>}
                        title="Software Development Engineer"
                    >
                      <p>{'•'}Design and ship context-aware agentic workflows over MPro's enterprise architecture, encoding system constraints and domain rules into structured Markdown context for LLM consumption</p>
                      <p>{'•'}Own LLM tooling integration across the team SDLC (Anthropic Claude, GitHub Copilot), building the prompt patterns and repo context layer that the team's development, debugging, and code review workflow now runs on</p>
                      <p>{'•'}Architect FastAPI ingestion and synchronization pipelines across Salesforce and Snowflake, producing the high-integrity, model-consumable warranty and asset-lifecycle datasets that downstream AI services depend on</p>
                      <p>{'•'}Co-own MPro's B2B Distributor Portal in a 2-dev team, delivering nationwide commercial warranty registration to 110,000+ users across 5,500+ distributors on Mitsubishi Electric's HVAC design and engineering platform</p>
                      <p>{'•'}Implement Distributor Portal interfaces in React and Vite using the Serendie Design System, translating Mitsubishi Electric's open-sourced Figma component specs into production UI</p>
                      <p>{'•'}Deploy containerized applications and data infrastructure with Docker across secure AWS environments</p>
                    </InfoModal>
                    <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                        <span className="text-2xl font-bold text-white tracking-wider text-center">
                            Mitsubishi Electric Inc. SERENDIE
                        </span>
                        <div>
                            <button onClick={() => setOpenModal3(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                        </div>
                    </div>
                </div>
            </div>

          <div
                style={{ backgroundImage: `url(${Mitsubishi})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
                <div>
                    <InfoModal
                        open={openModal2}
                        onClose={() => setOpenModal2(false)}
                        image={MitsubishiBoard}
                        caption="A visit to Mitsubishi Electric Headquarters Tokyo 7-11-24"
                        title="Software Development Engineer"
                    >
                      <p>{'•'}Developed core features for the GENESIS64 recipe component, enabling real-time creation and management of industrial manufacturing recipes</p>
                      <p>{'•'}Automated QA workflows by developing end-to-end test suites using Selenium and Appium, significantly reducing manual testing cycles</p>
                      <p>{'•'}Collaborated on Migrating ScheduleWorX module code from C++ to C# , transitioning the architecture from 32-bit to 64-bit to enhance system performance and maintainability</p>
                      <p>{'•'}Managed and configured QA environments, for both manual tests and automated testing, ensuring reliable test execution</p>
                    </InfoModal>
                    <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                        <span className="text-2xl font-bold text-white tracking-wider text-center">
                            Mitsubishi Electric Iconics Digital Solutions
                        </span>
                        <div>
                            <button onClick={() => setOpenModal2(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                        </div>
                    </div>
                </div>
            </div>

            <div
            style={{ backgroundImage: `url(${interpro2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div>
              <InfoModal
                open={openModal1}
                onClose={() => setOpenModal1(false)}
                image={interpro2}
                caption={<>camera shy<br />2023</>}
                title="Software Engineer"
              >
                {/* <p>{'•'} Implemented InterPro Solutions’ flagship application EZMaxMobile based on client’s requirements using <br/>Java, Spring Boot, JSON, Angular, Struts, Typescript, and IBM Maximo custom Business Object APIs.</p>
                <p>{'•'} Used React JS to customize the layout of InterPro Solutions’ EZMaxRequest</p>
                <p>{'•'} Used developer environment to test the UI of EZMaxMobile, confirming it is crossed-referenced with IBM Maximo</p>
                <p>{'•'} Handle incoming tickets pertaining to client’s custom built EZMaxMobile with support team and team architect</p> */}
                <p>{'•'}Developed flagship mobile applications (EZMaxMobile) using Java, Spring Boot, and TypeScript, integrating complex IBM Maximo Business Object APIs to meet custom client requirements</p>
                <p>{'•'}Customized UI/UX layouts for the EZMaxRequest platform using React.js, improving user navigation and interface responsiveness</p>
                <p>{'•'}Validated cross-platform compatibility between mobile interfaces and backend IBM Maximo databases throughrigorous environment testing</p>
                <p>{'•'}Resolved high-priority technical tickets in collaboration with architects and support teams to maintain Client-Specific builds</p>
              </InfoModal>
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                <span className="text-2xl font-bold text-white tracking-wider text-center">
                  InterPro Solutions
                </span>
                <div>
                  <button onClick={() => setOpenModal1(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                </div>
              </div>
            </div>
          </div>

            <div
                style={{ backgroundImage: `url(${Allscript})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
                <div>
                    <InfoModal
                        open={openModal0}
                        onClose={() => setOpenModal0(false)}
                        image={AllscriptsTeam}
                        caption={<>meet the team! <br /> Summer 2019</>}
                        title="Software Engineer Intern"
                    >
                      {/* <p>{'•'} Used C# in Visual Studio and ASP .NET to implement test cases that can be called by Allscripts’ test server</p>
                      <p>{'•'} Used Microsoft Azure web service to automate regression test cases in the business layer of Allscripts’ AccessManager Software</p>
                      <p>{'•'} Created audit test cases that ensures authorization information are crossed checked within Access Manager Database</p>
                      <p>{'•'} Reported bugs found within Access Manager on Team Foundation Server and worked with QAs, Developers, and the Principal Architect to resolve the issue</p>
                      <p>{'•'} Participated in code review with my mentors to ensure test files followed good coding practices</p> */}
                      <p>{'•'}Automated regression testing for the Access Manager business layer using C#, ASP.NET, and Microsoft Azure web services</p>
                      <p>{'•'}Developed audit test cases to verify authorization security protocols within the Access Manager database</p>
                      <p>{'•'}Designed audit test cases to validate and cross-check authorization data within the AccessManager SQL Database,data integrity and security compliance.</p>
                      <p>{'•'}Setup quality assurance testing environment in order to run test case manually within Access Manager</p>
                      <p>{'•'}Identified and documented critical bugs using Team Foundation Server (TFS), collaborating with Developers and the Principal Architect to implement fixes</p>
                    </InfoModal>
                    <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                        <span className="text-2xl font-bold text-white tracking-wider text-center">
                            Allscripts
                        </span>
                        <div>
                            <button onClick={() => setOpenModal0(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
