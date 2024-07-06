// App.js
import React, { useState, useMemo } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Missing from './Missing';
import Nav from './Nav';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Postlayout from './Postlayout';
import Feed from './Feed';
import './App.css';

function App() {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [search, setSearch] = useState('');
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (post) => {
    if (!search) {
      return post;
    }
    return post.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredPosts = useMemo(() => handleSearch(post), [post, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = post.length ? post[post.length - 1].id + 1 : 1;
    const datetime = new Date().toISOString();
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...post, newPost];
    setPost(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/home');
  };

  const handleDelete = (id) => {
    const updatedPosts = post.filter((item) => item.id !== id);
    setPost(updatedPosts);
  };

  return (
    <div className="App">
      <header>
        <div className='header'>
       <h1 >To do Listapp</h1>
       </div>
      </header>
      <div className='headicons'>
        <ul>
          <li><Link to='home'>Home</Link></li>
          <li><Link to='newpost'>New Post</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path='home' element={<Home post={filteredPosts} search={search} setSearch={setSearch} handleDelete={handleDelete} />} />
        <Route path='newpost' element={<Newpost handleSubmit={handleSubmit} setPostTitle={setPostTitle} setPostBody={setPostBody} />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
