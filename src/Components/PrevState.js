import React,{useState} from 'react'

export default function PrevState() {

    const[count, setCount] = useState(0);
    const previousState = ()=>{
        // let randm =(Math.floor(Math.random() * 100))
        // setCount((prev)=>{
        //     console.log(prev);
        //     if((randm)<20){
        //         alert('The Value is Less Then 20');
        //     }
        //     return randm;
        // });

        for(let i=0; i<5; i++ ){
            setCount((prev)=>{
                return prev+1;
            });
        }
        
    }
  return (
    <>
    <div className="app">
      <h1>Know the Previous State Using useState </h1>
      <h1>{count}</h1>
      <button onClick={previousState}>Update</button>
      </div>
    </>
  )
}
