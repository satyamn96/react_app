import React from 'react'
import ComponentLoopChild from './ComponentLoopChild'

export default function ComponentLoop() {

  const users = [
    { name: 'Sam', email: 'sam123@gmail.com', address: 'Delhi', phone: '111' },
    { name: 'John', email: 'john321@gmail.com', address: 'New Delhi', phone: '111' },
    { name: 'Max', email: 'max123@gmail.com', address: 'Noida', phone: '000' }
  ]
  const textData = "Hello Everyone !!"

  const testText = (message)=>{
    alert(message)
  }
  return (
    <div>
      <h1 className="app">Reuse Component With Loop</h1>
      {
        users.map((item) =>
         <ComponentLoopChild data={item} test={textData} testing={testText}/>
        )
      }
    </div>
  )
}
