import React from 'react';
import { FaGithub, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sky">
        <div className="clouds">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="moon"></div>
      </div>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/NikoFK" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.youtube.com/@fksprojects?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaYoutube />
          </a>
          <a href="https://instagram.com/niko_f_k" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@niko_f_k" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTiktok />
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Niko Fauza Kurniawan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;