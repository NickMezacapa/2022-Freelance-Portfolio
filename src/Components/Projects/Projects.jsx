import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div>
        <section className="projectsCta">
            <div className="projects-overflow">
                <div className="projects-content">
                <header className="project-header">
                    <h1 className="projects-header-title">Selected Projects</h1>
                </header>
                <div className="project-section-title">
                    <h4>AI Projects</h4>
                </div>
                <div className="project-section-container">
                    <div className="project-display">
                        <div id='ai-1' className="project"></div>
                        <div id='ai-2' className="project"></div>
                        <div id='ai-3' className="project"></div>
                    </div>
                    <div className="project-subheader">
                        <div className="ps-1">Biomedical Image Analysis with TensorFlow</div>
                        <div className="ps-2">Control Cursor with Hand Position Detection</div>
                        <div className="ps-3">Face and Emotion Recognition with TensorFlow</div>
                    </div>
                </div>
                <div className="project-section-title">
                    <h4>Javascript Projects</h4>
                </div>
                <div className="project-section-container">
                    <div className="project-display">
                        <div id='google-showcase' className="project"></div>
                        <div className="project"></div>
                        <div id='bug' className="project"></div>
                    </div>
                    <div className="project-subheader">
                        <div className="ps-1">Google Search Engine Rebuild</div>
                        <div className="ps-2">Ecommerce Store</div>
                        <div className="ps-3">Cryptocurrency Trading Bot</div>
                    </div>
                </div>
                <div className="project-section-title">
                    <h4>Data Structures & Algorithms</h4>
                </div>
                <div className="project-section-container">
                    <div className="project-display">
                        <div id='algo-path' className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                    </div>
                    <div className="project-subheader">
                        <div className="ps-1">Pathfinding Algorithm Visualizer</div>
                        <div className="ps-2">Sorting Algorithm Visualizer</div>
                        <div className="ps-3">Procedural Plant Generation with L-Systems</div>
                    </div>
                </div>



                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects