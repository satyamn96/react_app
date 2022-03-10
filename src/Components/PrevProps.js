import React,{useState} from 'react'
import PrevPropsChild from './PrevPropsChild'

export default function PrevProps() {

    const [count, setCount] = useState(0);
    return (
        <>
            <div className="app">
                <h1>Previous State Using Props</h1>
                <PrevPropsChild count={count}/>
                <button onClick={()=>setCount(Math.floor(Math.random()*100))}>Update Counter</button>
            </div>
        </>
    )
}
