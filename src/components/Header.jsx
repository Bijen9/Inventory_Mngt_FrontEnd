import React from 'react'
import '../stylesheets/header.css'
import emblem from '../assets/emblem.png'
export const Header = () => {
  return (
    <div className='header'>
        <h1 className='title'>
            Dhulikhel Municipality Office<br/>
            <h3>
                Inventory Management System
            </h3>
        </h1>  
            <img src={emblem} alt="Emblem of Nepal"className='emblem' />
    </div>
  )
}
export default Header;
