import React from 'react';
import './SP.css';

const SP = (props) => {
  return ((props.trigger) ? (
    <div className="SP_popup">
        <div className="SP_popup-inner">
            <button className="SP_close"></button>
            { props.children }
        </div>

    </div>
  ) : "");
}

export default SP