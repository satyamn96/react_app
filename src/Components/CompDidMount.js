import React from 'react';

class ClassComp extends React.Component {

    constructor(){
        super();
        console.log("Constructor");
        this.state={
            fname: 'Hello Everyone !!'
        }
    }
    componentDidMount(){
        console.log("componenDidMount");
    }
    render() {
        console.log("Render");
        return (
        <div className="app">
            <h2>Component Did Mount {this.state.fname}</h2>
            <button onClick={() => this.setState({fname:"Content Updated"})}>Update</button>
        </div>
        )
    }
}
export default ClassComp;