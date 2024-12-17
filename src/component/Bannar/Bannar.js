import React, { useEffect, useState } from 'react';
import '../Bannar/Bannar.css';
import NatureVid from '../../assets/video/main-video.mp4';

const Bannar = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after a small delay
        setTimeout(() => {
            setAnimate(true);
        }, 100); // Delay for animation start
    }, []);

    return (
        <div className="bannar-section">
            <video autoPlay loop muted className="main-bannar">
                <source src={NatureVid} type="video/mp4" />
            </video>

            <div className={`container ${animate ? 'animate' : ''}`}>
                <p className={`section-title ${animate ? 'animate' : ''}`}>Our Packages</p>
                <h3 className={`section-heading ${animate ? 'animate' : ''}`}>Search Your Destination</h3>

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
                            <input type="range" min="0" max="500" defaultValue="150" />
                            <span className="price">$150</span>
                        </div>
                    </div>

                    <button className="search-btn">Search Now</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
