import React from "react";
import { useLocation } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import "./BestPlaces.css"

const BestPlaceDetails = () => {
  const location = useLocation();
  const { img, title, description, price, type, location: placeLocation } = location.state || {};

  if (!img || !title) {
    return <h2 className="no-details">No place details available. Please go back and select a place.</h2>;
  }

  return (
    <div className="places-details-container">
      <div className="places-image">
        <img src={img} alt={title} className="details-image" />
      </div>
      <div className="places-details-content">
        <h1 className="places-details-title">{title}</h1>
        <h3 className="places-details-meta">
          <MdLocationPin /> {placeLocation}
        </h3>
        <p className="places-details-description">{description}</p>
        <h4>Type: {type}</h4>
        <h3>Price: ₹{price}</h3>
      </div>
    </div>
  );
};

export default BestPlaceDetails