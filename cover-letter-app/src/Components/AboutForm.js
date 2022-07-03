import React, { Component } from "react";

export default class AboutForm extends Component {
  render() {
    return (
      <form className="about-form" action="">
        <textarea name="about" id="" cols="30" rows="10"></textarea>
        <button>Done</button>
      </form>
    );
  }
}
