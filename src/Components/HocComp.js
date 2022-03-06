import React from 'react'

export default function HocCompRed(props) {
    return (
        <>
        <h1 style={{backgroundColor:'skyblue'}}>High Order Components</h1>
        <div style={{backgroundColor:'red',width:'25%',borderRadius:'5%'}}>
            <h2><props.cmp /></h2>
        </div>
        </>
    )
}
