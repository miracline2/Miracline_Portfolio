import { tittle } from "../../styles/Styles"
import TechTabs from "./TechTab"


const Skills = () => {
  return (
    <div className="flex flex-col justify-center w-full mt-10 h-screen">
        <h2  className={`${tittle}`}>Tech Skills and Toolls</h2>
        <TechTabs/>
      
    </div>
  )
}

export default Skills
