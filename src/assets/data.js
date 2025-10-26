// Skill pictures
import javascript from "./images/skills/javascript.png";
import react from "./images/skills/react.png";
import nodeJs from "./images/skills/nodeJs.png";
import typescript from "./images/skills/typescript.png";
import html5 from "./images/skills/html-5.png";
import css3 from "./images/skills/css3.png";
import bootstrap from "./images/skills/bootstrap.png";
import vscode from "./images/skills/vscode.png";
import figma from "./images/skills/figma.png";
import mysql from "./images/skills/mysql.png";
import mongodb from "./images/skills/mongodb.png";
import redis from "./images/skills/redis.png";
import express from "./images/skills/express.png";
import styledComponents from "./images/skills/styled-components.svg";
import dotNet from "./images/skills/NET_Core_Logo.svg";
import cSharp from "./images/skills/Logo_C_sharp.svg";
import postgreSQL from "./images/skills/Postgresql_elephant.svg";

// Project pictures
import XCrypto from "./images/projects/xcrypto.png";
import byteJournal from "./images/projects/bytejournal.png";
import ecommerceMF from "./images/projects/ecommerce-mf.png";
import employeeManagement from "./images/projects/employe-management.png";
import techyStar from "./images/projects/techyStar.png";
import delta from "./images/projects/delta.png";
import taskify from "./images/projects/taskify.png";

// Certificate pictures
import certificate1 from "./images/certificates/Javascript Algorithms And Data Structures.png";
import certificate14 from "./images/certificates/namaste-javascript-certificate.webp";
import certificate2 from "./images/certificates/namaste-react-certificate.png";
import certificate3 from "./images/certificates/react_basic.png";
import certificate4 from "./images/certificates/javascript_basic.png";
import certificate5 from "./images/certificates/python_basic.png";
import certificate6 from "./images/certificates/fullstack_greycampus.png";
import certificate7 from "./images/certificates/datascience_greycampus.png";
import certificate8 from "./images/certificates/html_greatlearning.jpg";
import certificate9 from "./images/certificates/css_greatlearning.jpg";
import certificate10 from "./images/certificates/Problem_solving_through_C.jpeg";
import certificate11 from "./images/certificates/Speaking_efectively.jpeg";
import certificate13 from "./images/certificates/kshitij_robotics.png";
import certificate12 from "./images/certificates/smartjob.png";
import certificate15 from "./images/certificates/programming-with-python-3-x.png";
import certificate16 from "./images/certificates/data-visualization-with-python.png";

export const projects = [
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
    id: 1,
    date: "",
    title: "XCrypto",
    description:
      "A dynamic cryptocurrency tracker and trading interface in React.js. Integrates real-time exchange data from APIs, uses Chakra UI for responsive design, and features interactive coin value graphs for thorough tracking across devices.",
    url: "https://xcryptotracker.netlify.app/",
    imgSrc: XCrypto,
    github: "https://github.com/Priyammondal/xcrypto",
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
    url: "https://techystar-inn.netlify.app/",
    imgSrc: techyStar,
    github: "",
  },
];

export const experiences = [
  {
    date: "22/09/2025 - Present",
    company: "Esyasoft",
    jobTitle: "Senior Software Engineer",
    url: "https://www.esyasoft.com/",
  },
  {
    date: "16/09/2024 - 18/09/2025",
    company: "Rebel Foods",
    jobTitle: "Software Development Engineer - I",
    url: "https://www.rebelfoods.com/",
  },
  {
    date: "01/03/2023 - 13/09/2024",
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
    id: 1,
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
  },
  {
    id: 2,
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
  },
  {
    id: 3,
    name: "Node",
    description: "Web development",
    link: "https://nodejs.org/en/",
    type: "development",
    image: nodeJs,
  },
  {
    id: 4,
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript,
  },
  {
    id: 5,
    name: "Express.js",
    description: "Web development",
    link: "https://expressjs.com/",
    type: "development",
    image: express,
  },
  {
    id: 6,
    name: "HTML5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5,
  },
  {
    id: 7,
    name: "CSS3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3,
  },
  {
    id: 8,
    name: "Styled Components",
    description: "Web design",
    link: "https://styled-components.com/",
    type: "design",
    image: styledComponents,
  },
  {
    id: 9,
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap,
  },

  {
    id: 10,
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode,
  },
  {
    id: 11,
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma,
  },
  {
    id: 12,
    name: "MySql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql,
  },
  {
    id: 13,
    name: "MongoDB",
    description: "Database",
    link: "https://www.mongodb.com/",
    type: "database",
    image: mongodb,
  },
  {
    id: 14,
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis,
  },
  {
    id: 15,
    name: "C#",
    description: "Web development",
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    type: "development",
    image: cSharp,
  },
  {
    id: 16,
    name: ".NET Core",
    description: "Web development",
    link: "https://dotnet.microsoft.com/",
    type: "development",
    image: dotNet,
  },
  {
    id: 17,
    name: "PostgreSQL",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgreSQL,
  },
];

export const certificates = [
  {
    id: 1,
    name: "Javascript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    image: certificate1,
    credential:
      "https://www.freecodecamp.org/certification/priyammondal/javascript-algorithms-and-data-structures",
  },
  {
    id: 2,
    name: "Namaste React",
    organization: "NamasteDev.com",
    image: certificate2,
    credential:
      "https://namastedev.com/priyammondal096/certificates/namaste-react",
  },
  {
    id: 14,
    name: "Namaste JavaScript",
    organization: "NamasteDev.com",
    image: certificate14,
    credential:
      "https://namastedev.com/priyammondal096/certificates/namaste-javascript",
  },
  {
    id: 3,
    name: "React(Basic)",
    organization: "HackarRank",
    image: certificate3,
    credential: "https://www.hackerrank.com/certificates/bfe599bca035",
  },
  {
    id: 4,
    name: "JavaScript(Basic)",
    organization: "HackarRank",
    image: certificate4,
    credential: "https://www.hackerrank.com/certificates/033a6b3f4639",
  },
  {
    id: 5,
    name: "Python(Basic)",
    organization: "HackarRank",
    image: certificate5,
    credential: "https://www.hackerrank.com/certificates/eaff967815ec",
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
    id: 15,
    name: "Programming with Python 3.X",
    organization: "SkillUP",
    image: certificate15,
    credential:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxMTY5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzUwNTQ5NV8xNjU0MzI4MTE4LnBuZyIsInVzZXJuYW1lIjoiUHJpeWFtIE1vbmRhbCJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_3505495_1654328118.png&_branch_match_id=1354071839220789069&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1jc1sHSqNEgqcixMAgCpxxlIIwAAAA%3D%3D",
  },
  {
    id: 16,
    name: "Data Visualization with Python",
    organization: "Coursera",
    image: certificate16,
    credential:
      "https://www.coursera.org/account/accomplishments/verify/NT5CJF6UDBW6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
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

export const footerSocials = [
  {
    id: 1,
    name: "instagram",
    link: "https://www.instagram.com/thepriyammondal/",
  },
  {
    id: 2,
    name: "linkedIn",
    link: "https://www.linkedin.com/in/priyam-mondal/",
  },
  // {
  //   id: 3,
  //   name: "facebook",
  //   link: "https://www.facebook.com/priyam.mondal.9256/",
  // },
  {
    id: 4,
    name: "github",
    link: "https://github.com/Priyammondal",
  },
  {
    id: 5,
    name: "leetcode",
    link: "https://leetcode.com/u/priyammondal/",
  },
  {
    id: 6,
    name: "X",
    link: "https://x.com/priyam_jsx",
  },
  {
    id: 7,
    name: "medium",
    link: "https://medium.com/@thepriyammondal",
  },
  {
    id: 8,
    name: "NPM",
    link: "https://www.npmjs.com/~priyammondal",
  },
];
