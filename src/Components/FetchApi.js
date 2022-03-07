import React, { useEffect, useState } from 'react'

export default function FetchApi() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [udata, setUdata] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setUdata(resp);
      })
    })
  }, []);
  const saveUser = () => {
    // console.warn(name,email,mobile);
    let userData = { name, email, mobile };
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((result) => {
      console.warn("result : ", result);
      result.json().then((respons) => {
        console.warn("responses : ", respons);
      })
    })
  }
  return (
    <>
      <div className="app">
        <h1>Fetch API GET Method</h1>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" /><br /><br />
        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" /><br /><br />
        <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} name="mobile" /><br /><br />
        <button type="button" onClick={saveUser}>Save New User</button>
      </div>
    </>
  )
} 
