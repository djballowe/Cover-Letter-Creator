import React, { Component } from "react";
import edit from "../Images/pencil.svg"
import AboutForm from "./AboutForm.js"

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-text">
          <h1>About</h1>
        </div>
        <div className="text-body">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <div className="icon-container">
            <img src={edit} alt="" />
          </div>
          <AboutForm />
        </div>
      </div>
    );
  }
}

export default About;
