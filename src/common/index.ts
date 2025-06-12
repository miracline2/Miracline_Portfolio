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
import postman from '../assets/Images/postman.svg';
import figma from '../assets/Images/figma.svg';
import type { IprojectDetails, IskillData } from '../interface/interface';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
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
       uploading and deleting profile images. Ensured Experts can't schedule multiple calls with the same Candidate post-call
       , and integrated a skill rating feature where Experts rate Candidates. The ratings update dynamically in the Candidate's radar chart.`,
    technologies: ["React Js", "Redux", "Tailwind CSS", "Azure Devops"]
  },
  {
    title: "Camp@Arus",
    description:
      `Worked as a Frontend and API Developer. Developed responsive Candidate and Admin screens. Built key features like onboarding, user management, 
      and role-based access within a unified internal portal for employees, Also Worked to create a web service in Azure portal to Deployed the application through CI/CD pipeline.`,
    technologies: ["React Js", "Redux", "Tailwind CSS", "Node.JS", "Azure Portal", "Azure Devops"]
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
const TabContent: IskillData = {
  TechSkill: [reactJs, redux, typeScript, javaScript, HTML, css, nodeJs, tailwind],

  Tools: [npm, gitHub, azureDevops, vsCode,postman,figma],

};
const skillNames = [
  "React", "Redux", "TypeScript", "JavaScript",
  "HTML5", "CSS3", "Node.js", "Tailwind","npm","GitHub","Azure Devops","VS Code","Postman","Figma"
]

const skills = [reactJs, redux, typeScript, javaScript, HTML, css, nodeJs, tailwind, npm, gitHub, azureDevops, vsCode, postman, figma]
export const About = ` Frontend Developer with 2.5 years of experience in React.js, including a 3-month internship and 2+ years of professional development experience in developing
dynamic and responsive web applications.`
const socialLinks = {
  github: 'https://github.com/miracline2',
  linkedin: 'https://www.linkedin.com/in/miracline'
};
export {
  experiences,
  projects,
  tabs,
  TabContent,
  socialLinks,
  skills,
  skillNames
};