import "./Header.scss";
import logo from "../../assets/priyam_m.png";
import resume from "../../assets/resume.pdf";
import { useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = (HeadingId) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (window.innerWidth > 992) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const heading = document.getElementById(HeadingId);
        const skillsSectionPosition = heading.offsetTop - navbarHeight;

        window.scrollTo({
          top: skillsSectionPosition,
          behavior: "smooth",
        });
      } else {
        const element = document.getElementById("navbarNav");
        if (element.classList.contains("show")) {
          element.classList.remove("show");
        }
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const heading = document.getElementById(HeadingId);
        const skillsSectionPosition = heading.offsetTop - navbarHeight;

        window.scrollTo({
          top: skillsSectionPosition,
          behavior: "smooth",
        });
      }
    }, 500);
  };
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="mx-auto d-block d-lg-flex container">
        <div className="d-flex justify-content-between px-2 px-lg-0">
          <a
            className="navbar-flex justify-content-center align-items-center navbar-brand"
            href="/portfolio"
          >
            <img className="logo" src={logo} alt="logo" />
          </a>
          <div className="d-flex gap-3 align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                onClick={() => setHamburger((prev) => !prev)}
              >
                {hamburger ? (
                  <RxHamburgerMenu
                    size={30}
                    color="white"
                    className="hamburgerIcon"
                  />
                ) : (
                  <IoMdClose size={32} color="white" className="closeIcon" />
                )}
              </span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex justify-content-end gap-5 flex-column flex-lg-row align-items-start w-100 ps-0 ps-lg-3">
            <section>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" title="About Me">
                  <a
                    className="nav-link active px-2"
                    onClick={() => {
                      if (location.pathname !== "/") {
                        navigate("/");
                      }
                      if (window.innerWidth > 992) {
                        window.scroll({
                          top: 0,
                          behavior: "smooth",
                        });
                      } else {
                        const element = document.getElementById("navbarNav");
                        if (element.classList.contains("show")) {
                          element.classList.remove("show");
                        }
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
                <li className="nav-item px-2" title="Experience">
                  <a
                    className="nav-link"
                    onClick={() => {
                      scrollToSection("experienceHeading");
                    }}
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item px-2" title="Skills">
                  <a
                    className="nav-link"
                    onClick={() => {
                      scrollToSection("skillsHeading");
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item px-2" title="Projects">
                  <a
                    className="nav-link"
                    onClick={() => {
                      scrollToSection("projectsHeading");
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item px-2" title="Blogs">
                  <a
                    className="nav-link"
                    onClick={() => {
                      scrollToSection("blogsHeading");
                    }}
                  >
                    Blogs
                  </a>
                </li>
                <li className="nav-item px-2" title="Certificates">
                  <a
                    className="nav-link"
                    onClick={() => {
                      scrollToSection("certificatesHeading");
                    }}
                  >
                    Certificates
                  </a>
                </li>

                <li className="nav-item px-2" title="Contact Me">
                  <a
                    className="nav-link"
                    onClick={() => {
                      scrollToSection("contactHeading");
                    }}
                  >
                    Contact Me
                  </a>
                </li>
                <li className="nav-item px-2" title="Resume">
                  <a className="nav-link" href={resume} download>
                    Resume
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
