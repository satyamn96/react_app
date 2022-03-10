import React, { useEffect, useRef } from 'react'

export default function PrevPropsChild(props) {
    const lastValue = useRef();
    useEffect(() => {
        lastValue.current = props.count;
        console.log(lastValue.current);
    })
    const prevProps = lastValue.current;
    return (
        <>
            <h2>Current Counter Value : {props.count}</h2>
            <br />
            <h2>Previous Counter Value : {prevProps}</h2>
            <br />
        </>
    )
}
