import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const header = () => {
  return (
    <div className="header">
      <img src={logo} alt=""  className='logo'/>
    </div>
  )
}

export default header