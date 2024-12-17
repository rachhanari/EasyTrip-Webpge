import React from "react";
import FooterLogo from "../../assets/logo.png";
import NatureVid from "../../assets/video/footer.mp4";
import { FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import "../Footer/Footer.css";

const FooterLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "BestPlaces", link: "/best-places" },
    { title: "Blogs", link: "/blogs" },
];

const Footer = () => {
    return (
        <div className="footer-section">
            {/* Background Video */}
            <video autoPlay loop muted className="footer-video">
                <source src={NatureVid} type="video/mp4" />
            </video>

            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={FooterLogo} alt="Travellogo" className="logo-image" />
                        <h2>Travellogo</h2>
                    </div>
                    <p className="footer-description">
                        Your ultimate travel companion! At EasyTrip, we are committed to making your travel experiences seamless, enjoyable, and memorable. From discovering the world's best destinations to planning your perfect getaway, we bring everything you need to your fingertips.
                    </p>
                    <div className="footer-details">
                        <FaLocationArrow className="icon" />
                        <p>Bhiwandi, Maharashtra</p>
                    </div>
                    <div className="footer-details">
                        <FaMobileAlt className="icon" />
                        <p>+91 7499720725</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/rachha_narendra_/?hl=en"><FaInstagram className="social-icon" /></a>
                        <a href="https://github.com/rachhanari"><FaGithub className="social-icon" /></a>
                        <a href="https://www.linkedin.com/in/rachha-narendra-05a307288/"><FaLinkedin className="social-icon" /></a>
                    </div>
                </div>

                <div className="footer-right">
                    {[...Array(3)].map((_, i) => (
                        <div className="footer-links" key={i}>
                            <h3>Important Links</h3>
                            {FooterLinks.map((link, index) => (
                                <a href={link.link} key={index}>
                                    &gt; {link.title}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} All rights reserved || Made with ❤️ by Narendra
            </div>
        </div>
    );
};

export default Footer;