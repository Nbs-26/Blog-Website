import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">
            Login
        </span>
      <form className="loginForm">
        <label>Email: </label>
        <input type="email" className='loginInput' placeholder='Enter your email...'/>
        <label>Password: </label>
        <input type="password" className='loginInput' placeholder='Enter your password...'/>
        <button className="loginBtn">Login</button>
      </form>
        <button className="loginRegisterBtn">
          <Link to='/register' className='link'>Register</Link>
        </button>
    </div>
  )
}

export default Login