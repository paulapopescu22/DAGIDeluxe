import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Cum să alegi mobila perfectă pentru living",
    description: "Sfaturi esențiale pentru alegerea mobilierului care să se potrivească perfect în spațiul tău și să fie funcțional.",
    img: "/images/blog.png",
  },
  {
    id: 2,
    title: "Tendințe de design pentru dormitoare moderne",
    description: "Află cum culorile, materialele și iluminatul transformă dormitorul într-un spațiu de relaxare perfect.",
    img: "/images/blog.png",
  },
  {
    id: 3,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
  {
    id: 4,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
  {
    id: 5,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
  {
    id: 6,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
  {
    id: 7,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
  {
    id: 8,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
  {
    id: 9,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
  {
    id: 10,
    title: "Organizarea eficientă a holului și dressingului",
    description: "Idei pentru a folosi la maxim spațiile mici și a menține ordinea fără compromisuri estetice.",
    img: "/images/blog.png",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog</h1>
      <p className="blog-intro">
      </p>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.img} alt={post.title} className="blog-img" />
            <div className="blog-emoji">📖</div>
            <div className="blog-text">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
