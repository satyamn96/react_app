import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
export default function FetchApi() {
  const [data, setUdata] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [getId, setGetId] = useState(null);
  useEffect(() => {
    // saveUser();
    getList();
  }, []);
  const getList = () =>{
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setUdata(resp);
        setName(resp[0].name);
        setEmail(resp[0].email);
        setMobile(resp[0].mobile);
        setGetId(resp[0].id);
      })
    })
  }
  // const saveUser = () => {
  //   // console.warn(name,email,mobile);
  //   let userData = { name, email, mobile };
  //   fetch('http://localhost:3000/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(userData)
  //   }).then((result) => {
  //     console.warn("result : ", result);
  //     result.json().then((respons) => {
  //       console.warn("responses : ", respons);
  //       getList();
  //     })
  //   })
  // }
  const deleteUser = (userId)=>{
    // console.log("User Id", userId);
    fetch(`http://localhost:3000/posts/${userId}`,{
      method: 'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
        getList();
      })
    })
  }
  const selectUser = (userId)=>{
    console.log("Selected User Id : ",userId ,data[userId-1]);
    let selectItem = data[userId-1];
    setName(selectItem.name);
    setEmail(selectItem.email);
    setMobile(selectItem.mobile);
    setGetId(selectItem.id);
  }
  const updateUser = ()=>{
    console.log(name,email,mobile,getId)
    let getUpdate = {name,email,mobile,getId};
    fetch(`http://localhost:3000/posts/${getId}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(getUpdate)
    }).then((result)=>{
      result.json().then((respns)=>{
        console.log(respns);
        getList();
      })
      
    })

  }
  return (
    <>
      <div className="app">
        <h1>Fetch API GET Method</h1>
        {/* <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" /><br /><br />
        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" /><br /><br />
        <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} name="mobile" /><br /><br />
        <button type="button" onClick={saveUser}>Save New User</button> */}
      </div>
      <div style={{display: 'flex' ,flexWrap:'wrap'}}>
   <div style={{flex:'70%'}}>
      <Table border="1">
          <tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Update </td>
            </tr>
            {
              data.map((item, i) =>
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                  <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
                </tr>
              )
            }
          </tbody>
        </Table>
        </div>
        <div style={{flex:'30%',alignItems: 'center',justifyContent: 'center'}}>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" /><br /><br />
        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" /><br /><br />
        <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} name="mobile" /><br /><br />
        <button type="button" onClick={updateUser}>Update User</button>
        </div>
        </div>
    </>
  )
} 
