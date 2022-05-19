/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Plx from 'react-plx';
import HeroImg from '../Intro/open-hero15.png';
import './Intro.css';

const Intro = () => {

    if (window.innerWidth <= 375) {
      // remove all PLX elements
      const plxElements = document.querySelectorAll('Plx');
      plxElements.forEach(element => {
        element.parentNode.removeChild(element);
      }
      );
    }


  window.addEventListener('click', (e) => {
    if (e.target.className === 'hero-link-text') {
      if (document.querySelector('.hero-link-text')) {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('.last-body').offsetTop,
          behavior: 'smooth',
        });
      }
    }
    if (e.target === document.getElementById('launch-trigger')) {
      if (document.getElementById('launch-trigger')) {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('.last-body').offsetTop,
          behavior: 'smooth',
        });
      }
    }
  })
  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.letsLaunchArrowRt')) {
      if (document.querySelector('.letsLaunchArrowRt')) {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('.last-body').offsetTop,
          behavior: 'smooth',
        });
      }
    }
  })
  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.hero-link-icon')) {
      if (document.querySelector('.hero-link-icon')) {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('.last-body').offsetTop,
          behavior: 'smooth',
        });
      }
    }
  })

  return (
    <>
    <div className="hero-scroll-wrap">
      <div className="hero-scroll-trigger"></div>
      <div className="sticky-wrap">
        <div className="overflow-wrap">
          {/* Begin code for hero animation */}
          <Plx
          className='PLX-heroImg'
          parallaxData={[
            {
              start: 0,
              end: "100vh",
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 0.320058,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            display: "flex",
            boxSizing: "border-box",
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            height: "100vh",
            transform: "scale(1)",
            willChange: "transform",
            transformStyle: "preserve-3d",
            webkitBoxAlign: "center",
            webkitAlignItems: "center"
          }}
        >

          <header className="hero">
            <Plx
            parallaxData={[
              {
                start: 0,
                end: "45vh",
                easing: "ease-in",
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                  },
                ],
              },
            ]}
            style={{
              position: "relative",
              left: "50%",
              zIndex: 1,
              width: "16.9em",
              maxWidth: "none",
              marginTop: "3.2em",
              marginLeft: "-8.45em",
              boxSizing: "border-box",
              fontSize: "10vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              verticalAlign: "middle",
              willChange: "opacity",
              opacity: 0
            }}
            
            >
            <img src={HeroImg} alt="iMac" className="hero-ui" />
           </Plx>
            <div className='heroCta'>
        <div class="heroWrapper">

          <div class="hero-img-container">
            <img src={require("./nm.png")} loading="eager" sizes="(max-width: 479px) 100vw, (max-width: 767px) 648px, (max-width: 991px) 100vw, 65vw" alt="Headshot of Nick Mezacapa" class="hero-img" />
          </div>

          <div id="hero-img-shadow-1" class="hero-img-shadow-wrap">
            <div class="hero-img-shadow"></div>
          </div>
          <div id="hero-img-shadow-2" class="hero-img-shadow-wrap     hero-img-shadow-wrap--intro">
            <div class="hero-img-shadow"></div>
          </div>

        </div>

        <div className="hero__header">
          <h2 className="hero-eyebrow">Nick Mezacapa</h2>
          <h1 className='hero-heading'>Software Developer</h1>
        </div>

        <p id='launch-trigger' className='hero-link'>
          <div className="hero-link-text">Let's launch</div>
          <div className="hero-link-icon">
            <MdKeyboardArrowRight className="letsLaunchArrowRt" />
          </div>
        </p>
      </div>
          </header>
          </Plx>
        </div>
      </div>
      <div className="sticky-gap"></div>
    </div>
    
      </>
  )
}

export default Intro