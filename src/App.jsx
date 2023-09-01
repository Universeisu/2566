import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Component/Post'
import PostFunction from './Component/PostFunction'
import comment from './Component/comment'



function App() {
  

  return (
    <>
     <Post userID="Arthittaya"
     message="ดีใจ"/>
     <Comment userID="lo" message="i am hunry"/>
     <PostFunction />
    </>
  );
}

export default App;
