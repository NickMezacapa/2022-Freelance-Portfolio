import React from 'react';
import './HeroDesc.css';

const HeroDesc = () => {
  const handleScroll_heroDesc = () => {
      const firstDesc = document.querySelector('.first');
      const secondDesc = document.querySelector('.second');
      
      if (firstDesc.getBoundingClientRect().top < window.innerHeight) {
        firstDesc.classList.add('firstDesc_active');
        secondDesc.classList.add('secondDesc_active');
      }
      // if the user is not on a mobile device, run the code below
      if (window.innerWidth > 768) {
      if (firstDesc.getBoundingClientRect().top > window.innerHeight) {
        firstDesc.classList.remove('firstDesc_active');
        secondDesc.classList.remove('secondDesc_active');
      }
    }
  };

  window.addEventListener('scroll', handleScroll_heroDesc);

  return (
    <div className='heroDescriptions'>
        <div className="descriptionsCta">
            <div className="first">
                <h2>Building value through user-experience and immersive design.</h2>
            </div>
         
            <div className="second">
                <h2 className='secondDesc'>Now available for you.</h2>
            </div>
        </div>
    </div>
  )
}

export default HeroDesc