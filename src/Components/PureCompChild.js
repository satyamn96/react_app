import React, { Component } from 'react'

export default class PureCompChild extends Component {

  render() {
      console.log("Render")
    return (
      <div>
        <h1>Pure Component Child In React {this.props.count}</h1>
      </div>
    )
  }
}
