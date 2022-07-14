import React from 'react';
/* import Plx from 'react-plx/lib/Plx'; */
import './Glimpse.css';

const Glimpse = () => {

    // when slideTrigger enters the viewport from the bottom of the page, add the active animation
    const handleScroll_slideTrigger = () => {
        const slideTrigger = document.querySelector('.title.slideTrigger');
        const slidingTitle = document.querySelector('.description');
        // when slideTrigger enters the viewport from the bottom of the page, add the active animation 'slidingTitle_active' to slidingTitle
        if (slideTrigger.getBoundingClientRect().bottom < window.innerHeight) {
            slidingTitle.classList.add('slidingTitle_active');
        }
        // if slideTrigger is below the viewport, remove the active animation 'slidingTitle_active' from slidingTitle
        else {
            slidingTitle.classList.remove('slidingTitle_active');
        }
    }
    window.addEventListener('scroll', handleScroll_slideTrigger);

    return (
        <div className='glimpseCta'>
            <div className="overflow-cta">
                <header className="title slideTrigger">Quick Glimpse</header>
               
                    <p className="description slidingTitle">
                        Your perfect medium for the evolving web.
                    </p>
                
                <section className="container">
                    <div className="bio">
                        <h2 className="bioTitle">
                            Full-Stack Developer.<br />
                            Immersive Designer.<br />
                            AI Fanatic.
                        </h2>
                        <p className='bioContent'>
                            I'm a Full-Stack Engineer assisting startups in creating growth-driven products and brands.<span className='secondThought'> I believe the best software is created user-first, providing an attractive <span className='bio-span'>experience</span> that keeps users returning. I'm committed to building solutions to everyday problems and I put emphasis on the value that stems from a great application.</span>
                        </p>
                    </div>

                    <div className="cardsCta">

                        <div className="cards1">
                            <div className="card1">
                                <div className="card1-info">
                                    <span className='card1-number'>50</span>
                                    <span className='card1-desc'>+</span>
                                </div>
                                <div className="card1-subheading">
                                    Happy Clients
                                </div>
                            </div>
                            <div className="card2">
                                <div className="card2-info">
                                    <span className="card2-number">3</span>
                                    <span className="card2-desc">+</span>
                                </div>
                                <div className="card2-subheading">Years of Experience</div>
                            </div>
                        </div>
                        <div className="cards2">
                            <div className="card3">
                                <div className="card3-info">
                                    <span className="card3-number">75</span>
                                    <span className="card3-desc">+</span>
                                </div>
                                <div className="card3-subheading">Projects</div>
                            </div>
                            <div className="card4">
                                <div className="card4-info">
                                    <span className="card4-number">100%</span>
{/*                                     <span className="card4-desc">%</span> */}
                                </div>
                                <div className="card4-subheading">
                                    Passion
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Glimpse