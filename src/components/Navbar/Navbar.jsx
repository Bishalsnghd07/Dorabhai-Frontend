import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/dbdonelog 2.png'
import logo2 from '../../assets/Dorabhai_Sticker (1) 2.png'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='main-nav'>
        <div className="navbar">
            <Link to='/' className='nav-item'>
                <img src={logo1} alt='logo' width='70px'/>
            </Link>
            <Link to='/' className='nav-item'>
                <img src={logo2} alt="logo" width='150px'/>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
