import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const user=true;
  return (
    <div className='navbar'>
      <div className="navLeft">
        <i className="navIcon fa-brands fa-square-facebook"></i>
        <i className="navIcon fa-brands fa-square-instagram"></i>
        <i className="navIcon fa-brands fa-pinterest"></i>
        <i className="navIcon fa-brands fa-square-twitter"></i>
      </div>
      <div className="navCenter">
        <ul className='navList'>
          <li className='navListItem'>
            <Link to="/" className='link'>HOME</Link>
          </li>
          <li className='navListItem'>
            <Link to="/" className='link'>ABOUT</Link>
          </li>
          <li className='navListItem'>
            <Link to="/" className='link'>CONTACT</Link>
          </li>
          <li className='navListItem'>
            <Link to="/write" className='link'>WRITE</Link>
          </li>
          <li className='navListItem'>
            <Link to="/" className='link'>
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        {
          user?(
            <Link to='/profile'>
              <img className='navImage' src='https://e0.pxfuel.com/wallpapers/629/782/desktop-wallpaper-hrithik-roshan-body.jpg' alt='ProfileImage'/>
            </Link>
          ):(
            <ul className='navList'>
              <li className="navListItem">
                <Link to="/login" className='link'>LOGIN</Link>
              </li>
              <li className="navListItem">
                <Link to="/register" className='link'>REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i class="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar