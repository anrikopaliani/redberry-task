import React, { useState, useRef, useEffect } from "react";
import Input from "../../input/Input";
import styles from "./PersonalForm.module.css";
import { useNavigate } from "react-router-dom";
import { convertToBase64 } from "./convertToBase64";
import { validate } from "./validate";

import errorLogo from "../../../images/errorSign.png";
import correctLogo from "../../../images/correct-logo.png";

const PersonalForm = ({ formValues, setFormValues }) => {
  const [formErrors, setFormErrors] = useState(
    JSON.parse(window.localStorage.getItem("errors")) || {
      name: null,
      surname: null,
      image: null,
      phone_number: null,
      email: null,
    }
  );
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    const validatedInput = validate(name, value);
    setFormErrors({ ...formErrors, ...validatedInput });
  };

  const handleImageChange = async (e) => {
    const { name } = e.target;
    const image = e.target.files[0];
    const base64 = await convertToBase64(image);
    console.log(image);
    const validatedImage = validate(name, base64);

    setFormValues({ ...formValues, [name]: base64 });
    setFormErrors({ ...formErrors, ...validatedImage });
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUploadImageButton = () => {
    fileInputRef.current.click();
    // setFormErrors({ ...formErrors, image:  true});
    if (!fileInputRef.current.files[0]) {
      setFormErrors({ ...formErrors, image: true });
    }
  };

  useEffect(() => {
    window.localStorage.setItem("form", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    window.localStorage.setItem("errors", JSON.stringify(formErrors));
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if every there are errors or not
    const errorsArray = Object.values(formErrors).every(
      (value) => value === false
    );

    if (Object.keys(formErrors).length >= 5 && errorsArray) {
      // navite to next page
      navigate("/2");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <section className={styles.name_surname}>
        <div className={styles.name_surname_input}>
          <Input
            labelText="სახელი"
            spanText="მინიმუმ 2 ასო, ქართული ასოები"
            placeholder="ანზორ"
            name="name"
            handleChange={handleChange}
            value={formValues.name}
            error={formErrors.name}
          />
        </div>
        <div className={styles.name_surname_input}>
          <Input
            value={formValues.surname}
            labelText="გვარი"
            spanText="მინიმუმ 2 ასო, ქართული ასოები"
            placeholder="მუმლაძე"
            name="surname"
            handleChange={handleChange}
            error={formErrors.surname}
          />
        </div>
      </section>

      <section className={styles.image_container}>
        <label>პირადი ფოტოს ატვირთვა</label>
        <input
          type="file"
          id="image"
          name="image"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageChange}
        />
        <button
          onClick={handleUploadImageButton}
          type="button"
          className={styles.uploadImageButton}
        >
          ატვირთვა
        </button>
        {formErrors.image === false && (
          <img
            src={correctLogo}
            alt="correct"
            className={styles.error_correct}
          />
        )}
        {formErrors.image && (
          <img src={errorLogo} alt="error" className={styles.error_correct} />
        )}
      </section>

      <section className={styles.textarea_container}>
        <label htmlFor="">ჩემ შესახებ (არასავალდებულო)</label>
        <textarea
          name="about_me"
          id="about_me"
          placeholder="ზოგადი ინფო შენ შესახებ"
          onChange={handleTextareaChange}
          value={formValues.about_me}
        ></textarea>
      </section>

      <section className={styles.email_container}>
        <Input
          labelText="ელ.ფოსტა"
          spanText="უნდა მთავრდებოდეს @redberry.ge-ით"
          placeholder="anzorr666@redberry.ge"
          handleChange={handleChange}
          value={formValues.email}
          name="email"
          error={formErrors.email}
        />
      </section>

      <section className={styles.phone_number_container}>
        <Input
          labelText="მობილურის ნომერი"
          spanText="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
          placeholder="+995 551 12 34 56"
          handleChange={handleChange}
          value={formValues.phone_number}
          name="phone_number"
          error={formErrors.phone_number}
        />
      </section>

      <button className={styles.submit} type="submit">
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </form>
  );
};

export default PersonalForm;
