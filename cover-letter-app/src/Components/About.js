import React, { useState, useEffect } from "react";
import edit from "../Images/pencil.svg";

function About() {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  }

  return (
    <div className="about">
      <div className="about-text">
        <h1>About</h1>
      </div>
      <div className="text-body">
        <p></p>
        <div className="icon-container">
          <button
            className="edit-button"
            onClick={ToggleClass}
            type="submit"
          >
            <img src={edit} alt="" />
          </button>
        </div>
        <form className={isActive ? 'hide' : "about-form-display"}>
          <textarea
            name="about"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Done</button>
        </form>
      </div>
    </div>
  );
}

export default About;
