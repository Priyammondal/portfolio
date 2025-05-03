import "./Header.css";
import resume from "../../assets/resume.pdf";
import logo from "../../assets/pm2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import SideNav from "../SideNav"
import useObserver from "../../hooks/useObserver";

const Header = ({ sectionRefs }) => {
  const [hamburger, setHamburger] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [sectionInView] = useObserver(sectionRefs);
  const scrollToSection = (HeadingId) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (window.innerWidth > 992) {
        const navbarHeight = document.querySelector("header").offsetHeight;
        const heading = document.getElementById(HeadingId);
        const SectionPosition = heading?.offsetTop - navbarHeight;

        window.scrollTo({
          top: SectionPosition,
          behavior: "smooth",
        });
      } else {
        setHamburger(true);
        const navbarHeight = document.querySelector("header").offsetHeight;
        const heading = document.getElementById(HeadingId);
        const SectionPosition = heading?.offsetTop - navbarHeight;

        window.scrollTo({
          top: SectionPosition,
          behavior: "smooth",
        });
      }
    }, 1000);
  };
  useEffect(() => {
    if (hamburger) {
      document.querySelector("body").style.overflowY = "auto"
      document.querySelector("#menuCanvas")?.classList.remove("menu-canvas-open")
    } else {
      document.querySelector("body").style.overflowY = "hidden"
      setTimeout(() => {
        document.querySelector("#menuCanvas")?.classList.add("menu-canvas-open")
      }, 100)
    }
  }, [hamburger])


  return (
    <header className="shadow">
      <div className="mx-auto d-block d-lg-flex container">
        <div className="d-flex justify-content-between px-2 px-lg-0 w-100">
          <Link
            className="justify-content-center align-items-center"
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <ul
            className="d-flex align-items-center mb-0"
          >
            <li title="About Me" className={sectionInView === "about" ? "active px-2 pb-1" : "px-2 pb-1"}>
              <a
                className="nav-link"
                onClick={() => {
                  setHamburger(true);
                  if (location.pathname !== "/") {
                    navigate("/");
                  } else {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                About Me
              </a>
            </li>
            <li title="Experience" className={sectionInView === "experience" ? "active px-2 pb-1" : "px-2 pb-1"}>
              <a
                className="nav-link"
                onClick={() => {
                  scrollToSection("experienceHeading");
                }}
              >
                Experience
              </a>
            </li>
            <li className={sectionInView === "skills" ? "active px-2 pb-1" : "px-2 pb-1"} title="Skills">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToSection("skillsHeading");
                }}
              >
                Skills
              </a>
            </li>
            <li className={location.pathname === "/projects" || sectionInView === "projects" ? "active px-2 pb-1" : "px-2 pb-1"} title="Projects">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToSection("projectsHeading");
                }}
              >
                Projects
              </a>
            </li>
            <li className={sectionInView === "blogs" ? "active px-2 pb-1" : "px-2 pb-1"} title="Blogs">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToSection("blogsHeading");
                }}
              >
                Blogs
              </a>
            </li>
            <li className={location.pathname === "/certificates" || sectionInView === "certificates" ? "active px-2 pb-1" : "px-2 pb-1"} title="Certificates">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToSection("certificatesHeading");
                }}
              >
                Certificates
              </a>
            </li>
            <li className={sectionInView === "activity" ? "active px-2 pb-1" : "px-2 pb-1"} title="activity">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToSection("activityHeading");
                }}
              >
                Activity
              </a>
            </li>
            <li className={sectionInView === "contact" ? "active px-2 pb-1" : "px-2 pb-1"} title="Contact Me">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToSection("contactHeading");
                }}
              >
                Contact Me
              </a>
            </li>
            <li className="px-2 pb-1" title="Resume">
              <a className="nav-link" href={resume} download>
                Resume
              </a>
            </li>
            <li className="sideNavHamburger"
              onClick={() => setHamburger((prev) => !prev)}>
              {hamburger && (
                <RxHamburgerMenu
                  size={30}
                  color="white"
                  className="hamburgerIcon"
                />
              )}
            </li>
          </ul>
          {!hamburger && <SideNav setHamburger={setHamburger} scrollToSection={scrollToSection} sectionRefs={sectionRefs} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
