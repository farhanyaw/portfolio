import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 pt-24 pb-36 w-full bg-secondary md:px-16 lg:px-20 max-md:pb-24"
    >
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-primary">About Me</h1>
        <div className="mt-16 flex flex-col md:flex-row md:gap-8">
          <div className="flex justify-center md:w-1/2">
            <img
              className="w-64 h-64 rounded-full object-cover border-4 border-primary"
              src={require("../assets/image/photohead.png")}
              alt="Profile"
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-2/3 md:ml-8"> {/* Added md:ml-8 */}
            <p className="text-base font-semibold text-primary text-start">
              &nbsp; &nbsp; Hi everyone! My name is Farhan Yogwardhana Setiambodo. I'm a web developer from Indonesia.
              Currently studying at SMK Telkom Malang with Cloud Developer expertise. Have experience with Cloud service like AWS
              and also create an infrastructure of servers
            </p>
            <p className="text-base font-semibold text-primary text-start">
              &nbsp; &nbsp; I also have experience in Mobile and Frontend Developer. 
              Even though I am still a junior, I'll always improve my skills. 
              my goal is to be a Fullstack Developer.
            </p>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center md:flex-row md:justify-center gap-6">
          <a
            href="https://linkedin.com/in/farhanyog/"
            className="flex items-center gap-3 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
            <span>linkedin.com/in/farhanyog/</span>
          </a>
          <a
            href="https://github.com/farhanyaw"
            className="flex items-center gap-3 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
            <span>github.com/farhanyaw</span>
          </a>
          <a
            href="https://instagram.com/farhanyaw"
            className="flex items-center gap-3 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
            <span>@farhanyaw</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
