import React, { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";
import EducationForm from "./Form/EducationForm";
import Resume from "../resume/Resume";
import styles from "./Education.module.css";
import { Link } from "react-router-dom";
import { validateOnSubmit } from "./Form/validate";
import { useNavigate } from "react-router-dom";
import { resumePostRequest } from "../services/requests";

const Education = ({ formValues, setFormValues }) => {
  const [formErrors, setFormErrors] = useState(
    formValues.educations?.map((obj) => {
      return {
        institute: null,
        degree: null,
        due_date: null,
        description: null,
      };
    })
  );

  const navigate = useNavigate();

  const addForm = () => {
    setFormValues({
      ...formValues,
      educations: formValues.educations.concat({
        institute: "",
        degree_id: "",
        due_date: "",
        description: "",
      }),
    });

    setFormErrors(
      formErrors.concat({
        institute: null,
        degree: null,
        due_date: null,
        description: null,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { educations } = formValues;
    const errorsOnSubmit = validateOnSubmit(formValues.educations);

    const firstObjectErrors = Object.values(errorsOnSubmit[0]).every(
      (value) => value === false
    );

    const newExperiences = formValues.experiences.filter((obj) =>
      Object.values(obj).every((value) => value !== "")
    );
    const newEducations = formValues.educations.filter((obj) =>
      Object.values(obj).every((value) => value !== "")
    );

    const image = await (await fetch(formValues.image)).blob();

    if (educations.length === 1 && firstObjectErrors) {
      const data = await resumePostRequest({
        ...formValues,
        image,
        phone_number: formValues.phone_number.replaceAll(" ", ""),
        experiences: newExperiences,
        educations: newEducations,
      });

      // pass data while navigating programatically
      navigate("/4", { state: data });
      window.localStorage.removeItem("form");
      setFormValues({
        name: "",
        surname: "",
        email: "",
        phone_number: "",
        image: "",
        about_me: "",
        experiences: [
          {
            position: "",
            employer: "",
            start_date: "",
            due_date: "",
            description: "",
          },
        ],
        educations: [
          {
            institute: "",
            degree_id: "",
            due_date: "",
            description: "",
          },
        ],
      });
    } else {
      setFormErrors([...errorsOnSubmit]);
    }

    if (educations.length > 1 && firstObjectErrors) {
      let count = 0;
      for (let i = 1; i < educations.length; i++) {
        if (
          Object.values(educations[i]).every(
            (value) =>
              value !== "" &&
              Object.values(errorsOnSubmit[i]).every((value) => value === false)
          )
        ) {
          count = count + 1;
        } else if (
          Object.values(educations[i]).every(
            (value) =>
              value === "" &&
              Object.values(errorsOnSubmit[i]).every((value) => value === true)
          )
        ) {
          count = count + 1;
        }
      }

      if (count === educations.length - 1) {
        const data = await resumePostRequest({
          ...formValues,
          image,
          phone_number: formValues.phone_number.replaceAll(" ", ""),
          experiences: newExperiences,
          educations: newEducations,
        });
        // pass data while navigating programatically
        navigate("/4", { state: data });
        window.localStorage.removeItem("form");
        setFormValues({
          name: "",
          surname: "",
          email: "",
          phone_number: "",
          image: "",
          about_me: "",
          experiences: [
            {
              position: "",
              employer: "",
              start_date: "",
              due_date: "",
              description: "",
            },
          ],
          educations: [
            {
              institute: "",
              degree_id: "",
              due_date: "",
              description: "",
            },
          ],
        });
      } else {
        setFormErrors([...errorsOnSubmit]);
      }
    }
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={handleSubmit}>
        <FormHeader title="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" pageNumber={3} />
        {formValues.educations?.map((obj, index) => {
          return (
            <EducationForm
              formValues={formValues}
              setFormValues={setFormValues}
              key={index}
              objectIndex={index}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
            />
          );
        })}
        <div className={styles.add}>
          <button type="button" onClick={addForm}>
            სხვა სასწავლებლის დამატება
          </button>
        </div>

        <div className={styles.buttons_container}>
          <Link to="/2">
            <button>უკან</button>
          </Link>

          <button type="submit">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
        </div>
      </form>
      <div className="resume">
        <Resume formValues={formValues} />
      </div>
    </div>
  );
};

export default Education;
