import React from 'react'
import './HomeMainbar.css'
import Icon7 from '../../assets/Rectangle 7499.png'
import Icon8 from '../../assets/GoodMorning.png'
import Icon9 from '../../assets/BodyImage1.png'
import Icon10 from '../../assets/RingTheory.png'
import Icon11 from '../../assets/Algebra.png'
import Icon12 from '../../assets/PartialDt.png'
import Icon13 from '../../assets/Mechanics.png'
import Icon14 from '../../assets/Screenshot (291).png'
import Icon15 from '../../assets/Screenshot (292).png'
import Icon16 from '../../assets/Screenshot (293).png'
import Icon17 from '../../assets/Screenshot (294).png'
import Icon18 from '../../assets/Screenshot (295).png'
import Icon19 from '../../assets/PlayStore.png'
import { SocialIcon } from 'react-social-icons'


const HomeMainbar = () => {


  return (
    <div className='main-bar'>
      <div className='main-bar-header1'>
        <div>
            <h1><img src={Icon8} alt='Icon8' width='204px'/></h1> 
        </div>
      </div>

      <div className='main-bar-header2'>
        <div>
        <h1><img src={Icon7} alt='Icon7' width='1000px' height='170px' /></h1>
        </div>
      </div>

      <div className='main-bar-header3'>
        <h1> Semester Courses
        <div>  
          <img src={Icon9} alt='Icon7' width='250px' />
        </div>
          </h1>
      </div>
      <div className='main-bar-header4'>
        <div>  
        <h1><img src={Icon10} alt='Icon10' width='250px' /></h1>
        </div>
      </div>
      <div className='main-bar-header5'>
        <div>  
        <h1><img src={Icon11} alt='Icon11' width='260px' /></h1>
        </div>
      </div>
      <div className='main-bar-header6'>
        <div>  
        <h1><img src={Icon12} alt='Icon12' width='260px'/></h1>
        </div>
      </div>
      <div className='main-bar-header7'>
        <h1> Library
        <div>  
          <img src={Icon13} alt='Icon13' width='200px' height='110px' />
        </div>
          </h1>
      </div>
      <div className='main-bar-header8'>
        <div>  
        <h1><img src={Icon14} alt='Icon14' width='200px' height='110px'/></h1>
        </div>
      </div>
      <div className='main-bar-header9'>
        <div>  
        <h1><img src={Icon15} alt='Icon15' width='200px' height='110px'/></h1>
        </div>
      </div>
      <div className='main-bar-header10'>
        <div>  
        <h1><img src={Icon16} alt='Icon16' width='200px' height='110px'/></h1>
        </div>
      </div>
      <div className='main-bar-header11'>
        <div>  
        <h1><img src={Icon17} alt='Icon17' width='200px' height='110px'/></h1>
        </div>
      </div>
      <div className='main-bar-header12'>
        <div>  
        <h1><img src={Icon18} alt='Icon18' width='200px' height='110px'/></h1>
        </div>
      </div>
      <div className='main-bar-header13'>
        <h1>Follow us on</h1>
        <div>  
        <SocialIcon url="https://instagram.com/" />
        </div>
      </div>
      <div className='main-bar-header14'>
        <div>  
        <SocialIcon url="https://facebook.com/" />
        </div>
      </div>
      <div className='main-bar-header15'>
        <div>  
        <SocialIcon url="https://twitter.com/" />
        </div>
      </div>
      <div className='main-bar-header16'>
        <div>  
        <SocialIcon url="https://youtube.com/" />
        </div>
      </div>
      <div className='main-bar-header17'>
        <div>  
        <h1><img src={Icon19} alt='Icon19' width='298px' height='120px'/></h1>
        </div>
      </div>
    </div>
  )
}

export default HomeMainbar