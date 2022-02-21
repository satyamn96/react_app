import React,{useState} from 'react';

function Condition(){

    const[loged , setLog] = useState(0)

    // let loged = 0;

    return(
        <>
        <div className="app">
            {loged===0?<h1>Hello Condition Based User - 1 Loged Component</h1>:loged===2?<h1>Hello Condition Based User - 2 Loged Component</h1>:<h1>Hello Condition Based User - 3 Component</h1>}
        </div>
        </>
    )
}

export default Condition;