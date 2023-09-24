import React from 'react'
import "./Write.css"
const Write = () => {
  return (
    <div className='write'>
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/12513.jpg" className='writeImg' alt="Image" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display: 'none'}}/>
            <input className='writeInput' type="text" placeholder='Title' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea className='writeInput writeText' type="text" placeholder='Tell your story...'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
