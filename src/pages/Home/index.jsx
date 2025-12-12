import "./index.css";
import About from "./Sections/About";
import Experiences from "./Sections/Experiences";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Blogs from "./Sections/Blogs";
import Certificates from "./Sections/Certificates";
import Activity from "./Sections/Activity";
import Contact from "./Sections/Contact";
import { useEffect, useState } from "react";

const Home = ({ refs }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thepriyammondal"
        );
        const data = await response.json();
        setBlogData(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBlogData();
  }, []);
  return (
    <div className="body-main text-light">
      <div className="container body-wrapper mx-auto">
        <About ref={refs.aboutRef} />
        <Experiences ref={refs.experienceRef} />
        <Skills ref={refs.skillsRef} />
        <Projects ref={refs.projectsRef} />
        {blogData && blogData.length > 0 && (
          <Blogs ref={refs.blogsRef} blogData={blogData} />
        )}
        <Certificates ref={refs.certificatesRef} />
        <Activity ref={refs.activityRef} />
        <Contact ref={refs.contactRef} />
      </div>
    </div>
  );
};

export default Home;
