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
          {/* <img src={assets.logo1} alt="Logo" /> */}
          
          <h1>Sua xe anh Tuan</h1> <p> is your trusted destination for all your motorbike parts needs. 
          With our expertise and commitment to customer satisfaction, we ensure you find the perfect parts to suit your motorcycle. 
          </p>

          <div className="footer-social-icons">
    <a href="https://www.facebook.com/profile.php?id=100030964275189" target="_blank" rel="noopener noreferrer">
        <img src={assets.facebook_icon} alt="Facebook" />
    </a>
    <a href="https://x.com/?lang=vi" target="_blank" rel="noopener noreferrer">
        <img src={assets.twitter_icon} alt="Twitter" />
    </a>
    <a href="https://www.linkedin.com/in/qu%E1%BB%91c-b%E1%BA%A3o-l%C3%AA-345535292/" target="_blank" rel="noopener noreferrer">
        <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
            
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
            <li>0938-0305-39</li>
            <li>23560003@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 Sua xe anh Tuan - All Right Reserved</p>
    </div>
  );
}

export default Footer;
