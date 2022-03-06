import React from 'react'

export default function HocGreen(props) {
    return (
        <>
        <div style={{backgroundColor:'green',width:'25%',borderRadius:'10px'}}>
            <h2><props.cmp /></h2>
        </div>
        </>
    )
}
