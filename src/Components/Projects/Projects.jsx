import React from 'react';
import './Projects.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import display from './assets/large_2x.mp4';
import ProjectShowcase from '../Projects/ProjectShowcase';

const Projects = () => {
    // Add an event listener for when the top of '.projectsCta' is intersecting with the top of '.navbar'. When they are both equal to each other, add the active class '.nav-light-active' to '.navbar'. When the navbar is not intersecting with the projectsCta, remove the active class '.nav-light-active' from '.navbar'.
    const handleScroll = function(){
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



            } else {
                nav.classList.remove("nav-light-active");
                settings.classList.remove("settings-active");
                animated_link.classList.remove('proj-link-animation-active');
                setting_icon.style.color = "white";
                ip_hero.currentTime = 0;
            }
        }
    }
    window.addEventListener("scroll", handleScroll);

    const handleClick = function() {
        window.open("https://github.com/NickMezacapa", "_blank");
    }





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
                                    From the moment I produced "Hello World" in the console of my first application, I knew I was hooked to the engaging challenges and rewarding outcomes of software development. What started with a simple "Hello World" has become a full-fledged passion to build high-quality, automated solutions to everyday problems.
                                </span>
                            </div>
                            <div className="link-moreProjects">
                                <span className="ls1" onClick={handleClick}>Alternatively, view all public projects here</span>
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
                                <video muted={true} autoPlay={true} playsInline className="ip-hero">
                                    <source src={display} type="video/mp4" />
                                </video>
                            </div>

                        </section>




                    </div>
                    {/* ************* start project showcase here */}



                    <ProjectShowcase />


                </div>
                <div className="Projects-SeeMore_cta">
                    <div className="Projects-SeeMore_linkWrap">
                        <div className="Projects-SeeMore_linkClick" onClick={handleClick}>
                            See more projects
                            <MdKeyboardArrowRight className="arrow-proj" />
                        </div>
                        <div className="DA"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects