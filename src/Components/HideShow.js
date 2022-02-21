import React,{useState} from 'react'

export default function HideShow() {
    const[status , setStatus] = useState(true);
  return (
      <>
    <div style={{height:70}}>
        {
         status?
      <h1>Hide & Show !!</h1>
      :null
    }
    </div>
    <button style={{margin:5}} onClick={()=>setStatus(false)}>Hide</button>
    <button style={{margin:5}} onClick={()=>setStatus(true)}>Show</button>
    <button style={{margin:5}} onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  )
}
