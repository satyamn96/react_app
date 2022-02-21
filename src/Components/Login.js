import React, { useState } from 'react'

export default function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const loginHandle = (e) => {
        e.preventDefault();
        // alert("Form Submited");
        if(user.length<3 || password.length<3){
            alert("Please enter Valid User Name & password")
        }
        else{
            alert("Form Submited Successfully");
        }
    }
    const userHandler = (e) => {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true);
        }
        else {
            setUserErr(false);
        }
        setUser(item);
    }
    const PasswordHandler = (e) => {
        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        setPassword(item);
    }
    return (
        <div className="app">
            <h1>Login Form Component</h1>
            <br /><br />
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter User Id" onChange={userHandler} />
                {userErr?<span>Invalid username</span>:""}
                <br /><br />
                <input type="password" placeholder="Enter User Id" onChange={PasswordHandler}/>
                {passErr?<span>Password Invalid</span>:""}
                <br /><br />
                <button type="submit">Login</button>
                <br /><br />
            </form>
        </div>
    )
}
