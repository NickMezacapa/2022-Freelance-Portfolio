import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { AiOutlinePlus } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import './Card.css';

const Card4 = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


  return (
     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='card-flip12' onClick={handleClick}>
          <p className='card-flip-content card-flip-front'>My branding needs some work.</p>
          <AiOutlinePlus className='card-flip-icon' size={22} />
        </div>

        <div className='card-flip12' onClick={handleClick}>
        <p className='card-flip-content'>You're in the right place. Let's create, or even build back the trust between you and your customers, and let's build it on an emotional level.</p>
        <TiArrowBack className='card-flip-icon' size={22} />
        </div>
      </ReactCardFlip>
  )
}

export default Card4