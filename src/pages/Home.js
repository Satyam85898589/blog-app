// src/pages/Home.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogForm from '../components/BlogForm';
import BlogList from '../components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My Blog</h2>
        <BlogForm addBlog={addBlog} />
        <BlogList blogs={blogs} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
