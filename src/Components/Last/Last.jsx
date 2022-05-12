import React from 'react';
import Avatar from '../../Images/Showcase/avatar.png';
import './Last.css';
import Contact from '../Contact/ContactForm';

const Last = () => {
    const handleScroll_last_animations = () => {
        const lastBody = document.querySelector('.last-body');
        const lastAvatar = document.querySelector('.last-avatar');
        const navbar = document.querySelector('.navbar');
        const lastBodyTop = lastBody.getBoundingClientRect().top;
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        if (lastBodyTop - 125 <= navbarBottom) {
            lastAvatar.classList.add('avatar-active');
        } else if (lastBodyTop - 800 < navbarBottom) {
            lastAvatar.classList.remove('avatar-active');
        }
    };
    window.addEventListener('scroll', handleScroll_last_animations);

  return (
    <div className="last-body">
        <div className="overflow-container">
            <div className="last-container">
                <h4 className="last-text">Interested in working with me<span className="animated-q-mark">?</span></h4>
                <div className="form-placement">
                    <Contact />
                </div>
            </div>
            <img className='last-avatar' src={Avatar} alt="avatar emoji of Nick Mezacapa" />
            <footer>
                &copy; 2022 Nick Mezacapa. All rights reserved.
            </footer>
        </div>

    </div>
  )
}

export default Last