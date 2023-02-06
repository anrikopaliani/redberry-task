import React, { useState, useRef, useEffect } from "react";
import Input from "../../input/Input";
import styles from "./PersonalForm.module.css";
import { convertToBase64 } from "./convertToBase64";
import { validate } from "./validate";

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
    setFormValues({ ...formValues, [name]: base64 });
  };

  useEffect(() => {
    window.localStorage.setItem("form", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    window.localStorage.setItem("errors", JSON.stringify(formErrors));
  }, [formErrors]);

  return (
    <form className={styles.container}>
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
          onClick={() => {
            fileInputRef.current.click();
          }}
          type="button"
          className={styles.uploadImageButton}
        >
          ატვირთვა
        </button>
      </section>

      <section className={styles.textarea_container}>
        <label htmlFor="">ჩემ შესახებ (არასავალდებულო)</label>
        <textarea
          name="about_me"
          id="about_me"
          placeholder="ზოგადი ინფო შენ შესახებ"
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
    </form>
  );
};

export default PersonalForm;
