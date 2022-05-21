import React from "react";
import "./App.css";
import Nav from './Components/Nav/Nav';
import Settings from "./Components/SettingsBtn/Settings";
import Intro from "./Components/Intro/Intro";
import HeroDesc from "./Components/HeroDescription/HeroDesc";
import Glimpse from "./Components/QuickGlimpse/Glimpse";
import Showcase from "./Components/Showcase/Showcase";
import Projects from "./Components/Projects/Projects";
import DevProcess from "./Components/DevProcess/DevProcess";
import Faq from "./Components/FAQ/Faq";
import Last from "./Components/Last/Last";
import Popup from './Components/SuccessPopup/Popup';
import SpPopup from "./Components/SettingsPopup/SP";
import CalImg from './Images/Settings-images/cal-test.png';
import WeatherImg from './Images/Settings-images/weather-icon-test.png';
import { AiFillBackward, AiFillCaretRight, AiFillFacebook, AiFillForward } from "react-icons/ai";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


function App() {
	
	const popup = document.querySelector('.popup');
    const pop_inner = document.querySelector('.popup-inner');

    // When the user clicks inside pop_inner, close the popup.
    window.addEventListener('click', (e) => {
        if (e.target === pop_inner) {
            popup.style.visibility = 'hidden';
        }
    });

	window.addEventListener('scroll', () => {
		const footer = document.querySelector('footer');
		const footerBottom = footer.getBoundingClientRect().bottom;
		const windowHeight = window.innerHeight;
		if (footerBottom === windowHeight) {
			// disable scrolling any further down the y axis
			window.scrollTo(0, window.scrollY + 1);
		} else console.log('something did not happen.')
	});

	window.addEventListener('click', (e) => {
		const closeStg = document.querySelector('.close-sp-container');
		const stgBtn = document.querySelector('.settings');
		const stgPopup = document.querySelector('.SP_popup-inner');
		const closeIcon = document.querySelector('.close-sp-icon');
		if (e.target === closeStg || e.target === closeIcon) {
			stgPopup.style.display = 'none';
			stgBtn.style.visibility = 'visible';
		}
	})







	return(
		<>
		<Nav />
		<Settings />
		<Intro />
		<HeroDesc />
		<Glimpse />
		<Showcase />
		<Projects />
		<DevProcess />
		{/* <Canvas /> */}
		<Faq />
		<Last />
		<Popup trigger={true}>
			<h1>Thank You</h1>
			<p>Your message was directly sent to my email and you should expect a response within 24-48 hours. I'm excited to work with you!
			</p>
		</Popup>
		<SpPopup trigger={true}>
			<h1 className='sp-title'>Settings</h1>
			{/* weather and calender components */}
			<div className="sp_component-container">
				<div className="calender-sp">
					<img src={CalImg} alt="Calender UI" id='cal-img' />
				</div>
				<div className="weather-sp">
					<img src={WeatherImg} alt="Weather UI" id='weather-img' />
				</div>
			</div>
			{/* Music player component */}
			<div className="music-player-container">
				<div className="mp-progressBar">
					<div className="mp-pastProgress"></div>
				</div>
				<div className="mp-timer">
					<p className="mp-timer-time">0:52</p>
					<p className="mp-timer-time">-2:27</p>
				</div>
				<div className="mp-title-container">
					<h2 className="song-title">
						Music Sounds Better With You 
					</h2>
					<h4 className="song-artist">
						NEIL FRANCES - EP
					</h4>
				</div>
				<div className="mp-controls">
					<AiFillBackward className='mp-backIcon' size={36} />
					<AiFillCaretRight className="mp-playIcon" size={36} />
					<AiFillForward className="mp-forwardIcon" size={36} />
				</div>
			</div>
			{/* Links section */}
			<div className="sp_links-container">
				<h4 className="sp_links-title">Links</h4>
				<div className="sp_links-wrapper">
					<AiFillLinkedin className="linked-sp-icon" size={28} />
					<AiFillGithub className="github-sp-icon" size={28} />
					<AiFillFacebook className="facebook-sp-icon" size={28} />
				</div>
			</div>
			<div className="close-sp-container">
				<span id="close-sp-icon">
				<IoMdClose className="close-sp-icon" />
				</span>
			</div>
			</SpPopup>

		</>
	)
}

export default App;
