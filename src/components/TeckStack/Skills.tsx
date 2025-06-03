import { tittle } from "../../styles/Styles"
import SkillsDeskVer from "./SkillsDeskVer"
import TechTabs from "./TechTab"


const Skills = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center w-full md:mt-10 min-h-screen" id="skills">
      <h2 className={`${tittle} md:mb-5`}> My Skills </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

      <div className="hidden md:block">
        <SkillsDeskVer />
      </div>
      <div className="block md:hidden">
        <TechTabs />
      </div>
    </div>
  );
};


export default Skills
