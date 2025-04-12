import "./index.scss";
import { certificates } from "../../../../assets/data";
import { Link } from "react-router-dom";
import { forwardRef, useEffect, useState } from "react";

const Certificates = forwardRef((props, ref) => {
  const [cardsToShow, setCardsToShow] = useState(
    window.innerWidth < 767 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth < 767 ? 2 : 4);
    };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div ref={ref} className="certificates">
      <section className="text-center mb-5">
        <h2 id="certificatesHeading">Certificates</h2>
      </section>
      <section className="certificateCardWrapper">
        {certificates.slice(0, cardsToShow).map((certificate) =>
          certificate.credential ? (
            <Link
              to={certificate.credential}
              target="_blank"
              key={certificate.id}
              className="certificateCard"
              title={certificate.name}
            >
              <img src={certificate.image} alt={certificate.name} />
            </Link>
          ) : (
            <div
              key={certificate.id}
              className="certificateCard"
              title={certificate.name}
            >
              <img src={certificate.image} alt={certificate.name} />
            </div>
          )
        )}
      </section>
      <Link className="d-flex text-decoration-none" to="/certificates">
        <button
          title="View More Certificates"
          className="mt-5 btn btn-outline-light mx-auto"
        >
          View More
        </button>
      </Link>
    </div>
  );
});

export default Certificates;
