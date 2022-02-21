import React,{useState} from 'react'

export default function FormHandle() {

    const getFormData = (e)=>{
        e.preventDefault();
        console.log(fname , termCondition ,intrest);
        e.preventDefault();

    }
    const[fname , setFname] = useState("");
    const[termCondition , setTermCondition] = useState(false);
    const[intrest , setIntrest] = useState("");
  return (
      <>
    <div>
      <h1>Form Handle in React Js</h1>
    </div>
    <form onSubmit={getFormData}>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setFname(e.target.value)} /> <br/><br/>
        <select onChange={(e)=>setTermCondition(e.target.value)}>
            <option>Select Option</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React Js</option>
        </select> <br/><br/>
        <input type="checkbox" onChange={(e)=>setIntrest(e.target.checked)}/><span>Accept Terms & Conditions</span>
        <br/><br/>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}
