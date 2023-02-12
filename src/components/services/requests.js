import axios from "axios";

export const resumePostRequest = async (data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const response = await axios.post(
    "https://resume.redberryinternship.ge/api/cvs",
    data,
    config
  );

  return response.data;
};
