import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LoginPage/Login";
import Write from "./Pages/NewPost/Write";
import PostPage from "./Pages/PostPage/PostPage";
import Profile from "./Pages/ProfilePage/Profile";
import Register from "./Pages/RegisterPage/Register";

function App() {
  const user=true; 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="/register" element={user? <Home/>: <Register/>}></Route>
      <Route path="/login" element={user? <Home/>: <Login/>}></Route>
      <Route path="/write" element={user? <Write/>: <Register/>}></Route>
      <Route path="/profile" element={user?<Profile/>:<Register/>}></Route>
      <Route path="/post/:postId" element={<PostPage/>}></Route>
      {/* <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route> */}
    </Routes>
    </>
  );
}

export default App;
