import React from 'react';
import './Newpost.css';
const Newpost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
  return (
    <main className='Newpost'>
      <h2>New post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id="postTitle" 
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <label htmlFor='postBody'>Post:</label> {/* Fixed label typo */}
        <input
          id="postBody" 
          type="text"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button> {/* Added button text */}
      </form>
    </main>
  );
};

export default Newpost;
