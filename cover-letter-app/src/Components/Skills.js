import React, { Component } from "react";
import pencil from "../Images/pencil-white.png";

export default class Skills extends Component {
  constructor() {
    super();
    this.handle = this.handleClick.bind(this);

    this.state = {
      skills:
        "Built single page applications (SPA), responsive web design, UI using HTML5 grid layouts, CSS3 media queries where it’s an expression and can be used to either true or false.",
      class: "hide",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      class: "hide",
    });
  };

  handleChange = (e) => {
    this.setState({
      skills: e.target.value,
    });
  };

  handleClick = (e) => {
    this.setState({
      class: "skills-form-display",
    });
  };

  render() {
    const info = this.state;
    return (
      <div className="work-container">
        <div className="header-containers">
          <h2>Skills</h2>
        </div>
        <div className="icon-container-name">
          <button
            className="edit-button"
            onClick={this.handleClick}
            type="submit"
          >
            <img src={pencil} alt="" />
          </button>
        </div>
        <form className={info.class} onSubmit={this.onSubmit}>
          <textarea
            name="skills"
            placeholder="Skills"
            id=""
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
          <button>Done</button>
        </form>
        <div className="work-info-container">
          <p>{info.skills}</p>
        </div>
      </div>
    );
  }
}
