import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./App.scss";
const MainLayout = lazy(() => import("./components/Layout/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Loader from "./components/Loader";

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={
              <MainLayout sectionRefs={sectionRefs}>
                <Home
                  refs={{
                    aboutRef,
                    activityRef,
                    blogsRef,
                    certificatesRef,
                    contactRef,
                    experienceRef,
                    projectsRef,
                    skillsRef,
                  }}
                />{" "}
              </MainLayout>
            }
          />
          <Route
            path="projects"
            element={
              <MainLayout sectionRefs={sectionRefs}>
                <Projects />
              </MainLayout>
            }
          />
          <Route
            path="certificates"
            element={
              <MainLayout sectionRefs={sectionRefs}>
                <Certificates />
              </MainLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {showScrollButton && (
        <div id="scrollToTop" onClick={scrollToTop} title="Scroll To Top">
          <AiOutlineArrowUp />
        </div>
      )}
    </div>
  );
};

export default App;
