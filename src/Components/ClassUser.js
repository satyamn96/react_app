import React, { Component } from 'react';

export default class ClassUser extends Component {
    constructor(){
        super();
        this.state = {
            counts: 1,
            text: 'Hello Js !!'
        }
    }
    textChanged(){
        // alert("Hello ");
        this.setState({
            text: '!! Hello React !!',
            counts:this.state.counts+1
    });
    }
    render() {
        return (
            <>
            <h1>Hello {this.state.counts} I am State in Class Component {this.state.text}</h1>
            <button onClick={()=>this.textChanged()}>Click</button>
            </>
        )
    }
}
