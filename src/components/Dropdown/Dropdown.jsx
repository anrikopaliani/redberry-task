import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Dropdown.module.css";
import dropdownLogo from "../../images/dropdown-logo.png";

const Dropdown = ({
  formValues,
  setFormValues,
  objectIndex,
  error,
  setFormErrors,
  formErrors,
}) => {
  const [listElements, setListElements] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => setListElements(response.data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("form", JSON.stringify(formValues));
  }, [formValues]);

  const handleClick = (id) => {
    setIsActive(false);
    const newFormErrors = formErrors.map((obj, index) =>
      index === objectIndex ? { ...obj, degree_id: false } : obj
    );

    setFormErrors(newFormErrors);

    const newEducations = formValues.educations.map((object, index) => {
      if (index === objectIndex) {
        return { ...object, degree_id: id };
      } else {
        return object;
      }
    });

    setFormValues({ ...formValues, educations: newEducations });
  };

  const selectedItem = listElements.find(
    (obj) => obj.id === formValues.educations[objectIndex].degree_id
  );

  return (
    <div className={styles.dropdown}>
      <div
        style={{
          border:
            error && !selectedItem?.title
              ? "2px solid #E52F2F"
              : error === false
              ? "2px solid #98E37E"
              : "",
        }}
        className={styles.dropdown_btn}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{selectedItem?.title ? selectedItem?.title : "ხარისხი"}</div>
        <img src={dropdownLogo} alt="drop down" />
      </div>
      {isActive && (
        <div className={styles.dropdown_content}>
          {listElements.map((el) => (
            <div
              onClick={() => handleClick(el.id)}
              id={el.id}
              className={styles.dropdown_item}
              key={el.id}
            >
              {el.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
