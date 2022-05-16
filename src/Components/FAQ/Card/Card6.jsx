import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { AiOutlinePlus } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import './Card.css';

const Card6 = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


  return (
     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='card-flip12' onClick={handleClick}>
          <p className='card-flip-content card-flip-front'>What development tools do you use?</p>
          <AiOutlinePlus className='card-flip-icon' size={22} />
        </div>

        <div className='card-flip12' onClick={handleClick}>
        <p className='card-flip-content' id="smaller-font-card-flip">I use JavaScript and Python and their respective frameworks. I build each frontend with ReactJS or NextJS. As any other great developer, I'm consistently learning new technologies and trends in order to deliver inuitive solutions.</p>
        <TiArrowBack className='card-flip-icon' size={22} />
        </div>
      </ReactCardFlip>
  )
}

export default Card6