import React, { Component } from 'react'
import Button from './Button'
import {ColorText} from './CommenContext'
import MainContextChild from './MainContextChild'
document.body.style.backgroundColor = '#042743';
export default class MainContext extends Component {

  constructor() {
    super()
    this.updateColor=(color) => {
        this.setState({
          color:color,
        })
    } 
    this.state = {
      color:'green',
      updateColor: this.updateColor
    }

  }
  render() {
    return (
      <>
       <ColorText.Provider value={this.state}>
        <div className="app">
        <h1>Using createContext in React</h1>
        </div>
        <ColorText.Consumer>
                {
                    ({color}) => (
                            <>
                            <h3 style={{color: color}}>Hello i am main Content</h3>
                            </>
                    )
                }
            </ColorText.Consumer>
        <MainContextChild />
        <Button />
        <ColorText.Consumer>
                {
                    ({color}) => (
                            <div className="footer"style={{backgroundColor: color}}>
                            <h3 style={{color: 'white'}}>Footer Content</h3>
                            </div>
                    )
                }
            </ColorText.Consumer>
       </ColorText.Provider> 
      </>
    )
  }
}
