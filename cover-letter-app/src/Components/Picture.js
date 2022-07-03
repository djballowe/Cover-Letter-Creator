import React, { Component } from 'react'
import image from '../Images/default.jpg'

class Picture extends Component {
  render() {
    return (
      <div className='image-container'>
        <img className='image' src={image} alt="" />
      </div>
    )
  }
}

export default Picture
