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


const projects = [
  {
    title: " Freshcots",
    description: " Fresh cots is a Job Portal Application. Mainly focus on Freshers, Switchers, Returners and Interns.",
    year: "Oct 2024 - Present ",
    technologies: ["React", "Tailwind CSS", "Redux"]
  },
  {
    name: "Camp@Arus",
    description:
      ` One stop employee portal, which acts as an app store for all other applications that are used 
within the organization. Regular organization activities such as on-board and exit check-list, 
user management, role base security, application access control, etc are under one roof.`,
    year: "Jan 2024 - Oct-2024 ",
    technologies: ["Angular", "Angular Material", "SCSS", "Node.JS", "React", "Tailwind CSS"]
  },

];
const tabs = ["TechSkill", "Tools"] as const;
const TabContent = {
  TechSkill: [reactJs, redux, typeScript, javaScript, HTML, css, nodeJs,],

  Tools: [npm, gitHub, vsCode, azureDevops],

};
export const About = `  I'm a Frontend Developer, with 2.3 year of experience in developing
dynamic and responsive web applications.`
export const AboutMyself = `I am a passionate and detail-oriented Frontend Developer with 2.3 years of experience in building user-friendly,
 responsive, and dynamic web applications. My expertise lies in leveraging modern  technologies like React.js, Redux, JavaScript, HTML5, CSS3, and Tailwind CSS to create seamless and engaging user experiences.In my current role, I have collaborated closely with cross-functional teams to deliver scalable and performance-driven solutions, ensuring alignment with client goals and industry best practices. My ability to transform complex requirements into intuitive designs and robust implementations has consistently contributed to the success of projects.`

export { experiences, projects, tabs, TabContent };