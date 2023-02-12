import React from "react";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import styles from "./Resume.module.css";
import ResumeExperience from "./ResumeExperience/ResumeExperience";
import ResumeEducation from "./ResumeEducation/ResumeEducation";

import starLogo from "../../images/star-logo.png";

const Resume = ({ formValues }) => {
  return (
    <div className={styles.resume_container}>
      <div>
        <ResumeHeader formValues={formValues} />
        <ResumeExperience experiences={formValues.experiences} />
        <ResumeEducation educations={formValues.educations} />
      </div>
      <img className={styles.image} src={starLogo} alt="star" />
    </div>
  );
};

export default Resume;
