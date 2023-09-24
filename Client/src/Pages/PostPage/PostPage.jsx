import React from 'react'
import "./PostPage.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import SinglePost from '../../Components/SinglePost/SinglePost'
const PostPage = () => {
  return (
    <div className='postPage'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default PostPage
