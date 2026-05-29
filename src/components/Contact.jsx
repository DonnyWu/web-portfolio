import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    // #24305E
    // #0E2839


    <div name="contact" className="w-full min-h-screen pt-20 bg-gradient-to-b from-[#24305E] to-[#374785] text-gray-300">
      <div className="flex flex-col justify-start items-center w-full">
      <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-1xl font-bold">

            <form
              method="POST"
              action="https://getform.io/f/de14136d-d629-4182-8bb6-77ee22b9af97"
              className="flex flex-col max-w-[600px] w-full"
            >
              <div className="pb-8">
                <p className="text-4xl font-bold border-b-4 border-gray-200 text-gray-300 text-left">
                  Contact
                </p>
                <p className="text-gray-300 py-4 text-left">Send me a message!</p>
              </div>
              <input
                className="p-2 bg-[#ccd6f6] w-full"
                type="text"
                placeholder="Name"
                name="name"
                required
              />

              <input
                className="my-4 p-2 bg-[#ccd6f6] w-full"
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                className="bg-[#ccd6f6] p-2 w-full"
                rows="6"
                placeholder="Message"
                required
              ></textarea>

              <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center w-full sm:w-auto justify-center">
                Send
              </button>                  
            </form>
            </div>

          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-200 text-gray-300 text-left">
              Connect
            </p>
            <p className="text-gray-300 py-4 text-left font-bold">
              Connect with me on these platforms
            </p>
            <div className="flex pt-6 space-x-6">
              <a
                className="text-gray-300 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14"
                href="https://www.linkedin.com/in/donnie-wu/"
              >
                <FaLinkedin className="w-full h-full" />
              </a>

              <a
                className="text-gray-300 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14"
                href="https://github.com/DonnyWu"
              >
                <FaGithub className="w-full h-full" />
              </a>

              

            </div> 
            <p className="text-4xl font-bold border-b-4 border-gray-200 text-gray-300 text-left pt-8">
              Email
            </p>
            <p className="text-gray-300 py-4 text-left font-bold">
             <b>Email:</b><a href="mailto:Donniewei.Wu@gmail.com">Donniewei.Wu@gmail.com</a>
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
