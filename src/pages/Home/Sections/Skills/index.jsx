import { forwardRef, useState } from "react";
import "./index.scss";
import { skills } from "../../../../assets/data";
import { GiSpiderWeb } from "react-icons/gi";
import { BiDesktop } from "react-icons/bi";
import { AiTwotoneThunderbolt, AiOutlineDatabase } from "react-icons/ai";
import SkillCard from "../../../../components/skillCard";

const Skill = forwardRef((props, ref) => {
  const [skillType, setSkillType] = useState("all");
  return (
    <div ref={ref} className="skills">
      <section className="text-center mb-4">
        <h2 id="skillsHeading">Skills</h2>
      </section>
      <section className="skill_catagory mx-auto d-flex flex-wrap justify-content-between">
        <div
          className="skill_label"
          onClick={() => setSkillType("all")}
          style={{
            backgroundColor: skillType === "all" && "#c6f6d5",
            color: skillType === "all" && "#22543d",
          }}
          title="All"
        >
          <AiTwotoneThunderbolt />
          All
        </div>
        <div
          className="skill_label"
          onClick={() => setSkillType("development")}
          style={{
            backgroundColor: skillType === "development" && "#fed7d7",
            color: skillType === "development" && "#822727",
          }}
          title="Web Development"
        >
          <BiDesktop />
          Web Development
        </div>
        <div
          className="skill_label"
          onClick={() => setSkillType("design")}
          style={{
            backgroundColor: skillType === "design" && "#c6f6d5",
            color: skillType === "design" && "#22543d",
          }}
          title="Web Design"
        >
          <GiSpiderWeb />
          Web Design
        </div>
        <div
          className="skill_label"
          onClick={() => setSkillType("database")}
          style={{
            backgroundColor: skillType === "database" && "#fed7d7",
            color: skillType === "database" && "#822727",
          }}
          title="Database"
        >
          <AiOutlineDatabase />
          Database
        </div>
      </section>
      <section className="skill_list mx-auto">
        {skillType === "all" &&
          skills.map((item) => (
            <SkillCard
              key={item.id}
              name={item.name}
              description={item.description}
              link={item.link}
              type={item.type}
              image={item.image}
            />
          ))}
        {skills
          .filter((each) => each.type === skillType)
          .map((item) => (
            <SkillCard
              key={item.id}
              name={item.name}
              description={item.description}
              link={item.link}
              type={item.type}
              image={item.image}
            />
          ))}
      </section>
    </div>
  );
});

export default Skill;
