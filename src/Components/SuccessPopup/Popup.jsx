import React from 'react';
import './Popup.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Popup = (props) => {
   
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-pop-btn" onClick={
                () => {
                    const popup = document.querySelector('.popup');
                        popup.classList.remove('popup-active');
                }
            }>
            <AiOutlineCloseCircle className='close-popup-icon' size={42} color={'gray'} />
            </button>
            <button className="checkmark-popup">
                <AiOutlineCheckCircle className='checkmark-popup-icon' size={42} color={'#00ff00'} />
            </button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup