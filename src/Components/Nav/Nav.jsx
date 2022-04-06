/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Nav.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className="navCta">
        <div className="navLogo">
          <a id='a' href="https://www.nickmez.com" className='navLogoLink'>Nick Mezacapa</a>
        </div>
        <div className="navMenu">
          <a id='a' href="/" className='navLink'>Skills</a>
          <a id='a' href="/" className='navLink'>Selected Projects</a>
          <a id='a' href="/" className='navLink'>Development Process</a>
          <a id='a' href="/" className='navLink'>FAQ</a>
          <a id='a' href="/" className='navLink'>Blog</a>
        </div>
        <a href="#" className='contactLink' id="a">
          <div className="contactLink-text">Contact</div>
          <div className="contactLink-icon">
          <MdKeyboardArrowRight />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Nav