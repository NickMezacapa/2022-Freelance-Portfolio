import React from 'react';
import Plx from 'react-plx/lib/Plx';
import './HeroDesc.css';

const HeroDesc = () => {
  return (
    <div className='heroDescriptions'>
        <div className="descriptionsCta">
            <Plx
             parallaxData={[
                {
                  start: "1300px",
                  end: "1600px",
                  easing: "ease-in",
                  properties: [
                    {
                      startValue: 0,
                      endValue: 1,
                      property: "opacity",
                    },
                  ],
                },
              ]}
              style={{
                fontSize: "45px",
                width: "75%",
                maxWidth: "1010px",
                lineHeight: 1.05,
                textAlign: "center",
                background: "linear-gradient(91.36deg, #52f0c8 0%, #49d6b3 13.02%, #63c9d6 25.52%, #a58de3 37.5%, #56abec 49.48%, #737eb7 63.02%, rgb(73, 185, 189) 72.92%, #57acdd 84.38%, #515fdf 97.92%)",
                backgroundSize: "200% 200%",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                marginTop: "0px",
                paddingTop: "8px",
                paddingBottom: "8px",
                letterSpacing: "-0.045em",
                webkitTextFillColor: "transparent",
                animation: "intro-gradient 7.5s infinite ease both",
                webkitAnimation: "intro-gradient 7.5s infinite ease both",
                mozAnimation: "intro-gradient 7.5s infinite ease both",
                willChange: "opacity",
                opacity: 0,
                transition: "0.6s ease"
              }}
            >
            <div className="first">
                <h2>Building value through user-experience and immersive design.</h2>
            </div>
            </Plx>
            <Plx
                parallaxData={[
                    {
                      start: "1675px",
                      end: "1750px",
                      easing: "ease-in",
                      properties: [
                        {
                          startValue: 0,
                          endValue: 1,
                          property: "opacity",
                        },
                      ],
                    },
                  ]}
                  style={{
                    fontSize: "32px",
                    lineHeight: 1.05,
                    textAlign: "center",
                    background: "linear-gradient(91.36deg, #eca658 0%, #f391a6 13.02%, #e188c3 25.52%, #a58de3 37.5%, #56abec 49.48%, #737eb7 63.02%, #c8638c 72.92%, #dd5d57 84.38%, #df6c51 97.92%)",
                    backgroundSize: "200% 200%",
                    webkitBackgroundClip: "text",
                    backgroundClip: "text",
                    paddingTop: "170px",
                    webkitTextFillColor: "transparent",
                    animation: "intro-gradient 7.5s infinite ease both",
                    webkitAnimation: "intro-gradient 7.5s infinite ease both",
                    mozAnimation: "intro-gradient 7.5s infinite ease both",
                    willChange: "opacity",
                    opacity: 0,
                    transition: "0.6s ease"
                  }}
                >            
            <div className="second">
                <h2>Now available for you.</h2>
            </div>
            </Plx>
        </div>
    </div>
  )
}

export default HeroDesc