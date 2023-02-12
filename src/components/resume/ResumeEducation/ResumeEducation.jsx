import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ResumeEducation.module.css";

const ResumeEducation = ({ educations }) => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => setDegrees(response.data));
  }, []);

  if (Object.values(educations[0]).some((value) => value !== "")) {
    return (
      <>
        <div className={styles.line}></div>
        <div className={styles.resume_education_container}>
          <h2>განათლება</h2>
          {educations.map((education, index) => {
            return (
              <div key={index}>
                {education.institute || education.degree_id ? (
                  <p className={styles.institute}>
                    {education.institute},{" "}
                    {education.degree_id &&
                      degrees.find(
                        (degree) => degree.id === education.degree_id
                      )?.title}
                  </p>
                ) : null}
                {education.due_date && (
                  <p className={styles.date}>
                    {education.due_date.replaceAll("/", "-")}
                  </p>
                )}

                {education.description && (
                  <p className={styles.description}>{education.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return null;
};

export default ResumeEducation;
