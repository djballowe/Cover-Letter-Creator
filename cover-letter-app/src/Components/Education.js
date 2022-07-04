import React, { Component } from "react";
import pencil from "../Images/pencil-white.png";

export default class Education extends Component {
  constructor() {
    super();
    this.handle = this.handleClick.bind(this);

    this.state = {
      uni: "Made Up University State",
      degree: "bachelors of Fine Arts in Made up Science",
      description:
        "Academic Honors: Boston University's Metropolitan College Program Achievement Citation (2020), Dean’s List (3 semesters)",
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
    if (e.target.name === "uni") {
      this.setState({
        uni: e.target.value,
      });
    } else if (e.target.name === "degree") {
      this.setState({
        degree: e.target.value,
      });
    } else if (e.target.name === "description") {
      this.setState({
        description: e.target.value,
      });
    }
  };

  handleClick = (e) => {
    this.setState({
      class: "work-form-display",
    });
  };

  render() {
    const info = this.state;
    return (
      <div className="work-container">
        <div className="header-containers">
          <h2>Education</h2>
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
          <input
            type="text"
            placeholder="University"
            onChange={this.handleChange}
            name="uni"
          />
          <input
            type="text"
            placeholder="Degree"
            onChange={this.handleChange}
            name="degree"
          />
          <textarea
            name="description"
            placeholder="University Accolades"
            id=""
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
          <button>Done</button>
        </form>
        <div className="work-info-container">
          <p id="job-title">{info.uni}</p>
          <div className="company-date">
            <p>{info.degree}</p>
          </div>
          <div>
            <p>{info.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
