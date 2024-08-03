import React, { useEffect } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://chatling.ai/js/embed.js';
    script.dataset.id = '6753155387';
    script.id = 'chatling-embed-script';
    document.body.appendChild(script);

    return () => {
      // Clean up script if the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty array ensures this runs only once on component mount

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi architecto veritatis
            beatae cumque soluta, voluptatum quam vel distinctio similique laudantium, magni maxime sequi
            sapiente consequuntur vero laboriosam! Placeat, mollitia.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reserved</p>
    </div>
  );
}

export default Footer;
