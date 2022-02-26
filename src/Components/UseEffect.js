import React, { useState, useEffect } from 'react'
import UseEffectProps from './UseEffectProps'

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    return (
        <>
            <div className="app">
                <UseEffectProps count={count} data={data}/>
                <button onClick={() => { setCount(count + 1) }}>Update Count</button>
                <button onClick={() => { setData(data + 1) }}>Update Data</button>
            </div>
        </>
    )
}
