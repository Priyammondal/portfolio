import "./index.scss";
import About from "./Sections/About";
import Experiences from "./Sections/Experiences";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Blogs from "./Sections/Blogs";
import Certificates from "./Sections/Certificates";
import Activity from "./Sections/Activity";
import Contact from "./Sections/Contact";

import "aos/dist/aos.css";

const Home = () => {
  return (
    <div className="body-main text-light">
      <div className="container body-wrapper mx-auto">
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Blogs />
        <Certificates />
        <Activity />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
