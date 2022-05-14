import React from 'react';
import './Popup.css';

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-pop-btn">close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup