import React from 'react';
import '../Bannar/Bannar.css';
import NatureVid from '../../assets/video/main-video.mp4';

const Bannar = () => {
    return (
        <div className="bannar-section">
            <video autoPlay loop muted className="main-bannar">
                <source src={NatureVid} type="video/mp4" />
            </video>

            <div className="container">
                <p className="section-title">Our Packages</p>
                <h3 className="section-heading">Search Your Destination</h3>

                <div className="search-bar">
                    <div className="input-group">
                        <label>Search your Destination</label>
                        <input type="text" placeholder="Dubai" />
                    </div>

                    <div className="input-group">
                        <label>Date</label>
                        <input type="date" />
                    </div>

                    <div className="input-group">
                        <label>Max Price</label>
                        <div className="price-range">
                            <input type="range" min="5000" max="50000" />
                            <span className="price">₹15000</span>
                        </div>
                    </div>

                    <button className="search-btn">Search Now</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
