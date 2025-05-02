import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import { AiOutlineArrowUp } from "react-icons/ai";

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const certificatesRef = useRef(null);
  const activityRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    aboutRef,
    activityRef,
    blogsRef,
    certificatesRef,
    contactRef,
    experienceRef,
    projectsRef,
    skillsRef,
  ];

  return (
    <div className="App">
      <Header sectionRefs={sectionRefs} />
      <Routes>
        <Route path="/" element={<Home refs={{
          aboutRef,
          activityRef,
          blogsRef,
          certificatesRef,
          contactRef,
          experienceRef,
          projectsRef,
          skillsRef,
        }} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />

      {showScrollButton && (
        <div id="scrollToTop" onClick={scrollToTop} title="Scroll To Top">
          <AiOutlineArrowUp />
        </div>
      )}
    </div>
  );
};

export default App;
