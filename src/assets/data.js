// Skill pictures
import javascript from "./skills/javascript.png";
import react from "./skills/react.png";
import nodeJs from "./skills/nodeJs.png";
import typescript from "./skills/typescript.png";
import html5 from "./skills/html-5.png";
import css3 from "./skills/css3.png";
import bootstrap from "./skills/bootstrap.png";
import vscode from "./skills/vscode.png";
import figma from "./skills/figma.png";
import mysql from "./skills/mysql.png";
import mongodb from "./skills/mongodb.png";
import express from "./skills/express.png";
import styledComponents from "./skills/styled-components.svg";

// Project pictures

import XCrypto from "./projects/xcrypto.png";
import byteJournal from "./projects/bytejournal.png";
import ecommerceMF from "./projects/ecommerce-mf.png";
import employeeManagement from "./projects/employe-management.png";
import techyStar from "./projects/techyStar.png";
import delta from "./projects/delta.png";
import taskify from "./projects/taskify.png";

// Certificate pictures
import certificate1 from "./certificates/Javascript Algorithms And Data Structures.png";
import certificate2 from "./certificates/namaste-react-certificate.png";
import certificate3 from "./certificates/react_basic.png";
import certificate4 from "./certificates/javascript_basic.png";
import certificate5 from "./certificates/python_basic.png";
import certificate6 from "./certificates/fullstack_greycampus.png";
import certificate7 from "./certificates/datascience_greycampus.png";
import certificate8 from "./certificates/html_greatlearning.jpg";
import certificate9 from "./certificates/css_greatlearning.jpg";
import certificate10 from "./certificates/Problem_solving_through_C.jpeg";
import certificate11 from "./certificates/Speaking_efectively.jpeg";
import certificate13 from "./certificates/kshitij_robotics.png";
import certificate12 from "./certificates/smartjob.png";

export const projects = [
  {
    id: 1,
    date: "",
    title: "XCrypto",
    description:
      "A dynamic cryptocurrency tracker and trading interface in React.js. Integrates real-time exchange data from APIs, uses Chakra UI for responsive design, and features interactive coin value graphs for thorough tracking across devices.",
    url: "https://shiny-treacle-c3eec1.netlify.app",
    imgSrc: XCrypto,
    github: "https://github.com/Priyammondal/xcrypto",
  },
  {
    id: 2,
    date: "",
    title: "ByteJournal",
    description:
      "ByteJournal is a MERN stack blog application featuring a Reach Editor for creating posts. It includes a login and registration system with JWT authentication, providing secure access and a seamless user experience.",
    url: "https://bytejournal.netlify.app/",
    imgSrc: byteJournal,
    github: "https://github.com/Priyammondal/ByteJournal",
  },
  {
    id: 3,
    date: "",
    title: "Shop.",
    description:
      "An e-commerce application utilizing React with a microfrontend architecture and module federation. This approach ensures scalable, independent modules, enhancing flexibility and maintainability throughout the application.",
    url: "https://e-commerce-module-federation.netlify.app/",
    imgSrc: ecommerceMF,
    github:
      "https://github.com/Priyammondal/e-commerce-micro-frontend-react-application",
  },
  {
    id: 4,
    date: "",
    title: "Employee Directory",
    description:
      "An employee DB management project using pure HTML, CSS, and JS. Features a clean interface for efficient employee data handling and management.",
    url: "https://employee-database-management-js.netlify.app/",
    imgSrc: employeeManagement,
    github:
      "https://github.com/Priyammondal/Frontend-machine-coding/tree/main/Employee%20Database%20Management",
  },

  {
    id: 5,
    date: "29/03/2024",
    title: "Taskify",
    description:
      "An advanced to-do application built with React and TypeScript. Features drag-and-drop functionality, enabling users to easily organize tasks by dragging them, showcasing the seamless integration of these technologies for a robust user experience.",
    url: "https://taskify123.netlify.app/",
    imgSrc: taskify,
    github: "https://github.com/Priyammondal/taskify",
  },

  {
    id: 6,
    date: "16/09/2023",
    title: "Delta",
    description:
      "A streamlined website built with React and Styled Components. It leverages React's component-based architecture for modular code and implements responsive design principles to ensure enhanced accessibility across devices.",
    url: "https://delta123.netlify.app/",
    imgSrc: delta,
    github: "https://github.com/Priyammondal/delta",
  },
  {
    id: 7,
    date: "07/10/2022",
    title: "TECHY STAR",
    description:
      "A sleek website with modern design aesthetics built using React.js. It employs responsive design principles for seamless adaptability across devices, ensuring a user-friendly experience.",
    url: "https://zippy-squirrel-c54721.netlify.app",
    imgSrc: techyStar,
    github: "",
  },
];

export const experiences = [
  {
    date: "01/03/2023 - Present",
    company: "INNsight",
    jobTitle: "React.Js Developer",
    url: "https://www.innsight.com/",
  },
  {
    date: "20/10/2021 - 30/04/2022",
    company: "BDIPlus",
    jobTitle: "Software Engineer",
    url: "https://bdiplus.com/",
  },
  {
    date: "24/03/2021 - 12/10/2021",
    company: "PwC",
    jobTitle: "Associate",
    url: "https://www.pwc.in/sdc.html",
  },
];

export const skills = [
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
  },
  {
    name: "Node",
    description: "Web development",
    link: "https://nodejs.org/en/",
    type: "development",
    image: nodeJs,
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript,
  },
  {
    name: "Express.js",
    description: "Web development",
    link: "https://expressjs.com/",
    type: "development",
    image: express,
  },
  {
    name: "HTML5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5,
  },
  {
    name: "CSS3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3,
  },
  {
    name: "Styled Components",
    description: "Web design",
    link: "https://styled-components.com/",
    type: "design",
    image: styledComponents,
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap,
  },

  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode,
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma,
  },
  {
    name: "MySql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql,
  },
  {
    name: "MongoDB",
    description: "Database",
    link: "https://www.mongodb.com/",
    type: "database",
    image: mongodb,
  },
];

export const certificates = [
  {
    id: 1,
    name: "Javascript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    image: certificate1,
    credential: "",
  },
  {
    id: 2,
    name: "Namaste React",
    organization: "NamasteDev.com",
    image: certificate2,
    credential: "",
  },
  {
    id: 3,
    name: "React(Basic)",
    organization: "HackarRank",
    image: certificate3,
    credential: "",
  },
  {
    id: 4,
    name: "JavaScript(Basic)",
    organization: "HackarRank",
    image: certificate4,
    credential: "",
  },
  {
    id: 5,
    name: "Python(Basic)",
    organization: "HackarRank",
    image: certificate5,
    credential: "",
  },
  {
    id: 6,
    name: "A Foundation Program in full Stack",
    organization: "GreyCampus",
    image: certificate6,
    credential: "",
  },
  {
    id: 7,
    name: "A Foundation Program in data science",
    organization: "GreyCampus",
    image: certificate7,
    credential: "",
  },
  {
    id: 8,
    name: "Front end Development - HTML",
    organization: "greatlearning",
    image: certificate8,
    credential: "",
  },
  {
    id: 9,
    name: "Front end Development - CSS",
    organization: "greatlearning",
    image: certificate9,
    credential: "",
  },
  {
    id: 10,
    name: "Problem Solving Through Programming in C",
    organization: "NPTEL",
    image: certificate10,
    credential: "",
  },
  {
    id: 11,
    name: "Speaking Effectively",
    organization: "NPTEL",
    image: certificate11,
    credential: "",
  },
  {
    id: 12,
    name: "Aptitude, Verbal Ability and Technical tests",
    organization: "IEM America",
    image: certificate12,
    credential: "",
  },
  {
    id: 13,
    name: "Robotics Workshop",
    organization: "KSHITIJ, IIT Kharagpur",
    image: certificate13,
    credential: "",
  },
];
