import React from "react";
import classes from "../CSS/CertificateCard.module.css";

const CertificateCard = ({ image, name, provider, link }) => {
  return (
    <div className={classes.CertificateCard}>
      <div className={classes.CertificateCard_ImageContainer}>
        <img src={image} alt="course" />
        <a
          className={classes.CertificateCard_overlay}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <h2>Certificate</h2>
        </a>
      </div>
      <div className={classes.CertificateCard_Info}>
        <h3>{name}</h3>
        <p>~ {provider}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
