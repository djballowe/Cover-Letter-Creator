import React, { useState } from "react";
import edit from "../Images/pencil.svg";

function Accolades() {
  const [isActive, setActive] = useState("false");
  const [Accolades, setAccolades] = useState(
    "This is a sample of the Accolades section. Please fill out your own information by clicking the button below and submitting"
  );

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const submit = (e) => {
    e.preventDefault();
    ToggleClass();
  };

  const handleChange = (e) => {
    setAccolades(e.target.value);
  };

  return (
    <div className="about">
      <div className="about-text">
        <h1>Accolades</h1>
      </div>
      <div className="text-body">
        <p>{Accolades}</p>
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
            name="accolades"
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

export default Accolades;
