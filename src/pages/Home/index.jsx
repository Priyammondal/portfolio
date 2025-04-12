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

const Home = ({ refs }) => {
  return (
    <div className="body-main text-light">
      <div className="container body-wrapper mx-auto">
        <About ref={refs.aboutRef} />
        <Experiences ref={refs.experienceRef} />
        <Skills ref={refs.skillsRef} />
        <Projects ref={refs.projectsRef} />
        <Blogs ref={refs.blogsRef} />
        <Certificates ref={refs.certificatesRef} />
        <Activity ref={refs.activityRef} />
        <Contact ref={refs.contactRef} />
      </div>
    </div>
  );
};

export default Home;
