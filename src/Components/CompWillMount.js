import React, { Component } from 'react'
import WillMount from './WillMount'
export default class CompWillMount extends Component {

    constructor(){
        super()
            this.state = {
                show:true
            }
    }
  render() {
    return (
      <div>
          <div className="app">
              {this.state.show ? <WillMount/>:<h1>Removed Child Component</h1>}
          </div>
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Component</button>
      </div>
    )
  }
}
