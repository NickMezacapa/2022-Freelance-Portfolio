import React from 'react';
import Tilt from './Tilt';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  return (
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
  )
}

export default ProjectShowcase