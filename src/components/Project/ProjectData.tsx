import type { IprojectDetails } from "../../interface/interface"

interface ProjectDataProps extends IprojectDetails {
  isActive?: boolean;
}

const ProjectData = ({
  title,
  description,
  technologies,
  isActive = false
}: ProjectDataProps) => {
  return (
    <div className="h-full flex flex-col justify-between">
     
        <h2 className={`text-lg md:text-2xl font-semibold  text-center transition-colors duration-300 ${
          isActive ? 'text-purple-300' : 'text-white'
        }`}>
          {title}
        </h2>
        <p className={`text-sm text-justify leading-relaxed transition-colors duration-300 ${
          isActive ? 'text-gray-200' : 'text-gray-300'
        }`}>
          {description}
        </p>
     
        <h2 className="text-center font-bold text-lg ">Technology Used</h2>
      <div className="flex flex-wrap gap-2  justify-center">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              isActive 
                ? 'bg-purple-200 text-purple-800 shadow-md' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectData