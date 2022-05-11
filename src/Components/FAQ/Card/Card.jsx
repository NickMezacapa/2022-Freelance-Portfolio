import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { AiOutlinePlus } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import './Card.css';

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


  return (
     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='card-flip12' onClick={handleClick}>
          <p className='card-flip-content card-flip-front'>What services do you offer?</p>
          <AiOutlinePlus className='card-flip-icon' size={22} />
        </div>

        <div className='card-flip12' onClick={handleClick}>
        <p className='card-flip-content'>My services include but are not limited to: web and mobile application development, SEO optimization, design consulting, and business analytics with python.</p>
        <TiArrowBack className='card-flip-icon' size={22} />
        </div>
      </ReactCardFlip>
  )
}

export default Card