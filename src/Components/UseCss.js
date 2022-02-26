import React from 'react'
import style from './custom.module.css'
export default function UseCss() {
  return (
    <div>
      <h1 style={{color: 'green',backgroundColor: '#000'}}>Style Type 1 is In React Js !!</h1>
      <h1 className="primary">Style Type 2 is In React Js !!</h1>
      <h1 className={style.success}>Style Type 3 is In React Js !!</h1>
      <h1 className={style.success1}>Style Type 4 is In React Js !!</h1>
    </div>
  )
}
