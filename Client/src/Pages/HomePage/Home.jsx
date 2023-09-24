import React, { useState,useEffect } from 'react'
import "../HomePage/Home.css"
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Posts from '../../Components/Posts/Posts'
import axios from "axios"
const Home = () => {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=await axios.get("/posts")
      setPosts(res.data);
      console.log(posts)
    }
    fetchPosts();
  },[])
  return (
    <>
      <Header/>
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Home
