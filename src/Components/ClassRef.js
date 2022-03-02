import React, { Component, createRef } from 'react'

export default class ClassRef extends Component {
    constructor(){

        super();
        this.inputRef = createRef();  
    
    }
    componentDidMount(){
        console.log(this.inputRef.current.value="Hello!!");
    }
    getVal(){
        alert(this.inputRef.current.value);
        this.inputRef.current.style.backgroundColor="#dc3545";
        this.inputRef.current.style.color="#fff";
    }
  render() {
    return (
     <>
      <div className="app">
        <h1>Using Ref in Class Component in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getVal()}> Get Val</button>
      </div>
     </>
    )
  }
}
