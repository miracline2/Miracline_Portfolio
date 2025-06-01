import HTML from '../assets/Images/HTML.png';
import css from '../assets/Images/CSS3.png';
import reactJs from '../assets/Images/ReactJs.png';
import redux from '../assets/Images/Redux.png';
import javaScript from '../assets/Images/Js.png';
import typeScript from '../assets/Images/Ts.png';
import nodeJs from '../assets/Images/nodeJS.png';
import npm from '../assets/Images/npm.png';
import vsCode from '../assets/Images/Vscode.png';
import gitHub from '../assets/Images/github.png';
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

// const services = [
//   {
//     title: "Web Developer",

//   },
//   {
//     title: "React Native Developer",

//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
  {
    title: "FrontEnd Developer",
    companyName: "Arus Info",
    year: "Nov 2022 - Jan 2025 ",
    description:
      `Developing and maintaining web applications using React.js and other related technologies.,
        Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.,
        Implementing responsive design and ensuring cross-browser compatibility,
        Participating in code reviews and providing constructive feedback to other developers.`,
    technologies: ["React Js", "Node.Js", "Azure Devops", "Tailwind CSS", "GitHub"]
  },
  {
    title: "Intern",
    companyName: "Arus Info",
    year: "July 2022 - oct 2022 ",
    description:
      `Learned Basic and Advanced Programming language like Javascript ES6, HTML5,CSS3. 
Learned Version control like Git and Github. 
Mini project - Create Website using Html, css, create coin tossing game, billing using Javascript
 Prepared project presentation and report to trainer`,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "GitHub"]
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
  {
    name: "HCCB Sims",
    description:
      ` HCCB Vendor Portal is an advanced platform designed to enhance vendor management and 
streamline procurement processes. This user-friendly portal allows vendors to manage their 
profiles, track orders, and capture invoices efficiently`,
    year: "Aug 2023 - Dec 2023 ",
    technologies: ["Angular", "Angular Material", "SCSS"]

  },
  {
    name: "Muraai Sims",
    description:
      ` Muraai SIMS provides real-time updates, efficient document management, and detailed 
analytics to optimize vendor interactions and ensure a smooth supply chain operation`,
    year: "Nov 2022 - Aug 2023 ",
    technologies: ["Angular", "Angular Material", "SCSS"]

  }
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

export { experiences, testimonials, projects, tabs, TabContent };