/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css';
import { MdKeyboardArrowRight } from 'react-icons/md';


const Nav = () => {
/*   window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navbarTop = navbar.getBoundingClientRect().top;
    if (navbarTop > 0) {
      // disable scrolling higher 
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }); */


window.addEventListener('click', (e) => {
  if (e.target.className === 'navLogoLink') {
    if (document.querySelector('.navLogoLink')) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('nav-skills-trigger')){
    if (document.getElementById('nav-skills-trigger')) {
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.showcaseCta').offsetTop - 125,
        behavior: 'smooth',
      });
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('selected-projects-nav-trigger')){
    if (document.getElementById('selected-projects-nav-trigger')){
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.projectsCta').offsetTop + 125,
        behavior: 'smooth',
      });
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('dev-process-nav-trigger')) {
    if (document.getElementById('dev-process-nav-trigger')) {
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.process-scroll-wrap').offsetTop + 125,
        behavior: 'smooth',
      });
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('faq-nav-trigger')) {
    if (document.getElementById('faq-nav-trigger')) {
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.faq-body').offsetTop,
        behavior: 'smooth',
      });
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('contactLink-text')) {
    if (document.getElementById('contactLink-text')) {
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.last-body').offsetTop,
        behavior: 'smooth',
      });
    }
  } else if (e.target === document.querySelector('#contact-nav-trigger')) {
    if (document.querySelector('#contact-nav-trigger')) {
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.last-body').offsetTop,
        behavior: 'smooth',
      });
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('blog-nav-trigger')) {
    if (document.getElementById('blog-nav-trigger')) {
      e.preventDefault();
      window.open("https://github.com/NickMezacapa", "_blank");
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.contact-arrow-nav')) {
    if (document.querySelector('.contact-arrow-nav')) {
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.last-body').offsetTop,
        behavior: 'smooth',
      });
    }
  }
})
window.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.contactLink-icon')) {
    if (document.querySelector('.contactLink-icon')) {
      e.preventDefault();
      window.scrollTo({
        top: document.querySelector('.last-body').offsetTop,
        behavior: 'smooth',
      });
    }
  }
})


  return (
    <div className='navbar'>
      <div className="navCta">
        <div className="navLogo">
          <a id='a' href="/" className='navLogoLink'>Nick Mezacapa</a>
        </div>
        <div className="navMenu">
          <a id='nav-skills-trigger' href="" className='navLink nav-skills-trigger'>Skills</a>
          <a id='selected-projects-nav-trigger' href="" className='navLink'>Selected Projects</a>
          <a id='dev-process-nav-trigger' href="" className='navLink'>Development Process</a>
          <a id='faq-nav-trigger' href="" className='navLink'>FAQ</a>
          <a id='blog-nav-trigger' href="" className='navLink'>Blog</a>
        </div>
        <p href="" className='contactLink' id="contact-nav-trigger">
          <div className="contactLink-text" id="contactLink-text">Contact</div>
          <div className="contactLink-icon">
          <MdKeyboardArrowRight className="contact-arrow-nav" />
          </div>
        </p>
      </div>
    </div>
  )
}

export default Nav