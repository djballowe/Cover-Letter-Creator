import React, { Component } from 'react'
import edit from "../Images/pencil.svg";


export default class Name extends Component {
  render() {
    return (
      <div className='name-container'>
        <h1 id='first'>Don</h1>
        <h1 id='last'>Smith</h1>
        <p id='title'>Web Developer</p>
      </div>
    )
  }
}
