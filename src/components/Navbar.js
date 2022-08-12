import React from 'react'
import logo from '../images/Airbnb_Logo_Bélo.svg.png'

const navbar = () => {
  return (
    <nav>
        <img src={logo} alt='logo-airbnb' className='nav--logo'/>
    </nav>
  )
}

export default navbar
