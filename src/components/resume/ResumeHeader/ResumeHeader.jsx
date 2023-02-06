import React from "react";
import styles from "./ResumeHeader.module.css";

import phoneLogo from "../../../images/phone-logo.png";
import emailLogo from "../../../images/email-logo.png";

const ResumeHeader = ({ formValues }) => {
  const { image, name, surname, email, phone_number, about_me } = formValues;

  // const imageError = JSON.parse(window.localStorage.getItem("errors")).image;
  return (
    <header className={styles.resume_header_container}>
      <div>
        <h1 className={styles.name}>
          {name} {surname}
        </h1>

        <div className={styles.credentials_container}>
          {email && (
            <div className={styles.credentials}>
              <img src={emailLogo} alt="email" />
              <span>{email}</span>
            </div>
          )}
          {phone_number && (
            <div className={styles.credentials}>
              <img src={phoneLogo} alt="phone" />
              <span>{phone_number}</span>
            </div>
          )}
        </div>

        {about_me && (
          <div className={styles.about_me_container}>
            <h2 className={styles.about_me}>ჩემ შესახებ</h2>
            <span>{about_me}</span>
          </div>
        )}
      </div>
      <div>
        {image && <img src={image} alt="profile" className={styles.img} />}
      </div>
    </header>
  );
};

export default ResumeHeader;
