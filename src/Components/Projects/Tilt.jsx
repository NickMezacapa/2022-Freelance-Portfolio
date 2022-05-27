import React from 'react';
import Content from './Content';
import './Tilt.css';

const Tilt = () => {
  return (
    <div className="Tilt-TiltContainer">
         <section className="Tilt-TiltInner_hoverSpan_wrapper">
           {/*  */}
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           <span className="Tilt-HoverSpan"></span>
           {/*  */}
           <div className="Tilt-BoxContent">
                <Content />
           </div>
        </section> 
    </div>
  )
}

export default Tilt