import React, { useState } from "react";
import styles from "./LastPage.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import arrowBack from "../../images/arrowBack.png";
import emailLogo from "../../images/email-logo.png";
import phoneLogo from "../../images/phone-logo.png";
import starLogo from "../../images/star-logo.png";

const LastPage = () => {
  const [showMessage, setShowMessage] = useState(true);
  // access the state which is passed down while navigating programatically
  const { state } = useLocation();
  console.log(state);
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.back_btn}>
        <img src={arrowBack} alt="" />
      </Link>
      <div className={styles.resume_container}>
        <div className={styles.resume_header}>
          <div>
            <h1>
              {state.name} {state.surname}
            </h1>
            <div className={styles.email_number_container}>
              <img src={emailLogo} alt="email logo" />
              <p>{state.email}</p>
            </div>
            <div className={styles.email_number_container}>
              <img src={phoneLogo} alt="phone number logo" />
              <p>{state.phone_number}</p>
            </div>

            <div className={styles.about_me_container}>
              <h2>ჩემ შესახებ</h2>
              <p>{state.about_me}</p>
            </div>
          </div>
          <img
            className={styles.image}
            src={`https://resume.redberryinternship.ge/${state.image}`}
            alt=""
          />
        </div>
        <div className={styles.line}></div>
        <div className={styles.resume_experiences}>
          <h2>გამოცდილება</h2>
          {state.experiences.map((experience) => {
            return (
              <div className={styles.experiences} key={experience.id}>
                <p className={styles.position}>
                  {experience.position}, {experience.employer}
                </p>
                <p className={styles.date}>
                  {experience.start_date.replaceAll("/", "-")} -{" "}
                  {experience.due_date.replaceAll("/", "-")}
                </p>
                <p className={styles.description}>{experience.description}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.line}></div>
        <div className={styles.resume_educations}>
          <h2>განათლება</h2>
          {state.educations.map((education) => {
            return (
              <div className={styles.educations} key={education.id}>
                <p className={styles.institute}>
                  {education.institute}, {education.degree}
                </p>
                <p className={styles.date}>{education.due_date}</p>
                <p className={styles.description}>{education.description}</p>
              </div>
            );
          })}
        </div>
        <img className={styles.starImage} src={starLogo} alt="star" />
      </div>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.message}
          >
            <div
              onClick={() => setShowMessage(false)}
              className={styles.remove}
            >
              X
            </div>
            <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LastPage;
