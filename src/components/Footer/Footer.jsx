import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { SiMedium, SiLeetcode } from "react-icons/si";
import "./index.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smmoth",
    });
  }, [location.pathname]);

  return (
    <footer className="p-5 footer">
      <section>
        <p>Made with 🧡 and React</p>
        <p>© {new Date().getFullYear()} Priyam Mondal</p>
      </section>

      <div>
        <p>I have stood on a mountain of no’s for one yes.</p>
      </div>

      <aside>
        <hp>Social Media</hp>
        <article>
          <a href="https://www.instagram.com/thepriyammondal/" target="_blank">
            <AiFillInstagram size={25} color="#E4405F" />
          </a>
          <a href="https://www.linkedin.com/in/priyam-mondal/" target="_blank">
            <AiFillLinkedin size={25} color="#0A66C2" />
          </a>
          <a
            href="https://www.facebook.com/priyam.mondal.9256/"
            target="_blank"
          >
            <AiFillFacebook size={25} color="#4267B2" />
          </a>
          <a href="https://github.com/Priyammondal" target="_blank">
            <AiFillGithub size={25} color="white" />
          </a>
          <a href="https://leetcode.com/priyam_mondal/" target="_blank">
            <SiLeetcode size={20} color="white" />
          </a>
          <a href="https://twitter.com/priyam_jsx" target="_blank">
            <BsTwitterX size={20} color="#000000" />
          </a>
          <a href="https://medium.com/@thepriyammondal" target="_blank">
            <SiMedium size={25} color="white" />
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;
