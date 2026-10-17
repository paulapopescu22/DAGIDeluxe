import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogPosts from "./blogData";

function Blog() {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog</h1>
      <p className="blog-intro"></p>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
            <div className="blog-img-wrap">
              <img src={post.img} alt={post.title} className="blog-img" />
              <div className="blog-img-overlay"></div>
              <div className="blog-emoji">📖</div>
            </div>
            <div className="blog-text">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <span className="blog-readmore">Citește mai departe →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
