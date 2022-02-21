import React from 'react'

export default function SuperChild(props) {
  return (
    <div>
      <h3>Super Child</h3>
      <br/>
      <button onClick={props.superchild}>Get data</button>
      <br/>
      <br/>
    </div>
  )
}
