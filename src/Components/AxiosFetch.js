import React, { useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
export default function AxiosFetch() {

    const [posts, setPosts] = useState([]);
    const getData = () => {
        axios.get("http://localhost:3000/posts")
            .then((response) => {
                console.log(response);
                setPosts(response.data)
            })
    }

    return (
        <>
            <div className="app">
                <h1>Fetch API Using Axios</h1>
                <button onClick={getData}>Get Data</button>
            </div>
            <Table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                    {
                        posts.map((item, i) => {
                            return(
                                <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
