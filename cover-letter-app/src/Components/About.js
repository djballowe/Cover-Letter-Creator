import React, { useState } from "react";
import edit from "../Images/pencil.svg";

function About() {
  const [isActive, setActive] = useState("false");
  const [about, setAbout] = useState(
    "This is a sample of the about section. Please input your information by clicking the button below and submitting"
  );

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const submit = (e) => {
    e.preventDefault();
    ToggleClass();
  };

  const handleChange = (e) => {
    setAbout(e.target.value);
  };

  return (
    <div className="about">
      <div className="about-text">
        <h1>About</h1>
      </div>
      <div className="text-body">
        <p>{about}</p>
        <div className="icon-container">
          <button className="edit-button" onClick={ToggleClass} type="submit">
            <img src={edit} alt="" />
          </button>
        </div>
        <form
          className={isActive ? "hide" : "about-form-display"}
          onSubmit={submit}
        >
          <textarea
            name="about"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <button>Done</button>
        </form>
      </div>
    </div>
  );
}

export default About;
