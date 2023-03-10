import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import LastPage from "./components/LastPage/LastPage";
import Personal from "./components/Personal/Personal";

function App() {
  const [formValues, setFormValues] = useState(
    JSON.parse(window.localStorage.getItem("form")) || {
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
    }
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/1"
          element={
            <Personal formValues={formValues} setFormValues={setFormValues} />
          }
        />
        <Route
          path="/2"
          element={
            <Experience formValues={formValues} setFormValues={setFormValues} />
          }
        />
        <Route
          path="/3"
          element={
            <Education formValues={formValues} setFormValues={setFormValues} />
          }
        />
        <Route path="/4" element={<LastPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
