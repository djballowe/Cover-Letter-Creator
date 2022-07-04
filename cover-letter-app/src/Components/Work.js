import React, { Component } from "react";
import pencil from "../Images/pencil-white.png";

export default class Work extends Component {
  constructor() {
    super();
    this.handle = this.handleClick.bind(this);

    this.state = {
      title: "Full Stack Developer",
      startDate: "2020/08/12",
      endDate: "2021/08/06",
      description:
        "Implemented websites, mobile applications, and landing pages from concept through deployment. Standardized all output with a new, responsive, mobile-first approach and strategy.",
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
    if (e.target.name === "title") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.name === "startDate") {
      this.setState({
        startDate: e.target.value,
      });
    } else if (e.target.name === "endDate") {
      this.setState({
        endDate: e.target.value,
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
          <h2>Experience</h2>
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
            placeholder="Title"
            onChange={this.handleChange}
            name="title"
          />
          <input
            type="date"
            placeholder="Start Date"
            onChange={this.handleChange}
            name="startDate"
          />
          <input
            type="date"
            placeholder="End Date"
            onChange={this.handleChange}
            name="endDate"
          />
          <textarea
            name="description"
            placeholder="Job Description"
            id=""
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
          <button>Done</button>
        </form>
        <div className="work-info-container">
          <p id="job-title">{info.title}</p>
          <div className="company-date">
            <p>
              {info.startDate} - {info.endDate}
            </p>
          </div>
          <div>
            <p>{info.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
