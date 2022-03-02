import React,{useRef} from 'react'
import ForwardRef from './ForwardRef'
export default function FunctionRef() {
   
    const inputRef = useRef(null);
    const handleInput = ()=>{
        console.log("Function Called");
        inputRef.current.value= "React Js Hook";
        inputRef.current.focus();
        inputRef.current.style.color="green";
    }
    const childInputRef = useRef(null);
    const childInput = ()=>{
        childInputRef.current.value= "React Js Forward Ref Hook !!";
        childInputRef.current.style.color= "#dc3545";
    }
    return (
        <>
            <div className="app">
                <h2 style={{ background: "#198754", color: "#fff", padding: 10 }}>Using useRef Hook In Functional Component</h2>
                <br />
                <input type="text" ref={inputRef}/>
                <button onClick={()=>handleInput()}>Handle Input</button>
            </div>
            <div className="app">
                <ForwardRef ref={childInputRef} />
                <button onClick={childInput}>Update InputBox</button>
            </div>

        </>
    )
}
