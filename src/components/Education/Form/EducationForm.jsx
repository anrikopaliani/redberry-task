import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../input/Input";
import styles from "./EducationForm.module.css";
import { validate } from "./validate";

import errorLogo from "../../../images/errorSign.png";

const EducationForm = ({
  formValues,
  setFormValues,
  objectIndex,
  formErrors,
  setFormErrors,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let objValue = value;

    if (objValue === "due_date") {
      objValue = value.replaceAll("-", "/");
    }

    const newEducations = formValues.educations.map((obj, index) =>
      index === objectIndex ? { ...obj, [name]: value } : obj
    );

    setFormValues({ ...formValues, educations: newEducations });
    const validatedField = validate(name, value);
    setFormErrors(
      formErrors.map((errorObject, index) =>
        index === objectIndex
          ? { ...formErrors[objectIndex], ...validatedField }
          : errorObject
      )
    );
  };

  return (
    <div className={styles.container}>
      <Input
        name="institute"
        labelText="სასწავლებელი"
        placeholder="სასწავლებელი"
        spanText="მინიმუმ 2 სიმბოლო"
        handleChange={handleChange}
        value={formValues.educations[objectIndex].institute}
        error={formErrors[objectIndex].institute}
      />

      <div className={styles.degree_container}>
        <div className={styles.dropdown}>
          <label
            style={{ color: formErrors[objectIndex].degree_id && "#E52F2F" }}
          >
            ხარისხი
          </label>
          <Dropdown
            error={formErrors[objectIndex].degree_id}
            formValues={formValues}
            setFormValues={setFormValues}
            objectIndex={objectIndex}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        </div>
        <div className={styles.date}>
          <label
            style={{ color: formErrors[objectIndex].due_date && "#E52F2F" }}
            htmlFor="due_date"
          >
            დამთავრების რიცხვი
          </label>
          <input
            style={{
              border: formErrors[objectIndex].due_date
                ? "2px solid #E52F2F"
                : formErrors[objectIndex].due_date === false
                ? "2px solid #98E37E"
                : "",
            }}
            type="date"
            id="due_date"
            name="due_date"
            value={formValues.educations[objectIndex].due_date}
            onChange={handleChange}
          />
          {formErrors[objectIndex].due_date && (
            <img className={styles.error} src={errorLogo} alt="error" />
          )}
        </div>
      </div>

      <div className={styles.textarea_container}>
        <label
          style={{ color: formErrors[objectIndex].description && "#E52F2F" }}
          htmlFor="description"
        >
          აღწერა
        </label>
        <textarea
          style={{
            border:
              formErrors[objectIndex]?.description === false
                ? "2px solid #98E37E"
                : formErrors[objectIndex]?.description === true
                ? "2px solid #EF5050"
                : "",
          }}
          placeholder="განათლების აღწერა"
          id="description"
          name="description"
          className={styles.textarea}
          value={formValues.educations[objectIndex].description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className={styles.line}></div>
    </div>
  );
};

export default EducationForm;
