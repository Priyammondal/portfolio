import "./index.scss";
import { certificates } from "../../../../assets/data";
import { Link } from "react-router-dom";

const Certificates = ({ theme }) => {
  return (
    <div className="certificates">
      <section className="text-center mb-5">
        <h2 id="certificatesHeading">Certificates</h2>
      </section>
      <section className="certificateCardWrapper">
        {certificates.slice(0, 4).map((certificate) =>
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
};

export default Certificates;
