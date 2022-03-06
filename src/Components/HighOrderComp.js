import React,{useState} from 'react'

export default function HighOrderComp() {
    // console.log('Hello HOC !!')
    const[count , setCount] = useState(0);
const Counter = ()=>{
    setCount(count+1);
}
  return (
    <div className="counter">
        <h2>Count : {count}</h2>
        <button onClick={Counter}>Update Counter</button>
    </div>
  )
}
