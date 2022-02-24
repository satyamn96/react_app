import React, { Component } from 'react'

export default class CompDidUpdate extends Component {

    constructor() {

        console.log("Constructor");
        super();
        this.state={
        count: 0
    }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componenDidUpdate" ,prevState.count ,this.state.count);
        if(this.state.count<10){
        this.setState({count:this.state.count+1});
    }
    }
  render() {
      console.log("Render");
    return (
      <div className="app">
        <h1>Component Did Update {this.state.count}</h1>
        <br/>
      </div>
    )
  }
}
