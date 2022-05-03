import React from 'react';
import './Projects.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import display from './assets/large_2x.mp4';
import braintumor from './assets/download.png';

const Projects = () => {
// Add an event listener for when the top of '.projectsCta' is intersecting with the top of '.navbar'. When they are both equal to each other, add the active class '.nav-light-active' to '.navbar'. When the navbar is not intersecting with the projectsCta, remove the active class '.nav-light-active' from '.navbar'.
    const handleScroll = () => {
        const el = document.querySelector(".projectsCta");
        const nav = document.querySelector(".navbar");
        const settings = document.querySelector('.settings');
        const setting_icon = document.querySelector('.setting-icon-el');
        const animated_link = document.querySelector('.link-moreProjects');
        const ip_hero = document.querySelector('.ip-hero');
        if (el && nav) {
            const rect = el.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            if (rect.top < navRect.top && rect.bottom > navRect.top) { //
                nav.classList.add("nav-light-active");
                settings.classList.add("settings-active");
                setting_icon.style.color = "#1d1d1f";
                animated_link.classList.add('proj-link-animation-active');
/*                 ip_hero.classList.add('ip-hero-active'); */
                // PLay the video once
                /* ip_hero.play(); */


                
            } else {
                nav.classList.remove("nav-light-active");
                settings.classList.remove("settings-active");
                animated_link.classList.remove('proj-link-animation-active');
                setting_icon.style.color = "white";
/*                 ip_hero.classList.remove('ip-hero-active'); */
                ip_hero.currentTime = 0;
            }
        }
    }
    window.addEventListener("scroll", handleScroll);


  return (
    <div>
        <section className="projectsCta">
            <div className="projects-overflow">
                <div className="projects-content">
                <header className="project-header">
                    <div className="projects-header-space"></div>
                </header>
                <section className="proj-sticky-intro">
                    <h1 className="proj-mainTitle">Selected Projects</h1>
                    <div className="proj-intro-summary">
                        <span className="pss1">A small drop in the ocean of my true potential. </span>
                        <span className="pss2">
                            From the moment I produced "Hello World" in the console of my first application, I knew I was hooked to the engaging challenges and rewarding outcomes of software development. What started with a simple "Hello World" has become a full-fledged passion to improve the quality of life by creating high-quality, automated solutions to everyday problems.
                        </span>
                    </div>
                    <div className="link-moreProjects">
                        <span className="ls1">Alternatively, view all public projects here</span>
                        <span className="ls2">
                            <MdKeyboardArrowRight />
                        </span>
                    </div>

                    <div className="link-moreProjects2">
                        <span className="ls1">Got a good idea? Start a project request</span>
                        <span className="ls3">
                            <MdKeyboardArrowRight />
                        </span>
                    </div>
                    <div className="display-proj-hero-wrap">
                        <video muted="true" autoplay="false" className="ip-hero">
                            <source src={display} type="video/mp4" />
                        </video>
                    </div>

                </section>

            


                </div>
                <section className="proj-1-ai">
                    <div className="proj-section-wrapper">
                        <div className="braintumor-cta">
                                <img src={braintumor} alt="Brain Tumor Detection AI Project" className="braintumor-img" />
                                <div className="braintumor-content">
                                    <div className="btc-heading">
                                    <h1 className="proj-title">AI Brain Tumor Detection</h1>
                                    <h3 className="braintumor-subheading">Image Classification Machine Learning Model</h3>
                                    </div>
                                    <div className="btc-p">
                                    <p className="braintumor-para">
                                    A Deep Convolutional Generative Adversarial Network (DCGAN) to classify 3D MRI brain scans as tumorous or non-tumorous. This is a python machine learning project using TensorFlow to instantiate and train the model. Deployment via TensorFlow.js conversion and React frontend integration.<br /><br />
                                    Using deep learning classifiers in medicine, we have the potential to integrate cell and region specific annotations with clinical, genetic, and molecular data - providing unbiased data for clinical studies that will enhance research in pathology. 
                                    </p>
                                    </div>
                                    <div className="braintumor-links">
                                        <div id="bt-linkspan-1">
                                            <p>
                                            Go to code repository
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                        <div id="bt-linkspan-2">
                                            <p>
                                            Launch live demo
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="eye-detection-cta">
                                <div className="braintumor-content">
                                    <div className="btc-heading">
                                    <h1 className="proj-title2">Assisted Webpage Scrolling with Iris Detection AI</h1>
                                    <h3 className="braintumor-subheading">Chrome Extension for enhanced accessability</h3>
                                    </div>
                                    <div className="btc-p">
                                    <p className="braintumor-para">
                                    Realtime eye-detection and landmark-extraction via webcam and client-side inference. It is an end-to-end Machine Learning project that spans data collection, data augmentation, model design, customized training, and model optimization. Deployment via TensorFlow.js conversion and React frontend integration.
                                    <br /><br />
                                    The result is an intelligent interface for controlling the scrolling action of a document by the user's blinking action. Inspired by the difficulties faced by individuals suffering from body paralysis and movement impairments. 
                                    </p>
                                    </div>
                                    <div className="braintumor-links">
                                        <div id="bt-linkspan-1">
                                            <p>
                                            Go to code repository
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                        <div id="bt-linkspan-2">
                                            <p>
                                            Launch live demo
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img src={braintumor} alt="Brain Tumor Detection AI Project" className="braintumor-img" />
                        </div>
                        <div className="proj3-cta">
                        <img src={braintumor} alt="Brain Tumor Detection AI Project" className="braintumor-img" />
                                <div className="braintumor-content">
                                    <div className="btc-heading">
                                    <h1 className="proj-title3">Full-Stack Private Search Engine</h1>
                                    <h3 className="braintumor-subheading">A non-intrusive way to browse the internet</h3>
                                    </div>
                                    <div className="btc-p">
                                    <p className="braintumor-para">
                                    A Deep Convolutional Generative Adversarial Network (DCGAN) to classify 3D MRI brain scans as tumorous or non-tumorous. This is a python machine learning project using TensorFlow to instantiate and train the model.
                                    Using deep learning classifiers in medicine, we have the potential to integrate cell and region specific annotations with clinical, genetic, and molecular data - providing unbiased data for clinical studies that will enhance research in pathology. 
                                    </p>
                                    </div>
                                    <div className="braintumor-links">
                                        <div id="bt-linkspan-1">
                                            <p>
                                            Go to code repository
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                        <div id="bt-linkspan-2">
                                            <p>
                                            Launch live demo
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="proj4-cta">
                        <div className="braintumor-content">
                                    <div className="btc-heading">
                                    <h1 className="proj-title4">Automated Fish Feeder App</h1>
                                    <h3 className="braintumor-subheading">Feed your fish over the internet using an Arduino Uno Rev3</h3>
                                    </div>
                                    <div className="btc-p">
                                    <p className="braintumor-para">
                                    A Deep Convolutional Generative Adversarial Network (DCGAN) to classify 3D MRI brain scans as tumorous or non-tumorous. This is a python machine learning project using TensorFlow to instantiate and train the model.
                                    Using deep learning classifiers in medicine, we have the potential to integrate cell and region specific annotations with clinical, genetic, and molecular data - providing unbiased data for clinical studies that will enhance research in pathology. 
                                    </p>
                                    </div>
                                    <div className="braintumor-links">
                                        <div id="bt-linkspan-1">
                                            <p>
                                            Go to code repository
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                        <div id="bt-linkspan-2">
                                            <p>
                                            Launch live demo
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img src={braintumor} alt="Brain Tumor Detection AI Project" className="braintumor-img" />
                        </div>
                        <div className="proj5-cta">
                                <img src={braintumor} alt="Brain Tumor Detection AI Project" className="braintumor-img" />
                                <div className="braintumor-content">
                                    <div className="btc-heading">
                                    <h1 className="proj-title">Pathfinding Algorithm Visualizer</h1>
                                    <h3 className="braintumor-subheading">A visualization model for Dijkstra's Algorithm</h3>
                                    </div>
                                    <div className="btc-p">
                                    <p className="braintumor-para">
                                    A Deep Convolutional Generative Adversarial Network (DCGAN) to classify 3D MRI brain scans as tumorous or non-tumorous. This is a python machine learning project using TensorFlow to instantiate and train the model. Deployment via TensorFlow.js conversion and React frontend integration.<br /><br />
                                    Using deep learning classifiers in medicine, we have the potential to integrate cell and region specific annotations with clinical, genetic, and molecular data - providing unbiased data for clinical studies that will enhance research in pathology. 
                                    </p>
                                    </div>
                                    <div className="braintumor-links">
                                        <div id="bt-linkspan-1">
                                            <p>
                                            Go to code repository
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                        <div id="bt-linkspan-2">
                                            <p>
                                            Launch live demo
                                            <MdKeyboardArrowRight className="arrow-proj" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="proj-seeMore">
                            <button className="psm-button">
                                See more projects
                                <MdKeyboardArrowRight className="arrow-proj" />
                            </button>
                        </div>
                        <div className="DA"></div>
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}

export default Projects