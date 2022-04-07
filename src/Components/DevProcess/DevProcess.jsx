import React from 'react';
import './DevProcess.css';

const DevProcess = () => {
  return (
    <div>
        <div className="process-scroll-wrap">
            <div className="sticky-wrap">
                <section className="process-section">
                    <div className="workflow-container">
                        <div className="header-workflow">
                            <h2 className="process-heading">Development Process</h2>
                            <h4>Hassle-free. Guaranteed.</h4>
                        </div>
                        <div className="cards-wrap">
                            <div className="process-card1"></div>
                            {/* <div className="process-card2"></div>
                            <div className="process-card3"></div>
                            <div className="process-card4"></div>
                            <div className="process-card5"></div> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default DevProcess