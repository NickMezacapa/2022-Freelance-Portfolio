import React from 'react';
import Tilt from './Tilt';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  return (
      <div className="PS-Wrapper">
    <div className="ProjectShowcase-Container">
        <section className="ProjectShowcase-Row_firstRow">
            <div className="ProjectShowcase-Row_firstRow_left">
                <Tilt />
            </div>
            <div className="ProjectShowcase-Row_firstRow_right">
                <Tilt />
            </div>
        </section>
        <section className="ProjectShowcase-Row_secondRow">
            <div className="ProjectShowcase-Row_secondRow_left">
                <Tilt />
            </div>
            <div className="ProjectShowcase-Row_secondRow_right">
                <Tilt />
            </div>
        </section>
    </div>
    <div className="PS-Container2">
        <div className="ProjectShowcase-Row_thirdRow">
            <div className="ProjectShowcase-Row_thirdRow_left">
                <Tilt />
            </div>
            <div className="ProjectShowcase-Row_thirdRow_right">
                <Tilt />
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProjectShowcase