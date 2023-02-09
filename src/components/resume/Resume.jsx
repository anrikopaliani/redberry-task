import React from "react";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import styles from "./Resume.module.css";
import ResumeExperience from "./ResumeExperience/ResumeExperience";

const Resume = ({ formValues }) => {
  return (
    <div className={styles.resume_container}>
      <ResumeHeader formValues={formValues} />
      <ResumeExperience experiences={formValues.experiences} />
    </div>
  );
};

export default Resume;
