import React from 'react'

export default function HocBlue(props) {
    return (
        <>
        <div style={{backgroundColor:'blue',width:'25%',borderRadius:'5%'}}>
            <h2><props.cmp /></h2>
        </div>
        </>
    )
}
