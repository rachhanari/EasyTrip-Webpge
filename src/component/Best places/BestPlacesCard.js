import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import "./BestPlaces.css";

const BestPlacesCard = ({ img, title, location, description, price, type }) => {
  const shortDescription = description ? description.split(" ").slice(0, 20).join(" ") + "..." : "No description available";

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  return (
    <Link
      to={`/best-places/${title}`} 
      onClick={() => window.scrollTo(0, 0)}
      state={{ img, title, location, description, price, type }}
    >
      <div className={`main-container ${animate ? "animate" : ""}`}>
        <div className={`mini-div ${animate ? "animate" : ""}`}> 
          <img src={img} alt={title} className="data-images" />
        </div>

        <div className="content">
          <h1 className="title">{title}</h1>
          <h3>
            <MdLocationPin /> {location}
          </h3>
          <p className="description">{shortDescription}</p>
        </div>

        <hr />

        <div className="bottom-content">
          <h3>{type}</h3>
          <h2>₹{price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BestPlacesCard;
