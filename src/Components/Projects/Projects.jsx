import React from 'react';
import './Projects.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import iPhone from './assets/iphone.png';

const Projects = () => {
// Add an event listener for when the top of '.projectsCta' is intersecting with the top of '.navbar'. When they are both equal to each other, add the active class '.nav-light-active' to '.navbar'. When the navbar is not intersecting with the projectsCta, remove the active class '.nav-light-active' from '.navbar'.
    const handleScroll = () => {
        const el = document.querySelector(".projectsCta");
        const nav = document.querySelector(".navbar");
        if (el && nav) {
            const rect = el.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            if (rect.top < navRect.top && rect.bottom > navRect.top) {
                nav.classList.add("nav-light-active");
            } else {
                nav.classList.remove("nav-light-active");
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
                        <span className="pss1">Just a drop in the ocean of my true potential. </span>
                        <span className="pss2">
                            From the moment I produced "Hello World" in the console of my first application, I knew I was hooked to the engaging challenges and rewarding outcomes of software development. What started with a simple "Hello World" has become a full-fledged passion to improve the quality of life by creating high-quality and complex software solutions to everyday problems.
                        </span>
                    </div>
                    <div className="link-moreProjects">
                        <span className="ls1">Alternatively, view all public projects here</span>
                        <span className="ls2">
                            <MdKeyboardArrowRight />
                        </span>
                    </div>
                    <img src={iPhone} alt="screenshot of GitHub Repositories" className="ip-hero" />
                </section>

            


                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects