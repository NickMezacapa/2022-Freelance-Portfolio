import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Avatar from '../../Images/Showcase/avatar.png';
import './Last.css';

const Last = () => {
  return (
    <div className="last-body">
        <div className="overflow-container">
            <div className="last-container">
                <h4 className="last-text">Interested in working with me?</h4>
                <div className="contact-container">
                <a href="/">Start a project request</a><span>
                    <MdKeyboardArrowRight className="contact-arrow" />
                </span>
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