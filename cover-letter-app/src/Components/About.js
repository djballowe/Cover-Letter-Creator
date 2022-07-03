import React, { Component } from "react";
import edit from "../Images/pencil.svg";

class About extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      about: "",
      class: "about-form",
    };
  }

  onSubmitAbout = (e) => {
    e.preventDefault();
    this.setState({
      class: "about-form",
    });
  };

  handleChange = (e) => {
    this.setState({
      about: e.target.value,
    });
  };

  handleClick = (e) => {
    this.setState({
      class: "about-form-display",
    });
  };

  render() {
    const text = this.state;
    return (
      <div className="about">
        <div className="about-text">
          <h1>About</h1>
        </div>
        <div className="text-body">
          <p>{text.about}</p>
          <div className="icon-container">
            <button
              className="edit-button"
              onClick={this.handleClick}
              type="submit"
            >
              <img src={edit} alt="" />
            </button>
          </div>
          <form className={text.class} onSubmit={this.onSubmitAbout}>
            <textarea
              name="about"
              id=""
              cols="30"
              rows="10"
              onChange={this.handleChange}
            ></textarea>
            <button>Done</button>
          </form>
        </div>
      </div>
    );
  }
}

export default About;
