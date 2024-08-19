import React, { useState, useEffect, useMemo } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const titles = useMemo(() => ["Cloud Developer", "FrontEnd Developer", "Mobile Developer"], []);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, [titles.length]);

  useEffect(() => {
    setCurrentTitle(titles[index]);
  }, [index, titles]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <section
      id="home"
      className="w-full h-screen grid grid-cols-2 items-center px-8 py-8 pt-24 bg-primary text-secondary max-md:pt-32 max-md:grid-cols-1"
    >
      <motion.div
        className="flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-2"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">Hello, I'm Farhan</h2>
          <h3 className="relative inline-block font-medium mb-4 pl-24">
            {currentTitle}
            <span className="absolute w-20 h-0.5 bg-secondary left-0 top-4"></span>
          </h3>
          <p className="mb-8">
            Hi, glad to see you here. Welcome to my website.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1NHEhwm6ubMetbFdv6EpmZ-ud1lln4oni/view?usp=drive_link"
              download="CV_Farhan_Yogawardhana_S.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-secondary text-primary rounded-full transition transform hover:-translate-y-2"
            >
              Download CV
            </a>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/farhanyog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="transition transform hover:-translate-y-2"
                />
              </a>
              <a
                href="https://github.com/farhanyaw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={30}
                  className="transition transform hover:-translate-y-2"
                />
              </a>
              <a
                href="https://instagram.com/farhanyaw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={30}
                  className="transition transform hover:-translate-y-2"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-8 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <img
          src={require("../assets/image/photohead.png")}
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover border-4 border-secondary"
        />
      </motion.div>
    </section>
  );
};

export default Home;
