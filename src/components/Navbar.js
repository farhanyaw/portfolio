import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full py-4 px-8 z-50 transition-colors duration-300
        text-secondary bg-opacity-70 bg-primary backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="/">Farhan Y. S.</a>
        </div>
        <div className="space-x-8 text-base max-sm:space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
