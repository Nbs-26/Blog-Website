import React from 'react'
import "./Profile.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
const Profile = () => {
  return (
    <div className='profile'>
      <div className="profileWrapper">
        <div className="profileTitle">
            <span className="profileUpdateTitle">Update Your Account</span>
            <span className="profileDeleteTitle">Delete Account</span>
        </div>
        <form className="profileForm">
            <label>Profile Picture</label>
            <div className="profilePicture">
                <img src="https://wallpapers.com/images/featured-small/4k-oaax18kaapkokaro.webp" alt="Profile Picture" />
                <label htmlFor="fileInput">
                    <i className="profilePictureIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display :'none'}}/>
            </div>
            <label>Username: </label>
            <input type="text" placeholder='Nbs'/>
            <label>Email: </label>
            <input type="email" placeholder='nbs@gmail.com'/>
            <label>Password: </label>
            <input type="password"/>
            <button className="profileUpdateBtn">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Profile
