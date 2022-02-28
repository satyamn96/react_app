import React, { useState ,useMemo } from 'react'
export default function UseMemo() {

    const [count, setCount] = useState(1);
    const [item, setItem] = useState(10);

    // function multiCount(){
    //     console.log("Multi Count Rendered");
    //     return count*2;
    // }
    const multiCounts = useMemo(()=>{
        console.log("New Multi-Count Rendered");
        return count*4;
    },[count]);
    return (
        <>
        <h1>UseMemo Hook In React JS</h1>
            <div className="app">
                <div>
                    <h1>Count : {count}</h1>
                    <button onClick={() => setCount(count + 1)}>Update Count</button>
                </div>
                {/* <h3>Multi-Count : {multiCount()}</h3> */}
                <h2>New Multi-Count : {multiCounts}</h2>
                <div>
                    <h1>Item : {item}</h1>
                    <button onClick={() => setItem(item * 2)}>Update Count</button>
                </div>
                    <br/>
            </div>
        </>
    )
}
