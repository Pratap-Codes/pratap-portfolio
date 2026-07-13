import React from "react";
import { SkillCard, skills } from "../../index";

const Skill = () => {
  return (
    <section id="skill" className="py-14">
      <div className="max-w-4xl mx-auto mb-15">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white  text-center">
            Skills
          </h2>

          <div className="h-1 w-20 bg-black dark:bg-white rounded-full "></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mt-4  ">
            {skills.map((skill, index) => {
              const Icon = skill.icon; 

              return (
                <SkillCard
                  key={index}
                  icon={Icon}
                  title={skill.title}
                  level={skill.level}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;