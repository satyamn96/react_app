import React, { Component } from 'react'

export default class ShouldCopmUpdate extends Component {

    constructor(){
        console.log("Constructor")
        super();
        this.state = {
            count:0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate" , this.state.count);
        return true;
    }
  render() {
      console.log("Render")
    return (
        <>
      <div className="app">
        <h1>Should Component Update {this.state.count}</h1>
      </div>
      <div className="app">
          <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Update</button>
          <br/>
      </div>
      </>
    )
  }
}
