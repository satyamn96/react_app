import React,{useEffect , useState} from 'react'

export default function FetchApi() {

    const[data , setData] =useState();
    useEffect(()=>{
        fetch("http://localhost:3000/users").then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                setData(resp);
            })
        })
    },[])
  return (
    <div className="app">
      <h1>Fetch API GET Method</h1>
     
     
    </div>
  )
}
