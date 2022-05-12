import React from 'react';
import Card1 from './Card/Card';
import Card2 from './Card/Card2';
import Card3 from './Card/Card3';
import Card4 from './Card/Card4';
import Card5 from './Card/Card5';
import Card6 from './Card/Card6';
import './Faq.css';

const Faq = () => {


  return (
    <div className='faq-body'>
        <div className="overflow-container">
            <div className="separator"></div>
            <h3 className="faq-title">How can I help you?</h3>


{/* container start */}
            <div className="flipping-container">
{/* row1 start */}
              <div className="card-flip-row-1">
                <Card1 />
                <Card2 />
              </div>
{/* row1 end */}

{/* row2 start */}
<div className="card-flip-row-2">
                <Card3 />
                <Card4 />
              </div>
{/* row2 end */}

{/* row3 start */}
<div className="card-flip-row-3">
                <Card5 />
                <Card6 className='card6-trigger' />
</div>
{/* row3 end */}
            </div>
{/* container end */}



        </div>

    </div>
  )
}

export default Faq