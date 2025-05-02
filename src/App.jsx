import { useEffect, useRef, useState } from "react";
import "./App.scss";
import MainLayout from "./components/Layout/MainLayout";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import { AiOutlineArrowUp } from "react-icons/ai";
import NotFound from "./notFound";

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
      <Routes>
        <Route index element={<MainLayout sectionRefs={sectionRefs}><Home refs={{
          aboutRef,
          activityRef,
          blogsRef,
          certificatesRef,
          contactRef,
          experienceRef,
          projectsRef,
          skillsRef,
        }} /> </MainLayout>} />
        <Route path="projects" element={<MainLayout sectionRefs={sectionRefs}><Projects /></MainLayout>} />
        <Route path="certificates" element={<MainLayout sectionRefs={sectionRefs}><Certificates /></MainLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showScrollButton && (
        <div id="scrollToTop" onClick={scrollToTop} title="Scroll To Top">
          <AiOutlineArrowUp />
        </div>
      )}
    </div>
  );
};

export default App;
