import React, { useState } from "react";
import styles from "./Experience.module.css";

import FormHeader from "../FormHeader/FormHeader";
import ExperienceForm from "./Form/ExperienceForm";
import Resume from "../resume/Resume";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validateOnSubmit } from "./Form/validate";

const Experience = ({ formValues, setFormValues }) => {
  const [formErrors, setFormErrors] = useState(
    formValues.experiences.map((obj) => {
      return {
        position: null,
        due_date: null,
        start_date: null,
        description: null,
        employer: null,
      };
    })
  );

  const navigate = useNavigate();

  const addForm = () => {
    setFormValues({
      ...formValues,
      experiences: formValues.experiences.concat({
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      }),
    });
    setFormErrors(
      formErrors.concat({
        position: null,
        due_date: null,
        start_date: null,
        description: null,
        employer: null,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { experiences } = formValues;
    const errorsOnSubmit = validateOnSubmit(formValues.experiences);
    setFormErrors([...errorsOnSubmit]);

    const firstObjectErrors = Object.values(errorsOnSubmit[0]).every(
      (value) => value === false
    );
    // if there is only one form, check if there are errors or not
    // if there are no errors navigate to the next page
    if (experiences.length === 1 && firstObjectErrors) {
      navigate("/3");
    }

    if (experiences.length > 1) {
      let count = 0;
      for (let i = 0; i < experiences.length; i++) {
        if (
          Object.values(experiences[i]).every(
            (value) =>
              value !== "" &&
              Object.values(errorsOnSubmit[i]).every((value) => value === false)
          )
        ) {
          count++;
        }
      }

      if (count === experiences.length) {
        navigate("/3");
      }
    }

    // if there is more than one form and if only the first one is completed
    // and there are no errors in other forms, navigate to the next page
    if (experiences.length > 1 && firstObjectErrors) {
      let count = 0;
      for (let i = 1; i < experiences.length; i++) {
        if (Object.values(experiences[i]).every((value) => value === "")) {
          count++;
        }
      }

      if (count === experiences.length - 1) {
        navigate("/3");
      }
    }
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={handleSubmit}>
        <FormHeader title="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" pageNumber={2} />
        {formValues.experiences.map((obj, index) => (
          <ExperienceForm
            formValues={formValues}
            setFormValues={setFormValues}
            key={index}
            objectIndex={index}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        ))}
        <div className={styles.button_container}>
          <button
            onClick={addForm}
            className={styles.add_more_button}
            type="button"
          >
            მეტი გამოცდილების დამატება
          </button>
        </div>

        <div className={styles.buttons_container}>
          <Link to="/1">
            <button type="button">ᲣᲙᲐᲜ</button>
          </Link>
          <button type="submit">ᲨᲔᲛᲓᲔᲒᲘ</button>
        </div>
      </form>

      <div className="resume">
        <Resume formValues={formValues} />
      </div>
    </div>
  );
};

export default Experience;
