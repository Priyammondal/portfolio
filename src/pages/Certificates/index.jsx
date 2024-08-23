import React from "react";
import "./index.scss";
import { certificates } from "../../assets/data";

const Certificates = () => {
  return (
    <div className="certificatesPage container my-5">
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="certificateCard"
          title={certificate.name}
        >
          <img src={certificate.image} alt={certificate.name} />
        </div>
      ))}
    </div>
  );
};

export default Certificates;
