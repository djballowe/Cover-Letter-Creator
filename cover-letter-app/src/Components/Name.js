import React, { Component } from "react";
import pencil from "../Images/pencil-white.png";

export default class Name extends Component {
  constructor() {
    super();
    this.handle = this.handleClick.bind(this)

    this.state = {
      firstName: "Don",
      lastName: "Smith",
      title: "Web Developer",
      class: "hide"
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      class: "hide"
    })
  }
  
  handleChange = (e) => {
    if (e.target.name === 'firstName') {
      this.setState({
        firstName: e.target.value
      })
    } else if (e.target.name === 'title') {
      this.setState({
        title: e.target.value
      })
    } else if (e.target.name === 'lastName') {
      this.setState({
        lastName: e.target.value
      })
    }
  }

  handleClick = (e) => {
    this.setState({
      class: 'name-form-display'
    })
  }
  
  render() {
    const info = this.state
    return (
      <div className="name-container">
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
            placeholder="Full Name"
            onChange={this.handleChange}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Full Name"
            onChange={this.handleChange}
            name="lastName"
          />
          <input
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
            name="title"
          />
          <button>Done</button>
        </form>
        <h1 id="first">{info.firstName}</h1>
        <h1 id="last">{info.lastName}</h1>
        <p id="title">{info.title}</p>
      </div>
    );
  }
}
