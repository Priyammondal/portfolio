import "./index.css";
import { certificates } from "../../assets/data";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <div className="certificatesPage container my-5">
      <div className="certificateHeading">
        <h1>Certificates</h1>
        <p>Recognitions and certifications earned through learning and hands-on practice.</p>
      </div>
      <div className="certificateGrid">
        {certificates.map((certificate) =>
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
      </div>
    </div>
  );
};

export default Certificates;
