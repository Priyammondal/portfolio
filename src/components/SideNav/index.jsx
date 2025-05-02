import "./index.css"
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import resume from "../../assets/resume.pdf";
import useObserver from "../../hooks/useObserver";

const SideNav = ({ setHamburger, scrollToSection, sectionRefs }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sectionInView] = useObserver(sectionRefs);
    const handleSideNavOpenClose = (e) => {
        if (e.target.id === "menuOverlay" || e.target.classList.contains("menuItem")) {
            setHamburger(true)
        }
    }
    return (
        <div id="menuOverlay" onClick={handleSideNavOpenClose}>
            <div id="menuCanvas">
                <IoMdClose color='black' size={32} className='closeIcon' onClick={() => setHamburger(true)} />
                <ul className="menuItems">
                    <li className={sectionInView === "about" ? "active" : ""}><a className='menuItem' onClick={() => {
                        if (location.pathname !== "/") {
                            navigate("/");
                        } else {
                            window.scroll({
                                top: 0,
                                behavior: "smooth",
                            });
                        }
                    }}>About Me</a></li>
                    <li className={sectionInView === "experience" ? "active" : ""}><a className='menuItem' onClick={() => {
                        scrollToSection("experienceHeading");
                    }}>Experience</a></li>
                    <li className={sectionInView === "skills" ? "active" : ""}><a className='menuItem' onClick={() => {
                        scrollToSection("skillsHeading");
                    }}>Skills</a></li>
                    <li className={location.pathname === "/projects" || sectionInView === "projects" ? "active" : ""}><a className='menuItem' onClick={() => {
                        scrollToSection("projectsHeading");
                    }}>Projects</a></li>
                    <li className={sectionInView === "blogs" ? "active" : ""}><a className='menuItem' onClick={() => {
                        scrollToSection("blogsHeading");
                    }}>Blogs</a></li>
                    <li className={location.pathname === "/certificates" || sectionInView === "certificates" ? "active" : ""}><a className='menuItem' onClick={() => {
                        scrollToSection("certificatesHeading");
                    }}>Certificates</a></li>
                    <li className={sectionInView === "activity" ? "active" : ""}><a className='menuItem' onClick={() => {
                        scrollToSection("activityHeading");
                    }}>Activity</a></li>
                    <li className={sectionInView === "contact" ? "active" : ""}><a className='menuItem' onClick={() => {
                        scrollToSection("contactHeading");
                    }}>Contact Me</a></li>
                    <li><a className='menuItem' href={resume} download>Resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav;