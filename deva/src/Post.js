import React from 'react';
import './post.css';
const Post = ({ post, handleDelete }) => {
  return (
    <div className='card'>
      
      <h1 className='card-body'>{"Title: "+post.title}</h1>
      <p className='card-text'>{" work :"+post.body}</p>
      <button  onClick={() => handleDelete(post.id)}>Delete</button>
      
    </div>
  );
};

export default Post;
