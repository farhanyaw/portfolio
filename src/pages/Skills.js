import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "html1.png" },
    { name: "CSS", icon: "css1.png" },
    { name: "JavaScript", icon: "js1.png" },
    { name: "ReactJS", icon: "reactjs.png" },
    { name: "AWS", icon: "aws.png" },
    { name: "PHP", icon: "php.png" },
    { name: "Tailwind", icon: "tailwind.png" },
    { name: "Flutter", icon: "flutter.png" },
  ];

  return (
    <section id="skills" className="py-20 px-8 md:px-16 lg:px-32 xl:px-64 bg-secondary text-primary h-full">
      <div>
        <h2 className="text-center text-4xl font-bold mb-12">Skills</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="item-tech flex cursor-pointer items-center gap-4 p-4 border-2 border-primary rounded-xl transition-transform transform hover:-translate-y-2 hover:bg-primary hover:bg-opacity-10"
          >
            <div className="flex h-16 w-16 items-center justify-center lg:h-18 lg:w-24">
              <img
                src={require(`../assets/icon/${skill.icon}`)}
                alt={`${skill.name} Icon`}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-xl lg:text-2xl">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
