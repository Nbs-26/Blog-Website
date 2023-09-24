import React from 'react'
import "../Header/Header.css"
import image from "../../Assets/HeaderImage.jpg"
const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>BLOG</span>
        </div>
        <img className='headerImg' src={image} alt='headerimage'/>
    </div>
  )
}

export default Header
