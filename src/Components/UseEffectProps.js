import React, {useEffect} from 'react'

export default function UseEffectProps(props) {

    useEffect(()=>{
        console.log("UseEffect Count Is: " + props.count);
    },[props.count])
    useEffect(()=>{
        alert("UseEffect Data is : " + props.data);
    },[props.data])
    return (
        <>
            <div className="app">
                <h1>Counter : {props.count}</h1>
                <br />
                <h1>Data : {props.data}</h1>
            </div>
        </>
    )
}
