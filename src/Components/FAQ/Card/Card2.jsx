import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { AiOutlinePlus } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import './Card.css';

const Card2 = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


  return (
     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='card-flip12' onClick={handleClick}>
          <p className='card-flip-content card-flip-front'>How long does a project take?</p>
          <AiOutlinePlus className='card-flip-icon' size={22} />
        </div>

        <div className='card-flip12' onClick={handleClick}>
        <p className='card-flip-content'>Most of my projects take between 2 weeks and 2 months. It all depends on the ambition of your project. I am cognizant of deadlines and always strive for early delivery.</p>
        <TiArrowBack className='card-flip-icon' size={22} />
        </div>
      </ReactCardFlip>
  )
}

export default Card2