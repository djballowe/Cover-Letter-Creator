import React, { Component } from "react";
import edit from "../Images/pencil.svg";

class Contact extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      phone: "555-555-5555",
      email: "example@example.com",
      website: "examplewebsite/example.com",
      linkedin: "DonSmith/linkedin",
      class: "hide"
    }
  }

  onSubmitContact = (e) => {
    e.preventDefault();
    this.setState({
      class: "hide"
    })
  }

  handleChange = (e, props) => {
    this.setState({
      phone: e.target.value,
      email: e.target.value,
      website: e.target.value,
      linkedin: e.target.value,
    })
    console.log(props)
  }

  handleClick = (e) => {
    this.setState({
      class: "contact-form-display"
    })
  }

  render() {
    const info = this.state
    return (
      <div className="about">
        <div className="about-text">
          <h1>Contact</h1>
        </div>
        <div className="contact-text-body">
          <p>Phone: {info.phone}</p>
          <p>Email: {info.email}</p>
          <p>Portfolio: {info.website}</p>
          <p>Linkedin: {info.linkedin}</p>
          <div className="icon-container">
            <button
              className="edit-button"
              onClick={this.handleClick}
              type="submit"
            >
              <img src={edit} alt="" />
            </button>
          </div>
          <form className={info.class} onSubmit={this.onSubmitContact}>
            <input type="text" placeholder="Phone" onChange={this.handleChange} name="phone"/>
            <input type="text" placeholder="Email" name="email"/>
            <input type="text" placeholder="Website" name="website"/>
            <input type="text" placeholder="Linkedin" name="linkedin"/>
            <button>Done</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
