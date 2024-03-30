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

import todoReduxToolkit from "./projects/todoReduxToolkit.png";
import techyStar from "./projects/techyStar.png";
import XCrypto from "./projects/XCrypto.png";
import delta from "./projects/delta.png";
import taskify from "./projects/taskify.png";

// Certificate pictures
import certificate1 from "./certificates/Javascript Algorithms And Data Structures.png";
import certificate2 from "./certificates/namaste-react-certificate.png";
import certificate3 from "./certificates/react_basic.png";
import certificate4 from "./certificates/javascript_basic.png";
import certificate5 from "./certificates/python_basic.png";
import certificate6 from "./certificates/fullstack_greycampus.png";
import certificate10 from "./certificates/css_greatlearning.jpg";
import certificate11 from "./certificates/datascience_greycampus.png";
import certificate8 from "./certificates/html_greatlearning.jpg";
import certificate7 from "./certificates/kshitij_robotics.png";
import certificate9 from "./certificates/Problem_solving_through_C.jpeg";
import certificate12 from "./certificates/smartjob.png";
import certificate13 from "./certificates/Speaking_efectively.jpeg";

export const projects = [
  {
    date: "29/03/2024",
    title: "Taskify",
    description:
      "This project is an advanced todo application built using React and TypeScript, showcasing the seamless integration of these technologies to create a robust and intuitive user experience. The core feature of this application is its drag-and-drop functionality, allowing users to effortlessly organize their tasks with a simple drag of the mouse.",
    url: "https://taskify123.netlify.app/",
    imgSrc: taskify,
    github: "https://github.com/Priyammondal/taskify",
  },

  {
    date: "15/10/2022",
    title: "XCrypto",
    description:
      "Dynamic cryptocurrency tracking and trading interface with React.js, integrating real-time exchange data from third-party APIs. Utilized Chakra UI for responsive design, enabling intuitive usability across devices, and incorporated interactive coin value graphs for comprehensive tracking.",
    url: "https://shiny-treacle-c3eec1.netlify.app",
    imgSrc: XCrypto,
    github: "https://github.com/Priyammondal/xcrypto",
  },

  {
    date: "20/10/2022",
    title: "Todo - Redux Toolkit",
    description:
      "Todo application highlighting CRUD operations, developed with React.js and Redux Toolkit. Experience seamless task management with Create, Read, Update, and Delete functionalities, all within a modern and responsive user interface.",
    url: "https://redux-toolkit-todo-app-implementation.netlify.app/",
    imgSrc: todoReduxToolkit,
    github: "https://github.com/Priyammondal/redux-toolkit-implementation",
  },

  {
    date: "16/09/2023",
    title: "Delta",
    description:
      "Streamlined website using React and Styled Components, employing React's component-based architecture for modular code and implementing responsive design principles for enhanced accessibility across devices.",
    url: "https://delta123.netlify.app/",
    imgSrc: delta,
    github: "https://github.com/Priyammondal/delta",
  },
  {
    date: "07/10/2022",
    title: "TECHY STAR",
    description:
      "Sleek website with modern design aesthetics using React.js. Employed responsive design principles for seamless adaptability across devices, ensuring a user-friendly experience.",
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
    name: "",
    image: certificate1,
  },
  {
    id: 2,
    name: "",
    image: certificate2,
  },
  {
    id: 3,
    name: "",
    image: certificate3,
  },
  {
    id: 4,
    name: "",
    image: certificate4,
  },
  {
    id: 5,
    name: "",
    image: certificate5,
  },
  {
    id: 6,
    name: "",
    image: certificate6,
  },
  {
    id: 7,
    name: "",
    image: certificate7,
  },
  {
    id: 8,
    name: "",
    image: certificate8,
  },
  {
    id: 9,
    name: "",
    image: certificate9,
  },
  {
    id: 10,
    name: "",
    image: certificate10,
  },
  {
    id: 11,
    name: "",
    image: certificate11,
  },
  {
    id: 12,
    name: "",
    image: certificate12,
  },
  {
    id: 13,
    name: "",
    image: certificate13,
  },
];
