import React from 'react'
import {Table} from 'react-bootstrap'
export default function BootstrapList() {

    const students = [
        { name: 'Sam', email: 'sam123@gmail.com', address:[
            {House_No: '123456',City:'New Delhi',Country:'India',Mobile:'2563'},
            {House_No: '859623',City:'Delhi',Country:'India',Mobile:'0213'},
            {House_No: '183465',City:'Noida',Country:'India',Mobile:'08596'},
            {House_No: '012013',City:'Gurgaon',Country:'India',Mobile:'11001'}
        ]},
        { name: 'John', email: 'john321@gmail.com', address:[
            {House_No: '859612',City:'New Delhi',Country:'India',Mobile:'2563'},
            {House_No: '123456',City:'Delhi',Country:'India',Mobile:'0213'},
            {House_No: '000000',City:'Noida',Country:'India',Mobile:'08596'},
            {House_No: '124563',City:'Gurgaon',Country:'India',Mobile:'11001'}
        ]},
        { name: 'Max', email: 'max123@gmail.com',address:[
            {House_No: '123456',City:'New Delhi',Country:'India',Mobile:'2563'},
            {House_No: '859623',City:'Delhi',Country:'India',Mobile:'0213'},
            {House_No: '183465',City:'Noida',Country:'India',Mobile:'08596'},
            {House_No: '012013',City:'Gurgaon',Country:'India',Mobile:'11001'}
        ]},
        { name: 'Michel', email: '123michel@gmail.com',address:[
            {House_No: '123456',City:'New Delhi',Country:'India',Mobile:'2563'},
            {House_No: '052410',City:'Delhi',Country:'India',Mobile:'0213'},
            {House_No: '521020',City:'Noida',Country:'India',Mobile:'08596'},
            {House_No: '123456',City:'Gurgaon',Country:'India',Mobile:'11001'}
        ]}
    ]
  return (
    <>
    <div className="app">
      <h1>Nested Array Listing </h1>

    </div>
    <div className="App">
    <Table striped bordered hover variant='dark'>
          <tbody>
              <tr>
                  <td>S.No</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Address</td>
              </tr>
              {
                students.map((item,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <Table striped bordered hover variant='primary'>
                                <tbody>
                            {
                                item.address.map((adress)=>
                                <tr key={i} >
                                    <td>{adress.House_No}</td>
                                    <td>{adress.City}</td>
                                    <td>{adress.Country}</td>
                                    <td>{adress.Mobile}</td>
                                </tr>
                                )
                            }
                            </tbody>
                            </Table>
                        </td>
                    </tr>
                )
             }
          </tbody>
      </Table>
    </div>
    </>
  )
}