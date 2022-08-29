import React from 'react'
import logo from "../../img/Logo.png"

function Header() {
  return (
    <div className='header'>
        <div>Home</div>
        <div>About</div>
        <img className="logo" src={logo} alt={'logo'}/>
        <div>Work</div>
        <div>Contact</div>
    </div>
  )
}

export default Header