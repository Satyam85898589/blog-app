// src/components/BlogList.js
import React from 'react';

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
