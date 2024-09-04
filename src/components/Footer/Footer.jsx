import "./index.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { footerSocials } from "../../assets/data";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { SiMedium, SiLeetcode } from "react-icons/si";

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
      <section className="copyright">
        <p>Made with 🧡 and React</p>
        <p>© {new Date().getFullYear()} Priyam Mondal</p>
      </section>

      <div className="quote d-flex flex-column justify-content-center align-items-center gap-3">
        <img
          src="https://media1.tenor.com/m/GfSX-u7VGM4AAAAC/coding.gif"
          alt="coding.gif"
          height={window.innerWidth > 992 ? "90px" : "150px"}
        />
        {/* <q>I have stood on a mountain of no’s for one yes</q> */}
      </div>

      <section className="socialLinks">
        <p>Social Media</p>
        <article>
          {footerSocials.map((item) => (
            <a
              title={item.name}
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name === "instagram" ? (
                <AiFillInstagram size={25} color="#E4405F" />
              ) : item.name === "linkedIn" ? (
                <AiFillLinkedin size={25} color="#0A66C2" />
              ) : item.name === "facebook" ? (
                <AiFillFacebook size={25} color="#4267B2" />
              ) : item.name === "github" ? (
                <AiFillGithub size={25} color="white" />
              ) : item.name === "leetcode" ? (
                <SiLeetcode size={20} color="white" />
              ) : item.name === "X" ? (
                <BsTwitterX size={20} color="#000000" />
              ) : item.name === "medium" ? (
                <SiMedium size={25} color="white" />
              ) : item.name === "NPM" ? (
                <img
                  src="https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"
                  height="20"
                />
              ) : null}
            </a>
          ))}
        </article>
      </section>
    </footer>
  );
};

export default Footer;
