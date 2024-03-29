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
import project1 from "./projects/p1.png";
import project2 from "./projects/p2.png";
import project3 from "./projects/p3.png";
import project4 from "./projects/p4.png";
import project5 from "./projects/p5.png";
import project6 from "./projects/p6.png";
import project7 from "./projects/p7.png";
import project8 from "./projects/p8.png";
import project9 from "./projects/p9.png";

// Certificate pictures 
import certificate1 from "./certificates/Javascript Algorithms And Data Structures.png"
import certificate2 from "./certificates/namaste-react-certificate.png"
import certificate3 from "./certificates/react_basic.png"
import certificate4 from "./certificates/javascript_basic.png"
import certificate5 from "./certificates/python_basic.png"
import certificate6 from "./certificates/fullstack_greycampus.png"
import certificate10 from "./certificates/css_greatlearning.jpg"
import certificate11 from "./certificates/datascience_greycampus.png"
import certificate8 from "./certificates/html_greatlearning.jpg"
import certificate7 from "./certificates/kshitij_robotics.png"
import certificate9 from "./certificates/Problem_solving_through_C.jpeg"
import certificate12 from "./certificates/smartjob.png"
import certificate13 from "./certificates/Speaking_efectively.jpeg"

export const projects = [
  {
    date: "07/10/2022",
    title: "TECHY STAR",
    description:
      "Simple website with modern design using React.js. Fully Responsive",
    url: "https://zippy-squirrel-c54721.netlify.app",
    imgSrc: project5,
    github: "",
  },
  {
    date: "11/10/2022",
    title: "Form Validation - Formik",
    description:
      "This is a demonstration of form validation using formik and yup in React",
    url: "https://formvalidation-formik-yup.netlify.app/",
    imgSrc: project6,
    github: "https://github.com/Priyammondal/formvalidation-react-formik-yup",
  },
  {
    date: "15/10/2022",
    title: "XCrypto",
    description:
      "Basic crypto tracking application. All the data are coming from apis.",
    url: "https://shiny-treacle-c3eec1.netlify.app",
    imgSrc: project8,
    github: "https://github.com/Priyammondal/xcrypto",
  },
  {
    date: "11/10/2022",
    title: "Form Validation - React-Hook-Form",
    description:
      "This is a demonstration of form validation using React-Hook-Form and yup in React",
    url: "https://formvalidation-react-hook-form-yup.netlify.app/",
    imgSrc: project6,
    github:
      "https://github.com/Priyammondal/formvalidation-react-hook-form-yup",
  },
  {
    date: "17/10/2022",
    title: "Basic Cart",
    description:
      "Demonstration of a basic cart section of e-commerce sites. Built using React.Js",
    url: "https://peppy-torrone-10ff8f.netlify.app",
    imgSrc: project3,
    github: "",
  },
  // {
  //   date: "20/10/2022",
  //   title: "Demo Portfolio",
  //   description: "My previous demo portfolio. Now not to be followed.",
  //   url: "https://priyammondal.netlify.app/",
  //   imgSrc: project1,
  //   github: "https://github.com/Priyammondal/priyam-portfolio",
  // },
  {
    date: "20/10/2022",
    title: "Employee Details",
    description:
      "Employee Details Card with modern design fully responsive built using React.js and vanilla Css",
    url: "https://innsighttask.netlify.app/",
    imgSrc: project2,
    github: "",
  },
  {
    date: "20/10/2022",
    title: "Todo - Redux Toolkit",
    description:
      "Simple demonstration of CRUD functionality through Todo application build with React.js and Redux Toolkit",
    url: "https://redux-toolkit-todo-app-implementation.netlify.app/",
    imgSrc: project4,
    github: "https://github.com/Priyammondal/redux-toolkit-implementation",
  },
  {
    date: "20/10/2022",
    title: "Map Implementation",
    description:
      "In this project map-box is used to create a dynamic map component. Different apis were used to implement directioin between two places",
    url: "https://map-box-react.netlify.app/",
    imgSrc: project7,
    github: "https://github.com/Priyammondal/map-box-react",
  },
  {
    date: "16/09/2023",
    title: "Delta",
    description:
      "This is a simple website made using React with styled components",
    url: "https://delta123.netlify.app/",
    imgSrc: project9,
    github: "https://github.com/Priyammondal/delta",
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

export const certificates =[
  {
    id: 1,
    name: "",
    image: certificate1
  },
  {
    id: 2,
    name: "",
    image: certificate2
  },
  {
    id: 3,
    name: "",
    image: certificate3
  },
  {
    id: 4,
    name: "",
    image: certificate4
  },
  {
    id: 5,
    name: "",
    image: certificate5
  },
  {
    id: 6,
    name: "",
    image: certificate6
  },
  {
    id: 7,
    name: "",
    image: certificate7
  },
  {
    id: 8,
    name: "",
    image: certificate8
  },
  {
    id: 9,
    name: "",
    image: certificate9
  },
  {
    id: 10,
    name: "",
    image: certificate10
  },
  {
    id: 11,
    name: "",
    image: certificate11
  },
  {
    id: 12,
    name: "",
    image: certificate12
  },
  {
    id: 13,
    name: "",
    image: certificate13
  },
]
