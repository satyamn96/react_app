import React,{useState} from 'react'

export default function Student(p) {
    const[data ,setData] = useState("Anonymous")
  return (
    <div style={{backgroundColor: 'skyblue',margin:10}}>
      <h1>Hello  & {data}</h1>
      <h2>Email-Id : {p.email}</h2>
      <h3>Address: {p.other.address}</h3>
      <h4>Mobile-No. : {p.other.mobile}</h4>
      <button onClick={()=>{setData("Tom and Jerry !!")}}>Update Name</button>
    </div>
  )
}
