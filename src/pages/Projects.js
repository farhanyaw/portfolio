import React from "react";

const Project = () => {
  const projects = [
    {
      name: "Portfolio Website",
      image: "project1.png",
      link: "https://github.com/farhanyaw/portfolio",
      desc: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    },
    {
      name: "Smart Trash Apps",
      image: "project2.png",
      link: "https://github.com/farhanyaw/smart_trash",
      desc: "I created an app called Smart Trash using React Native, which allows users to call a trash pickup service.",
    },
    {
      name: "Website Class",
      image: "project3.png",
      link: "https://github.com/farhanyaw/ClassWebsite",
      desc: "When I was in 10th grade, my friends and I made a website about our class profile.",
    },
    {
      name: "Library Website",
      image: "project4.png",
      link: "https://github.com/farhanyaw/AppPerpus",
      desc: "a library application that has a CRUD feature in it, which can make it easier for admins to list existing books.",
    },
    {
      name: "Pokemon List",
      image: "project5.png",
      link: "https://github.com/farhanyaw/pokemon_list",
      desc: "This is my mini project using ReactJS, which allows users to search for information about Pokemon by name.",
    },
    {
      name: "UI/UX Library Apps",
      image: "project6.png",
      link: "https://www.figma.com/design/kTNRnnnB5JWwTRgjf08PCz/Perpus-(1)?node-id=0-1&t=pzcNoHdeORB26kER-1",
      desc: "UI/UX about a library application that allows users to borrow books online, this system can certainly facilitate data collection in a library.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-8 md:px-16 lg:px-32 xl:px-64 bg-primary text-primary h-auto"
    >
      <div>
        <h2 className="text-center text-4xl font-bold mb-12 text-secondary">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="item-tech flex-col cursor-pointer items-center gap-4 p-4 border bg-secondary rounded-lg transition-transform transform hover:-translate-y-2"
          >
            <div className="flex h-48 w-72 items-center justify-center lg:h-48 lg:w-72">
              <img
                src={require(`../assets/image/${project.image}`)}
                alt={`${project.name}`}
                className="h-full w-full object-contain justify-center"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-center">{project.name}</h3>
            <p className="text-base text-start py-2">{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
