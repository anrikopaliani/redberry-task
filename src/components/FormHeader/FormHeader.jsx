import React from "react";
import { Link } from "react-router-dom";
import styles from "./FormHeader.module.css";

// IMAGES
import arrow from "../../images/arrowBack.png";

const FormHeader = ({ title, pageNumber }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerDetails}>
        <Link
          to={pageNumber > 1 ? `/${pageNumber - 1}` : "/"}
          className="arrowImageDiv"
        >
          <img src={arrow} alt="go back" />
        </Link>
        <div className={styles.headerTitle}>
          <h2>{title}</h2>
          <p>{pageNumber}/3</p>
        </div>
      </div>
      <div className={styles.line}></div>
    </header>
  );
};

export default FormHeader;
