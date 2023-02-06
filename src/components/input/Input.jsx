import React, { useEffect } from "react";
import styles from "./Input.module.css";

import errorLogo from "../../images/errorSign.png";
import correctLogo from "../../images/correct-logo.png";

const Input = ({
  value,
  name,
  labelText,
  spanText,
  placeholder,
  handleChange,
  error,
}) => {
  const borderStyle = {
    border: error
      ? "2px solid #EF5050"
      : error === false
      ? "2px solid #98E37E"
      : "",
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={name} style={{ color: error && "#E52F2F" }}>
        {labelText}
      </label>
      <div className={styles.input}>
        <input
          style={borderStyle}
          value={value}
          className="inputStyle"
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {error === false && (
          <img src={correctLogo} alt="correct" className={styles.correct} />
        )}
        {error === true && (
          <img src={errorLogo} alt="error" className={styles.error} />
        )}
      </div>
      <span>{spanText}</span>
    </div>
  );
};

export default Input;
