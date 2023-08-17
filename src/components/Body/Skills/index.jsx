import React, { useState } from "react";
import "./index.scss";
import { skills } from "../../../assets/data";
import { GiSpiderWeb } from "react-icons/gi";
import { BiDesktop } from "react-icons/bi";
import { AiTwotoneThunderbolt, AiOutlineDatabase } from "react-icons/ai";
import SkillCard from "./skillCard";

const Skill = ({ theme }) => {
  const [skillType, setSkillType] = useState("all");
  return (
    <div className="skills">
      <section className="text-center">
        <h2 className="">Skills</h2>
        <p>A list of technologies that I use on a regular basis.</p>
      </section>
      <section className="skill_catagory mx-auto d-flex flex-wrap justify-content-between">
        <div
          className="skill_label"
          onClick={() => setSkillType("all")}
          style={{ backgroundColor: skillType === "all" && "#c6f6d5" }}
        >
          <AiTwotoneThunderbolt />
          All
        </div>
        <div
          className="skill_label"
          onClick={() => setSkillType("development")}
          style={{ backgroundColor: skillType === "development" && "#edf2f7" }}
        >
          <BiDesktop />
          Web Development
        </div>
        <div
          className="skill_label"
          onClick={() => setSkillType("design")}
          style={{ backgroundColor: skillType === "design" && "#c6f6d5" }}
        >
          <GiSpiderWeb />
          Web Design
        </div>
        <div
          className="skill_label"
          onClick={() => setSkillType("database")}
          style={{ backgroundColor: skillType === "database" && "#fed7d7" }}
        >
          <AiOutlineDatabase />
          Database
        </div>
      </section>
      <section className="skill_list mx-auto d-flex flex-wrap justify-content-between gap-3">
        {skillType === "all" &&
          skills.map((item, index) => (
            <SkillCard
              name={item.name}
              description={item.description}
              link={item.link}
              type={item.type}
              image={item.image}
              theme={theme}
            />
          ))}
        {skills
          .filter((each) => each.type === skillType)
          .map((item, index) => (
            <SkillCard
              name={item.name}
              description={item.description}
              link={item.link}
              type={item.type}
              image={item.image}
              theme={theme}
            />
          ))}
      </section>
    </div>
  );
};

export default Skill;
