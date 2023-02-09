export const validate = (name, value) => {
  let errors = {};
  const REGEX = /^[ა-ჰ]+\s{0,}$/;
  const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@redberry.ge\s{0,}$/;
  const PHONE_NUMBER_REGEX = /\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}\s{0,}$/;

  if (name === "name" || name === "surname") {
    if (!value || value.length < 2 || !REGEX.test(value)) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  if (name === "email") {
    if (!value || !EMAIL_REGEX.test(value)) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  if (name === "phone_number") {
    if (!value || !PHONE_NUMBER_REGEX.test(value)) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  if (name === "image") {
    if (!value) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  return errors;
};

export const validateOnSubmit = (values) => {
  let errors = {};
  const REGEX = /^[ა-ჰ]+$/;
  const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@redberry.ge\s{0,}$/;
  const PHONE_NUMBER_REGEX = /\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}\s{0,}$/;

  if (!values.name || values.name.length < 2 || !REGEX.test(values.name)) {
    errors.name = true;
  } else {
    errors.name = false;
  }

  if (
    !values.surname ||
    values.surname.length < 2 ||
    !REGEX.test(values.surname)
  ) {
    errors.surname = true;
  } else {
    errors.surname = false;
  }

  if (!values.email || !EMAIL_REGEX.test(values.email)) {
    errors.email = true;
  } else {
    errors.email = false;
  }

  if (!values.phone_number || !PHONE_NUMBER_REGEX.test(values.phone_number)) {
    errors.phone_number = true;
  } else {
    errors.phone_number = false;
  }

  if (!values.image) {
    errors.image = true;
  } else {
    errors.image = false;
  }

  return errors;
};
