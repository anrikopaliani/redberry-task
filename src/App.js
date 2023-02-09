import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
