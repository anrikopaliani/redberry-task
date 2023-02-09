import React from "react";
import styles from "./ResumeExperience.module.css";

const ResumeExperience = ({ experiences }) => {
  if (Object.values(experiences[0]).some((obj) => obj.value !== "")) {
    return (
      <>
        <div className={styles.line}></div>
        <div className={styles.resume_experience_container}>
          <h2>გამოცდილება</h2>
          {experiences.map((experience, index) => {
            return (
              <div key={index}>
                {experience.position || experience.employer ? (
                  <p className={styles.position}>
                    {experience.position}, {experience.employer}
                  </p>
                ) : null}

                {experience.start_date || experience.due_date ? (
                  <p className={styles.date}>
                    {experience.start_date.replaceAll("/", "-")} -{" "}
                    {experience.due_date.replaceAll("/", "-")}
                  </p>
                ) : null}

                {experience.position && (
                  <p className={styles.description}>{experience.description}</p>
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

export default ResumeExperience;
