import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img 
          src="https://placehold.co/600x400"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px"}}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    )
  }
}

export default Header