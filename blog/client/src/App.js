import React, { useState } from "react";
import PostCreate from "./PostCreate";
import PostsList from "./PostsList";

function App() {
  const [isChange, setIschange] =useState(true);
  const handleChange =() => {
    setIschange(!isChange);
  };
  
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate handleChange={handleChange}/>
      <PostsList isChange={isChange}/>
    </div>  
  );
}

export default App;
