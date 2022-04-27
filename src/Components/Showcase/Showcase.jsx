import React from 'react';
import Plx from 'react-plx/lib/Plx';
import './Showcase.css';
import BlankHero from '../../Images/blank-display.png';
import AnimationsMovie from '../../Images/earth-recording-threeJS.mov';
import LoadTimes from '../../Images/Showcase/load-times.png';
import AppImgs from '../../Images/Showcase/app-imgs3.png';
import Responsive from '../../Images/Showcase/responsive.png';


const Showcase = () => {
  return (
    <div className='showcaseCta'>
        <div className="overflow-container">
        <section className="showcase-animations">
            <div className="animations-description">
                <div className="animations-heading">
                    <h2>Stunning<br />Animations.</h2>
                    </div>
                <div className="animations-subheading">
                    Whether it's subtle interactions that improve the UX, or complex "WOW" animations, your wish is my command.
                </div>
            </div>
            <div className="animations-hero">
                <img src={ BlankHero } alt="Animations display" />
                
                <div className="animations-heroContent">
                    
                    <Plx
             parallaxData={[
                {
                  start: "3035px",
                  end: "3195px",
                  easing: "ease-in",
                  properties: [
                    {
                      startValue: 0.85,
                      endValue: 0,
                      property: "opacity",
                    },
                  ],
                },
              ]}
              style={{
                height: "100%",
                width: "100%",
                zIndex: 3,
                objectFit: "cover",
                overflow: "hidden",
                backgroundColor: "rgba(0, 0, 0, 1)",
                willChange: "opacity",
                opacity: 0.9,
                position: "absolute",
                top: 0
              }}
            >
                    <div className="overlay"></div>
                    </Plx>
                    <video muted autoPlay loop src={ AnimationsMovie }></video>
                </div>
                

            </div>
        </section>
        <section className="showcase1">
            <div className="loadTimes">
                <h2>
                    Fast Delivery.<br />
                    Faster load times.
                </h2>
                <img src={LoadTimes} loading="lazy" sizes="(max-width: 479px) 86vw, (max-width: 767px) 79vw, 600px" alt="Screenshot of a custom website showing a performance score of 100 points"></img>
            </div>
            <div className="latest-tech">
                <img src={AppImgs} alt="Technology used by Nick Mezacapa" />
                <h2>The latest technology.</h2>
            </div>
        </section>
        <section className="showcase2">
            <div className="showcase-small">
                <div className="dev-duration">
                    <h2>Development Duration</h2>
                    <div className="dd-time-cta">
                    <h3 className="dd-months">Months</h3>
                    <h3 id="dd-weeks">Weeks</h3>
                    </div>
                </div>
                <div className="clean-code">
                    <h2>Clean Code</h2>
                    <div className="clean-code-content">
                        <span className="bracket">&#60;</span>
                        <span className="identifier">main</span>
                        <span className="bracket">&#62;</span><br />
                        <div className="indent">
                        <span className="bracket">&#60;</span>
                        <span className="identifier">article </span>
                        <span className="class">class</span>
                        <span className="bracket">=</span>
                        <span className="class-content">"firstArticle"</span>
                        <span className="bracket">&#62;</span><br />
                        <div className="indent2">
                        <span className="bracket">&#60;</span>
                        <span className="identifier">h1</span>
                        <span className="bracket">&#62;</span>Simple, Semantic, Testable
                        <span className="bracket">&#60;/</span>
                        <span className="identifier">h1</span>
                        <span className="bracket">&#62;</span><br />
                        <span className="bracket">&#60;</span>
                        <span className="identifier">p</span>
                        <span className="bracket">&#62;</span>Clearly communicated code.
                        <span className="bracket">&#60;/</span>
                        <span className="identifier">p</span>
                        <span className="bracket">&#62;</span><br />
                        </div>
                        <span className="bracket">&#60;/</span>
                        <span className="identifier">article</span>
                        <span className="bracket">&#62;</span><br />
                        </div>
                        <span className="bracket">&#60;/</span>
                        <span className="identifier">main</span>
                        <span className="bracket">&#62;</span>


                    </div>
                </div>
            </div>
            <div className="responsive">
                <h2>Responsive<br />
                Design.</h2>
                <img src={Responsive} alt="an example of screen friendly development" />
            </div>
        </section>
        </div>
    </div>
  )
}

export default Showcase