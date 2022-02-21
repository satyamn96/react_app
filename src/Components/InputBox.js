import React,{useState} from 'react'

export default function InputBox() {

    const[data , setData] = useState(null);
    const[value , setValue] = useState(false);
    const getData = (val)=>{
        console.log(val.target.value);
        setData(val.target.value);
        setValue(false);
    }
  return (
    <div>
      <h1>Getting Input Box Value</h1>
        {
            value?
      <h2>{data}</h2>
            :null
        }
      <input type="text" onChange={getData} />
      <button onClick={()=>setValue(true)}> Get Data</button>
    </div>
  )
}
