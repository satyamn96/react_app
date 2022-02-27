import React from 'react'

export default function ComponentLoopChild(props) {
    const texts = "Harry Potter !!";
  return (
   <>
    <div className="comp-loop">
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <span>{props.data.address}</span>
        <span>{props.data.phone}</span>
    </div>
    <h2>Greetings : {props.test}</h2>
    <button onClick={()=>props.testing(texts)}>Click Me</button>
   </>
  )
}
