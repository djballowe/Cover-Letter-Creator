import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <h2>Experience</h2>
        <div className="work-info-container">
          <p id="job-title">Full Stack Developer</p>
          <div className="company-date">
            <p>Made Up Inc.</p>
            <p>2020/08/12 - 2021-08-06</p>
          </div>
          <div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
