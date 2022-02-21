import React from 'react'
import SuperChild from './SuperChild'
export default function FunctionProps(props) {
  return (
      <>
    <div>
      <h2>Pass Function as props</h2>
      <button onClick={props.data}> Get Data</button>
    </div>
    <div className="app">
        <SuperChild  superchild={props.data}/>
    </div>
    </>
  )
}
