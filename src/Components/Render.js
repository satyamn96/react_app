import React, { Component } from 'react'

export default class Render extends Component {

    constructor(props){

        super();
        this.state={
            user:"JavaScript"
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        <button onClick={()=>this.setState({user:"Hello React !!"})}>Update Cycle</button>
      </div>
    )
  }
}
