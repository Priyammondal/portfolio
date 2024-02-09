import React from "react";
import pm from "../../assets/priyam.png";
import {
  AiFillCode,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { SiMedium, SiLeetcode } from "react-icons/si";
import "./index.scss";

const Footer = ({ theme }) => {
  return (
    <footer
      className="p-5 footer"
      style={{
        backgroundColor: theme === "dark" ? "#1a202c" : "white",
        color: theme === "dark" ? "white" : "#1a202c",
      }}
    >
      <section>
        <p>Made with 🧡 and React</p>
        <p>© {new Date().getFullYear()} Priyam Mondal</p>
      </section>

      <div>
        {/* <img src={pm} alt="Priyam" /> */}
        <h3>Priyam Mondal</h3>
        <p>I have stood on a mountain of no’s for one yes.</p>
      </div>

      <aside>
        <hp>Social Media</hp>
        <article>
          <a href="https://www.instagram.com/thepriyammondal/" target={"blank"}>
            <AiFillInstagram size={25} color="#E4405F" />
          </a>
          <a href="https://www.linkedin.com/in/priyam-mondal/" target={"blank"}>
            <AiFillLinkedin size={25} color="#0A66C2" />
          </a>
          <a
            href="https://www.facebook.com/priyam.mondal.9256/"
            target={"blank"}
          >
            <AiFillFacebook size={25} color="#4267B2" />
          </a>
          <a href="https://github.com/Priyammondal" target={"blank"}>
            <AiFillGithub
              size={25}
              color={theme === "dark" ? "white" : "black"}
            />
          </a>
          <a href="https://leetcode.com/priyam_mondal/" target={"blank"}>
            <SiLeetcode
              size={20}
              color={theme === "dark" ? "white" : "black"}
            />
          </a>
          <a href="https://twitter.com/priyam_jsx" target={"blank"}>
            <BsTwitterX size={20} color="#000000" />
          </a>
          <a href="https://medium.com/@priyam_mondal" target={"blank"}>
            <SiMedium size={25} color={theme === "dark" ? "white" : "black"} />
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;
