import "./index.scss";
import { certificates } from "../../assets/data";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <div className="certificatesPage container my-5">
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
  );
};

export default Certificates;
