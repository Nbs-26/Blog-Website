import React from 'react'
import "./Post.css"
const Post = ({post}) => {
  return (
    <div className='post'>
      {post.photo &&
      <img className='postImg' src={post.photo} alt="Post" />
      }
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat)=>(
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        <span className="postTitle">{post.title}</span>
        <hr/>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='postDesc'>
        {post.desc}
      </p>
    </div>
  )
}

export default Post
