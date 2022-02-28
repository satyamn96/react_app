import React, { Component ,PureComponent} from 'react'
import PureCompChild from './PureCompChild';

export default class PureComp extends PureComponent {

    constructor() {

        super();
        this.state = {
            count: 0
        }
    }
  render() {
      console.log("Checking Re-Rendering")
    return (
      <div>
        <h1>Pure Component In React {this.state.count}</h1>
        <PureCompChild count={this.state.count} />
        <button onClick={()=>this.setState({count:this.state.count + 2})}>Update Count</button>
      </div>
    )
  }
}
