import React from 'react'
import {Link}  from 'react-router-dom'
import logo from "../../assets/images/KishavSita.png"
function Navbar() {
  return (
    <div>
      <div className='h-[24px] flex border-b-[2px] border-black'>
        <Link to="./" >
        <img src={logo} alt="Logo" className='w-1/2 h-auto ml-[10px]' />
        </Link>

      </div>
    </div>
  )
}

export default Navbar
