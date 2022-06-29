import React from 'react';
import Plx from 'react-plx/lib/Plx';
import './Glimpse.css';

const Glimpse = () => {
    return (
        <div className='glimpseCta'>
            <div className="overflow-cta">
                <header className="title">Quick Glimpse</header>
                <Plx
                    parallaxData={[
                        {
                            /* start: "1900px",
                            end: "2200px", */
                            start: "self",
                            duration: "350px",
                            easing: "ease",
                            properties: [
                                {
                                    startValue: -140,
                                    endValue: 0,
                                    property: "translateX",
                                },
                                {
                                    startValue: 0,
                                    endValue: 1,
                                    property: "opacity"
                                }
                            ],
                        },
                    ]}
                    style={{
                        maxWidth: "890px",
                        fontSize: "62px",
                        color: "var(--textColor-dark)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.045em",
                        fontWeight: 700,
                        paddingTop: "2rem",
                        paddingLeft: "10rem",
                        transform: "translateX(-140px)",
                        willChange: "transform, opacity"
                    }}
                >
                    <p className="description">
                        Your perfect medium for the evolving web.
                    </p>
                </Plx>
                <section className="container">
                    <div className="bio">
                        <h2 className="bioTitle">
                            Full-Stack Developer.<br />
                            Immersive Designer.<br />
                            AI Fanatic.
                        </h2>
                        <p className='bioContent'>
                            I'm a Full-Stack Engineer assisting startups in creating growth-driven products and brands.<span className='secondThought'> I believe the best software is created user-first, providing an attractive <span className='bio-span'>experience</span> that keeps the user returning. I'm committed to building solutions to everyday problems and I put emphasis on the value that stems from a great application.</span>
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
                                    <span className="card4-number">100</span>
                                    <span className="card4-desc">%</span>
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