import React, { useEffect } from "react";
import "./index.scss";
import { certificates } from "../../../assets/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = ({ theme }) => {
  useEffect(() => {
    const prev = document.querySelector(".slick-prev");
    const next = document.querySelector(".slick-next");
    prev.title = "Previous";
    next.title = "Next";
  }, []);

  const settings = {
    // dots: true,
    // fade: true,
    // autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 770,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="certificates mx-auto">
      <section className="text-center mb-5">
        <h2 id="certificatesHeading" className="invisible">Certificates</h2>
      </section>
      <section className={theme === "light" && "light"}>
        <Slider {...settings}>
          {certificates.map((item, index) => (
            <div key={index} className="card-wrapper">
              <div className="card">
                <div className="img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Certificates;
