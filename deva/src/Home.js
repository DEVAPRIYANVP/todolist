import React from 'react';
import './Home.css';
import Feed from './Feed';
import Nav from './Nav';

const Home = ({ post, search, setSearch, handleDelete }) => {
  return (
    <main>
      <Nav search={search} setSearch={setSearch} />
      {post.length ? (
        <Feed post={post} handleDelete={handleDelete} />
      ) : (
        <p>No posts to display</p>
      )}
    </main>
  );
};

export default Home;
