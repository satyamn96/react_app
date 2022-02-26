import React, { Component } from 'react'

export default class WillMount extends Component {

    componentWillUnmount(){
      alert("ComponentWillUnmount called");
    }
  render() {
    return (
      <div>
        <h1>Will Mount Component</h1>
      </div>  
    )
  }
}
