import React from 'react';
import Post from './Post';

const Feed = ({ post, handleDelete }) => {
  return (
    <div>
      {post.map((item) => (
        <Post key={item.id} post={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Feed;
