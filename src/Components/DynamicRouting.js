import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
function DynamicRouting(props) {

    // console.log(props.match.params.id)
    // console.log(props.match.params.name)
    const users = [
        { id: 1, name: 'Sam', email: 'sam123@gmail.com', address: 'Delhi' },
        { id: 2, name: 'Mark', email: '253mark@gmail.com', address: 'Noida' },
        { id: 3, name: 'Bouncer', email: 'bouncer451@gmail.com', address: 'New Delhi' },
        { id: 4, name: 'Michel', email: '152michel@gmail.com', address: 'Gurgaon' },
        { id: 5, name: 'Jhon', email: 'john152@gmail.com', address: 'Mumbai' }
    ]
    return (
        <div className="app">
            <h1>React Dynamic Routing</h1>
            {/* <p>Hi The User Id Is :  {props.match.params.id}</p>
            <p>User Name Is : {props.match.params.name}</p> */}
            <ol>
                {
                    users.map((item) =>
                        <li key={item.id}><Link to={"/user/" + item.name + "/" + item.id}>{item.name}</Link></li>
                    )
                }
            </ol>
        </div>
    )
}
export default withRouter(DynamicRouting);