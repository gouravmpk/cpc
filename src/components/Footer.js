import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CPC
            </Link>
          </div>
          <small class='website-rights'>Puthran Groups © 2021</small>
          <div class='footer-logo'>
            <a href="http://kartex.in/" className='social-logo1'>
              Developed by &#160; <u><strong>Techkartex</strong></u>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
