import React, { useState } from "react";
import edit from "../Images/pencil.svg";

function Contact() {
  // constructor() {
  //   super();

  //   this.handleClick = this.handleClick.bind(this);

  //   this.state = {
  //     phone: "555-555-5555",
  //     email: "example@example.com",
  //     website: "examplewebsite/example.com",
  //     linkedin: "DonSmith/linkedin",
  //     class: "hide",
  //   };
  // }

  const [isActive, setActive] = useState("false");
  const [Phone, setPhone] = useState("555-555-5555");
  const [Email, setEmail] = useState("example@example.com");
  const [Website, setWebsite] = useState("examplewebsite/example.com");
  const [Linkedin, setLinkedin] = useState("DonSmith/linkedin");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const submit = (e) => {
    e.preventDefault();
    ToggleClass();
  };

  const handleChange = (e) => {
    if (e.target.name === 'phone') {
      setPhone(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if(e.target.name === 'website') {
      setWebsite(e.target.value) 
    } else if(e.target.name === 'linkedin') {
      setLinkedin(e.target.value)
    }
  }

  return (
    <div className="about">
      <div className="about-text">
        <h1>Contact</h1>
      </div>
      <div className="contact-text-body">
        <p>Phone: {Phone}</p>
        <p>Email: {Email}</p>
        <p>Portfolio: {Website}</p>
        <p>Linkedin: {Linkedin}</p>
        <div className="icon-container">
          <button
            className="edit-button"
            onClick={ToggleClass}
            type="submit"
          >
            <img src={edit} alt="" />
          </button>
        </div>
        <form className={isActive ? "hide" : "about-form-display"} onSubmit={submit}>
          <input
            type="text"
            placeholder="Phone"
            onChange={handleChange}
            name="phone"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
          <input
            type="text"
            placeholder="Website"
            onChange={handleChange}
            name="website"
          />
          <input
            type="text"
            placeholder="Linkedin"
            onChange={handleChange}
            name="linkedin"
          />
          <button>Done</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
