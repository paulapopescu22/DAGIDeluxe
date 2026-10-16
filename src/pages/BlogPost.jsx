import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "./Blog.css";
import "./BlogPost.css";
import blogPosts from "./blogData";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => String(p.id) === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-hero">
        <img src={post.img} alt={post.title} className="blog-post-img" />
      </div>

      <div className="blog-post-content">
        <Link to="/blog" className="blog-post-back">
          ← Înapoi la Blog
        </Link>

        <h1 className="blog-post-title">{post.title}</h1>

        {post.content.map((paragraph, index) => (
          <p key={index} className="blog-post-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
