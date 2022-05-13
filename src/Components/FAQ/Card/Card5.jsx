import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { AiOutlinePlus } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import './Card.css';

const Card5 = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


  return (
     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='card-flip12' onClick={handleClick}>
          <p className='card-flip-content card-flip-front'>Can you help me with an existing project?</p>
          <AiOutlinePlus className='card-flip-icon' size={22} />
        </div>

        <div className='card-flip12' onClick={handleClick}>
        <p className='card-flip-content'>Certainly. Whether it be updating an ecommerce store, a school project, adding animations to your webpage, or a design consultation - my goal is to help you reach yours.</p>
        <TiArrowBack className='card-flip-icon' size={22} />
        </div>
      </ReactCardFlip>
  )
}

export default Card5