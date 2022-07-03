import React, { Component } from "react";
import edit from "../Images/pencil.svg";

class Accolades extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      accolades:
        "This is a sample of the Accolades page. Please edit this and fill out any awards or achievements of note here.",
      class: "hide",
    };
  }

  onSubmitAbout = (e) => {
    e.preventDefault();
    this.setState({
      class: "hide",
    });
  };

  handleChange = (e) => {
    this.setState({
      accolades: e.target.value,
    });
  };

  handleClick = (e) => {
    this.setState({
      class: "accolades-form-display",
    });
  };

  render() {
    const text = this.state;

    return (
      <div className="about">
        <div className="about-text">
          <h1>Accolades</h1>
        </div>
        <div className="text-body">
          <p>{text.accolades}</p>
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
              name="accolades"
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

export default Accolades;
