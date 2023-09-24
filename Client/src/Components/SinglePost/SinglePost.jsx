import React from 'react'
import "./SinglePost.css"
const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className='singlePostImage' src="https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Single Post Image" />
        <h1 className="singlePostTitle">Shinzou Sasageyo
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Sai</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quae ex, voluptatum quam maxime incidunt ipsa, earum esse exercitationem ullam officia. Assumenda, ratione eius! Eos aspernatur cumque quia neque at molestias modi consequuntur pariatur?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quae ex, voluptatum quam maxime incidunt ipsa, earum esse exercitationem ullam officia. Assumenda, ratione eius! Eos aspernatur cumque quia neque at molestias modi consequuntur pariatur?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quae ex, voluptatum quam maxime incidunt ipsa, earum esse exercitationem ullam officia. Assumenda, ratione eius! Eos aspernatur cumque quia neque at molestias modi consequuntur pariatur?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quae ex, voluptatum quam maxime incidunt ipsa, earum esse exercitationem ullam officia. Assumenda, ratione eius! Eos aspernatur cumque quia neque at molestias modi consequuntur pariatur?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quae ex, voluptatum quam maxime incidunt ipsa, earum esse exercitationem ullam officia. Assumenda, ratione eius! Eos aspernatur cumque quia neque at molestias modi consequuntur pariatur?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quae ex, voluptatum quam maxime incidunt ipsa, earum esse exercitationem ullam officia. Assumenda, ratione eius! Eos aspernatur cumque quia neque at molestias modi consequuntur pariatur?
        </p>
      </div>
    </div>
  )
}

export default SinglePost
