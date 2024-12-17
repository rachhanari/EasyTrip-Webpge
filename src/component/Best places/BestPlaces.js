import React from "react";
import BestPlacesCard from "./BestPlacesCard";
import PlacesData from "./BestPlacesData";
import "./BestPlaces.css";

const BestPlaces = () => {
  return (
    <div className="blogs-container">
      <section className="blogs">
        <h1 className="blogs-title">Best Places to Visit</h1>
        <div className="blogs-grid">
          {PlacesData.map((place, index) => (
            <BestPlacesCard key={index} {...place} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestPlaces;