import {useState} from 'react';

function FunctionUser(){
    
    const[text , setText] = useState("Function Component With setState");
    const[counter , setCounter] = useState(0);
    const AlertBtn = ()=>{
        // alert("Button Clicked");
        setText("Text Changed On Click Of Button");
    }
    const CounterBtn = ()=>{
        // alert("Button Clicked");
        setCounter(counter + 1);
    }
    return(
        <>
        <h2>{text} <span> {counter}</span></h2>
        {/* <button onClick={AlertBtn()}>Click Me</button> */}
        {/* <button onClick={()=>{alert("Hello !!")}}>Click Me</button> */}
        <button onClick={AlertBtn}>Click Me</button>
        <button onClick={CounterBtn}>Click Me</button>

        </>
    )
}

export default FunctionUser;