import React from "react";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import styles from "./Resume.module.css";

const Resume = ({ formValues }) => {
  return (
    <div className={styles.resume_container}>
      <ResumeHeader formValues={formValues} />
    </div>
  );
};

export default Resume;
