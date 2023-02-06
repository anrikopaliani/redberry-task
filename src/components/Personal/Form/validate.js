export const validate = (name, value) => {
  let errors = {};
  const REGEX = /^[ა-ჰ]+$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9.]+@redberry.ge\s{0,}/;
  const PHONE_NUMBER_REGEX = /\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}/;

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
