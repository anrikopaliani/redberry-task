import React, { useEffect } from "react";
import Input from "../../input/Input";
import styles from "./ExperienceForm.module.css";
import { validate } from "./validate";
import errorLogo from "../../../images/errorSign.png";

// objectIndex is for identyifying which values to change in experiences array
const ExperienceForm = ({
  formValues,
  setFormValues,
  objectIndex,
  formErrors,
  setFormErrors,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    let objValue = value;
    // format date value
    if (name === "start_date" || name === "due_date") {
      objValue = value.replaceAll("-", "/");
    }

    const newExperiences = formValues.experiences.map((object, index) =>
      index === objectIndex ? { ...object, [name]: objValue } : object
    );
    setFormValues({ ...formValues, experiences: newExperiences });
    const validatedField = validate(name, value);
    setFormErrors(
      formErrors.map((errorObject, index) =>
        index === objectIndex
          ? { ...formErrors[objectIndex], ...validatedField }
          : errorObject
      )
    );
  };

  useEffect(() => {
    window.localStorage.setItem("form", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div className={styles.container}>
      <Input
        name="position"
        labelText="თანამდებობა"
        placeholder="თანამდებობა"
        spanText="მინიმუმ 2 სიმბოლო"
        value={formValues.experiences[objectIndex].position}
        handleChange={handleChange}
        error={formErrors[objectIndex]?.position}
      />

      <Input
        name="employer"
        labelText="დამსაქმებელი"
        placeholder="დამსაქმებელი"
        spanText="მინიმუმ 2 სიმბოლო"
        value={formValues.experiences[objectIndex].employer}
        handleChange={handleChange}
        error={formErrors[objectIndex]?.employer}
      />

      <div className={styles.date_container}>
        <div className={styles.date_input_container}>
          <label
            style={{ color: formErrors[objectIndex].start_date && "#EF5050" }}
            htmlFor="start_date"
          >
            დაწყების რიცხვი
          </label>
          <div className={styles.start_date_container}>
            <input
              style={{
                border:
                  formErrors[objectIndex]?.start_date === false
                    ? "2px solid #98E37E"
                    : formErrors[objectIndex]?.start_date === true
                    ? "2px solid #EF5050"
                    : "",
              }}
              name="start_date"
              id="start_date"
              type="date"
              className="styleDateInput"
              value={formValues.experiences[objectIndex].start_date.replaceAll(
                "/",
                "-"
              )}
              onChange={handleChange}
            />
            {formErrors[objectIndex]?.start_date && (
              <img className={styles.error} src={errorLogo} alt="error" />
            )}
          </div>
        </div>
        <div className={styles.date_input_container}>
          <label
            style={{ color: formErrors[objectIndex].due_date && "#EF5050" }}
            htmlFor="due_date"
          >
            დამთავრების რიცხვი
          </label>
          <div className={styles.due_date_container}>
            <input
              style={{
                border:
                  formErrors[objectIndex]?.due_date === false
                    ? "2px solid #98E37E"
                    : formErrors[objectIndex]?.due_date === true
                    ? "2px solid #EF5050"
                    : "",
              }}
              type="date"
              name="due_date"
              id="due_date"
              className="styleDateInput"
              value={formValues.experiences[objectIndex].due_date.replaceAll(
                "/",
                "-"
              )}
              onChange={handleChange}
            />
            {formErrors[objectIndex]?.due_date && (
              <img className={styles.error} src={errorLogo} alt="error" />
            )}
          </div>
        </div>
      </div>
      <div className={styles.textarea_container}>
        <label
          style={{ color: formErrors[objectIndex].description && "#EF5050" }}
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
          name="description"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          id="description"
          value={formValues.experiences[objectIndex].description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default ExperienceForm;
