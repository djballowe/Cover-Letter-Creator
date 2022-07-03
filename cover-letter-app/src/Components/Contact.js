import React, { Component } from "react";
import edit from "../Images/pencil.svg";

class Contact extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-text">
          <h1>Contact</h1>
        </div>
        <div className="text-body">
          <p>Phone: 555-555-5555</p>
          <p>Email: example@example.com</p>
          <p>Portfolio: examplewebsite/example.com</p>
          <p>Linkedin: DonSmith/linkedin.com</p>
        </div>
        <div className="icon-container">
          <img src={edit} alt="" />
        </div>
      </div>
    );
  }
}

export default Contact;
