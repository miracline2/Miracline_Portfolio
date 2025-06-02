import HTML from '../assets/Images/HTML.png';
import css from '../assets/Images/CSS3.png';
import reactJs from '../assets/Images/ReactJs.png';
import redux from '../assets/Images/Redux.png';
import javaScript from '../assets/Images/Js.png';
import typeScript from '../assets/Images/Ts.png';
import nodeJs from '../assets/Images/nodeJS.png';
import npm from '../assets/Images/npm.png';
import vsCode from '../assets/Images/Vscode.png';
import gitHub from '../assets/Images/gitHub.png';
import azureDevops from '../assets/Images/AzureDevops.png';
import tailwind from '../assets/Images/tailwind.png';
import type { IprojectDetails, IskillData } from '../interface/interface';
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const experiences = [
  {
    title: "FrontEnd Developer",
    companyName: "Arus Info",
    year: "Nov 2022 - Jan 2025 ",
    description:
      `Developing and maintaining web applications using React.js and other related technologies.,
        Collaborating with cross-functional teams including designers; product managers; and other developers to create high-quality products.,
        Implementing responsive design and ensuring cross-browser compatibility,
        Participating in code reviews and providing constructive feedback to other developers.`,
    technologies: ["React Js", "Node.Js", "Azure Devops", "Tailwind CSS", "GitHub"]
  },
  {
    title: "Intern",
    companyName: "Arus Info",
    year: "July 2022 - oct 2022 ",
    description:
      `Learned Basic and Advanced Programming language like Javascript ES6; HTML5; CSS3.,
Learned Version control like Git and Github. ,
Mini project - Create Website using Html/ css and developed coin tossing game;  billing using Javascript,
 Prepared project presentation and report to trainer`,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "GitHub"]
  },

];


const projects: IprojectDetails[] = [
  {
    title: "Freshcots",
    description:
      `Worked as a Frontend Developer handling both Candidate and Expert profiles. 
      Implemented functionalities for updating profile details with progress tracking,
       uploading and deleting profile images. Ensured Experts can’t schedule multiple calls with the same Candidate post-call
       , and integrated a skill rating feature where Experts rate Candidates. The ratings update dynamically in the Candidate's radar chart.`,
    technologies: ["React Js", "Redux", "Tailwind CSS"]
  },
  {
    title: "Camp@Arus",
    description:
      `Worked as a Frontend and API Developer. Developed responsive Candidate and Admin screens. Built key features like onboarding, user management, 
      and role-based access within a unified internal portal for employees.`,
    technologies: ["React Js", "Redux", "Tailwind CSS", "Node.JS"]
  },
  {
    title: "Forecast",
    description:
      `Worked as a Support Engineer on both Frontend and API.
       Focused on data filtering and updating percentage values dynamically in bar charts to reflect data metrics accurately.`,
    technologies: ["React Js", "Redux", "Tailwind CSS", "Node.JS"]
  }
];

const tabs = ["TechSkill", "Tools"] as const;
const TabContent:IskillData = {
  TechSkill: [reactJs, redux, typeScript, javaScript, HTML, css, nodeJs,tailwind],

  Tools: [npm, gitHub, azureDevops,vsCode],

};
export const About = `  I'm a Frontend Developer, with 2.3 year of experience in developing
dynamic and responsive web applications.`
export const AboutMyself = `I am a passionate and detail-oriented Frontend Developer with 2.3 years of experience in building user-friendly,
 responsive, and dynamic web applications. My expertise lies in leveraging modern  technologies like React.js, Redux, JavaScript, HTML5, CSS3, and Tailwind CSS to create seamless and engaging user experiences.In my current role, I have collaborated closely with cross-functional teams to deliver scalable and performance-driven solutions, ensuring alignment with client goals and industry best practices. My ability to transform complex requirements into intuitive designs and robust implementations has consistently contributed to the success of projects.`

export { experiences, projects, tabs, TabContent };