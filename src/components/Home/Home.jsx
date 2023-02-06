import React from "react";
import { Link } from "react-router-dom";
import redberryLogo from "../../images/redberryLogo.png";
import agencyLogo from "../../images/transformationAgencyLogo.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img
          src={redberryLogo}
          alt="redberry logo"
          className={styles.redberryLogo}
        />
        <div></div>
      </nav>
      <div className={styles.buttonContainer}>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/1">
          <button>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
        </Link>
      </div>
      <img src={agencyLogo} alt="agency logo" className={styles.agencyLogo} />
    </div>
  );
};

export default Home;
