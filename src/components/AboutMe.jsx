import React from "react";
import myPicture from "./Images/me.jpg";
import resume from "./Resume.pdf";

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <div
        className="left"
        style={{
          width: "35%",
          height: "100%",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          paddingTop: "8%",
          // backgroundColor:"red",
          flexDirection: "column",
        }}
      >
        <img
          style={{ height: "150px", width: "150px", borderRadius: "50%" }}
          src={myPicture}
          alt="myPicture"
        />
        <div
          style={{
            margin: "3% 0 0 0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            fontSize: "2em"
          }}
        >
          <a
            href="https://www.facebook.com/priyam.mondal.9256/"
            target="_blank"
          >
            <i class="fa fa-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/priyam-mondal-160827190/"
            target="_blank"
            style={{
              margin: "0 3% 0 3%",
            }}
          >
            <i class="fa fa-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/priyam-mondal-160827190/"
            target="_blank"
          >
            <i class="fa fa-whatsapp" ></i>
          </a>

          <a
            href="https://www.linkedin.com/in/priyam-mondal-160827190/"
            target="_blank"
            style={{
              margin: "0 3% 0 3%",
            }}
          >
            <i class="fa fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/priyam.jsx/"
            target="_blank"
          >
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>

      <div
        className="right"
        style={{ width: "65%", height: "100%", backgroundColor: "" }}
      >
        <div
          className="aboutDescription"
          style={{ height: "60%", backgroundColor: "" }}
        >
          <div
            style={{ padding: "10% 0 0 0", backgroundColor: "", width: "80%" }}
          >
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ab atque obcaecati corrupti iure adipisci sapiente aliquid minus,
              voluptatibus suscipit neque minima eos eligendi debitis delectus
              hic odio pariatur quibusdam reiciendis laudantium magni
              architecto? Ut! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Distinctio aperiam fugit voluptates magni in
              fuga natus impedit consequatur. Perspiciatis obcaecati maiores
              deserunt sequi, distinctio rerum dolorum error cum debitis earum,
              dignissimos voluptates odit soluta corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ab atque obcaecati corrupti iure adipisci sapiente aliquid minus,
              voluptatibus suscipit neque minima eos eligendi debitis delectus
              hic odio pariatur quibusdam reiciendis laudantium magni
              architecto? Ut! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Distinctio aperiam fugit voluptates magni in
              fuga natus impedit consequatur. Perspiciatis obcaecati maiores
              deserunt sequi, distinctio rerum dolorum error cum debitis earum,
              dignissimos voluptates odit soluta corrupti.
            </p>
          </div>
        </div>
        <div
          className="aboutAddress"
          style={{ height: "35%", display: "flex" }}
        >
          <div
            className="address"
            style={{ width: "50%", backgroundColor: "" }}
          >
            <h1>Address</h1>
            185 Birnagar, <br />
            D/22/1 Deshbandhu Road, <br />
            Baghajatin <br />
            Kolkata - 700086 <br />
            +91 8328709274 <br />
            priyammondal096@gmail.com
          </div>
          <div className="resume" style={{ width: "50%", backgroundColor: "" }}>
            <a href={resume} target="_blank" download>
              <div id="downloadResume">
                <i class="fa fa-download"></i>
                <div style={{ marginLeft: "10px" }}>Download Resume</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
