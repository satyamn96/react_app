import React, { Component } from 'react'
import {ColorText} from './CommenContext'
export default class MainContext extends Component {

  render() {
    return (
      <>
       <ColorText.Consumer>
        {
            ({color})=>(
                <h1 style={{backgroundColor:color}}>MainContext Child Component</h1>
            )
        }
       </ColorText.Consumer> 
      </>
    )
  }
}
