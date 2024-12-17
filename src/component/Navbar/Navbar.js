import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (linkName) => {
    setIsClicked(linkName);
  };

  return (
    
    <div className="Navbar">
      <nav>
        <a href="#"><img src={logo} alt="Logo" /></a>
        <ul className="nav__links">
          <NavLink to="/" onClick={() => handleClick('Home')}>
            <li className="link">
              <a
                href="#"
                style={{ color: isClicked === 'Home' ? 'blue' : '#000000' }}
              >
                Home
              </a>
            </li>
          </NavLink>
          <NavLink to="/blogs" onClick={() => handleClick('Blogs')}>
            <li className="link">
              <a
                href="#"
                style={{ color: isClicked === 'Blogs' ? 'blue' : '#000000' }}
              >
                Blogs
              </a>
            </li>
          </NavLink>
          <NavLink to="/best-places" onClick={() => handleClick('Best Places')}>
            <li className="link">
              <a
                href="#"
                style={{ color: isClicked === 'Best Places' ? 'blue' : '#000000' }}
              >
                Best Places
              </a>
            </li>
          </NavLink>
          <NavLink to="/about" onClick={() => handleClick('About')}>
            <li className="link">
              <a
                href="#"
                style={{ color: isClicked === 'About' ? 'blue' : '#000000' }}
              >
                About
              </a>
            </li>
          </NavLink>
          <NavLink to="/quick-links" onClick={() => handleClick('Quick Links')}>
            <li className="link">
              <a
                href="#"
                style={{ color: isClicked === 'Quick Links' ? 'blue' : '#000000' }}
              >
                Quick Links
              </a>
            </li>
          </NavLink>
        </ul>
        <button className="btn">Buy Now</button>
      </nav>
    </div>
  );
};

export default Navbar;