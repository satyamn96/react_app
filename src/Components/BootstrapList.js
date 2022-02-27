import React from 'react'
import {Table} from 'react-bootstrap'
export default function BootstrapList() {

    const contacts = [
        { name: 'Sam', email: 'sam123@gmail.com', address: 'Delhi' ,phone: '111'},
        { name: 'John', email: 'john321@gmail.com', address: 'New Delhi',phone: '111' },
        { name: 'Max', email: 'max123@gmail.com', address: 'Noida',phone: '0000'}
    ]
  return (
    <>
    <div className="app">
      <h1>Listing With Bootstrap Table</h1>
      
    </div>
    <div className="App">
    <Table striped bordered hover>
          <tbody>
              <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Address</td>
                  <td>Phone</td>
              </tr>
              {
                  contacts.map((item,i)=>
                  item.phone === '111'?
              <tr key={i} >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
              </tr>:null
              )
}
          </tbody>
      </Table>
    </div>
    </>
  )
}
