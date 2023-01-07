import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
// import Icon1 from '../../assets/GoodMorning.png'
import Icon2 from '../../assets/Vector.png'
import Icon3 from '../../assets/Vector (1).png'
import Icon4 from '../../assets/wallet-solid.png'
import Icon5 from '../../assets/user-solid.svg'
import Icon6 from '../../assets/Vector (3).png'
// import Icon7 from '../../assets/small-instagram-icon-0.png'


const LeftSidebar = () => {
  return (
    <>

    <div className='left-sidebar'>
      <nav className='side-nav'>
        {/* <NavLink className='side-nav-links' activeClass='active'>
          <div>
        <img src={Icon1} alt="Icon1" width='220px' height='270px'/>
          </div>
        </NavLink> */}
        <div className='side-nav-div'>
        <NavLink to='/' className='side-nav-links' activeClass='active'>
        <img src={Icon2} alt="Icon2" />
        <p>Home</p>
        </NavLink>

          <NavLink to='/Library' className='side-nav-links' activeClass='active'>
          <img src={Icon3} alt="Icon3" />
            <p>Library</p>
          </NavLink>       
          <NavLink to='/My Courses' className='side-nav-links' activeClass='active'>
          <img src={Icon4} alt="Icon4" width='25px' />
            <p>My Courses</p>
          </NavLink>   
          <NavLink to='/Account' className='side-nav-links' activeClass='active'>
          <img src={Icon5} alt="Icon5"  width='25px' />
            <p>Account</p>
          </NavLink>    
          <NavLink to='/Blog' className='side-nav-links' activeClass='active'>
          <img src={Icon6} alt="Icon6" />
            <p>Blog</p>
          </NavLink>   
           {/* <NavLink to='/Follow us on' className='side-nav-links' activeClass='active'>
          <img src={Icon7} alt="Icon7" width='20px' />
            <p>Follow us on</p>
            <div>
              <a href="https://instagram.com"></a>
            </div>
          </NavLink> */}
        </div>
        </nav>
      </div>
    </>
  )
}

export default LeftSidebar