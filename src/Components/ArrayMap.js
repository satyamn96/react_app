import React from 'react'

export default function ArrayMap() {

    const students = ['Harry', 'Mach', 'Rohn', 'Jerry'];
    const contacts = [
        { name: 'Sam', email: 'sam123@gmail.com', address: 'Delhi' },
        { name: 'John', email: 'john321@gmail.com', address: 'New Delhi' },
        { name: 'Max', email: 'max123@gmail.com', address: 'Noida' }
    ]

    return (
        <>
            <h1>Handle Array With List</h1>
            <div className="app">
                {
                    students.map((item) =>
                        <h1>{item}</h1>
                    )
                }
            </div>
            <div className="App" style={{textAlign: 'center'}}>
                <center>
                <table border="1">
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                    {
                        contacts.map((contact) =>
                            <tr>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.address}</td>
                            </tr>
                        )
                    }
                </table>
                </center>
            </div>
        </>
    )
}
