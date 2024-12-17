import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
import { useState, useEffect } from "react";

const BlogCard = ({ image, date, title, description, author }) => {
  const shortDescription = description.split(" ").slice(0, 20).join(" ") + "...";

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
          setTimeout(() => {
              setAnimate(true);
          }, 200);
      }, []);

  return (
    <Link
      to={`/blogs/${title}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      state={{ image, date, title, description, author }}
    >
      <div className={`main-container ${animate ? 'animate' : ''}`}>
        <div className={`mini-div  ${animate ? 'animate' : ''}`}>
          <img src={image} alt="No image" className="data-images" />
        </div>
        <div className="content">
          <p>{date}</p>
          <p className="content-p">By {author}</p>
        </div>
        <div className="title-div">
          <h1 className="title">{title}</h1>
          <p className="description">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
