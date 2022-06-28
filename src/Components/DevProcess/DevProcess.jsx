import React from "react";
import Plx from 'react-plx/lib/Plx';
import './DevProcess.css';
import Canvas from "./Canvas";




export default function DevProcess() {


  return (

    <div>
      <div className="process-scroll-wrap">
        <div className="sticky-wrap">
          <section className="process-section">
            <div className="workflow-container">
              <div className="header-workflow">
                <h2 className="process-heading" id='dev_process_h2'>Development Process</h2>
                <h4 id='hassle-free'>Hassle-free. Guaranteed.</h4>
              </div>
              <div className="cards-wrap">
                <Plx
                  parallaxData={[
                    {
                      start: "10100px",
                      end: "10400px",
                      easing: "ease-in",
                      properties: [
                        {
                          startValue: 300,
                          endValue: 0,
                          property: "translateY",
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
                    willChange: "transform, opacity",
                    transform: "translateY(300px)",
                    opacity: 0,
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    maxWidth: "750px",
                    height: "380px",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: "1"

                  }}
                >
                  <div className="process-card1">
                    <div className="card-step">Step 1</div>
                    <h4 className="process-card-heading">Project Request</h4>
                    <p className="process-description">
                      Our journey begins with the opportunity for you to define your project. Your project request will be reviewed and prioritized dependent upon completion of all required information listed in the contact form.
                    </p>
                  </div>
                </Plx>
                <Plx
                  parallaxData={[
                    {
                      start: "10450px",
                      end: "10750px",
                      easing: "ease-in",
                      properties: [
                        {
                          startValue: 400,
                          endValue: 0,
                          property: "translateY",
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
                    willChange: "transform, opacity",
                    transform: "translateY(400px)",
                    opacity: 0,
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    maxWidth: "750px",
                    height: "380px",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: "2"

                  }}
                >
                  <div className="process-card2">
                    <div className="card-step">Step 2</div>
                    <h4 className="process-card-heading">Discovery Phase</h4>
                    <p className="process-description">
                      We’ll take some time to identify the overall goals of the project. The information we gather is important for me to fully understand your business and industry, your target market, budget, and the resulting benefits you’d like to see from my work. We’ll also discuss design ideas and next steps.
                    </p>
                  </div>
                </Plx>
                <Plx
                  parallaxData={[
                    {
                      start: "10800px",
                      end: "11100px",
                      easing: "ease-in",
                      properties: [
                        {
                          startValue: 400,
                          endValue: 0,
                          property: "translateY",
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
                    willChange: "transform, opacity",
                    transform: "translateY(400px)",
                    opacity: 0,
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    maxWidth: "750px",
                    height: "380px",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: "3"

                  }}
                >
                  <div className="process-card3">
                    <div className="card-step">Step 3</div>
                    <h4 className="process-card-heading">Proposal</h4>
                    <p className="process-description">
                      After I've learned as much as possible about your project, I create an individual proposal. My rates are contingent on a per-project basis to ensure you have a full overview of the cost. No hidden fees!
                    </p>
                  </div>
                </Plx>
                <Plx
                  parallaxData={[
                    {
                      start: "11150px",
                      end: "11450px",
                      easing: "ease-in",
                      properties: [
                        {
                          startValue: 400,
                          endValue: 0,
                          property: "translateY",
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
                    willChange: "transform, opacity",
                    transform: "translateY(400px)",
                    opacity: 0,
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    maxWidth: "750px",
                    height: "380px",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: "4"

                  }}
                >
                  <div className="process-card4">
                    <div className="card-step">Step 4</div>
                    <h4 className="process-card-heading">Implementation</h4>
                    <p className="process-description">
                      Here, I translate the ideas we’ve generated into actual code, and place particular emphasis on transparency and communication. I’ll be sending you regular updates of what’s been accomplished and what still needs to be done.
                    </p>
                  </div>
                </Plx>

                <Plx
                  parallaxData={[
                    {
                      start: "11500px",
                      end: "11800px",
                      easing: "ease-in",
                      properties: [
                        {
                          startValue: 400,
                          endValue: 0,
                          property: "translateY",
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
                    willChange: "transform, opacity",
                    transform: "translateY(400px)",
                    opacity: 0,
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    maxWidth: "750px",
                    height: "380px",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: "5"

                  }}
                >
                  <div className="process-card5">
                    <div className="card-step">Step 5</div>
                    <h4 className="process-card-heading">Launch / Handover</h4>
                    <p className="process-description">
                      Before launch, the finished website goes through a rigorous quality assurance check. Upon validation, the website will be hosted using an ultra-fast hosting platform or integrated into another environment via code export.
                    </p>
                  </div>
                </Plx>
              </div>
              <>

              </>
            </div>
          </section>
          <Canvas />
        </div>
      </div>
    </div>
  )
}

