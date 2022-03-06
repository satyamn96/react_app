import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <ul style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',listStyle:'none',backgroundColor:'#000',color:'#fff',padding:'10px'}}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/contact'>Blog</Link>
      </ul>
    </div>
  )
}
