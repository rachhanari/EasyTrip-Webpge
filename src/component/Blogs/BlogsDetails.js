import React from "react";
import { useLocation } from "react-router-dom";
import "./Blogs.css";
import Blogs from "./Blogs"

const BlogDetails = () => {
  const location = useLocation();
  const { image, date, title, description, author } = location.state;

  

  return (
    <div>

    
    <div className="blog-details-container">
        <div className="image-div">
      <img src={image} alt={title} className="blog-details-image" />
      </div>
      <div className="blog-details-content">
        <h1 className="blog-details-title">{title}</h1>
        <p className="blog-details-meta">
          {date} | By {author}
        </p>
        <p className="blog-details-description">{description}</p>
      </div>
    </div>
<Blogs />
    </div>

    
  );
};

export default BlogDetails;
