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
import { AiFillBackward, AiFillCaretRight, AiFillFacebook, AiFillForward } from "react-icons/ai";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { RiRotateLockFill } from "react-icons/ri";
import { AiOutlineCalculator } from "react-icons/ai";
import { BsFillBrightnessHighFill, BsFillVolumeUpFill } from "react-icons/bs";
import Cal from './Components/Widgets/Cal/Cal';
import Weather from './Components/Widgets/Weather/Weather';
import Dragging from './Components/Dragging/Dragging';
import Volume from './Components/Volume/Volume';


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
		/* const heroHeading = document.querySelector('.hero-heading h1'); */
		/* const cdvBox = document.querySelector('.sticky-cdv-box'); */
		if (footerBottom === windowHeight) {
			// disable scrolling any further down the y axis
			window.scrollTo(0, window.scrollY + 1);
		}
		// Once the user has scrolled 100px, add the active class to heroHeading
		if (window.scrollY > 200) {
			document.querySelector('.hero-heading').classList.add('heroHeading_active');
			document.querySelector('.sticky-cdv-box').classList.add('sticky-cdv-box__active');
		} else {
			document.querySelector('.hero-heading').classList.remove('heroHeading_active');
			document.querySelector('.sticky-cdv-box').classList.remove('sticky-cdv-box__active');
		}
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
	});
	window.addEventListener('input', (e) => {
		const body = document.querySelector('body');
		const slider1 = document.querySelector('#firstVertSlider');
		const slider2 = document.querySelector('#secondVertSlider');
		if (e.target === slider1) {
			slider1.removeAttribute('value');
			const sliderValue = slider1.value;
			body.style.opacity = `${sliderValue}%`;
			const brightnessIcon = document.querySelector('#brightness-icon');
			sliderValue <= 55 ? brightnessIcon.style.color = 'rgb(118, 118, 118)' : brightnessIcon.style.color = '#1d1d1fba';
		}
		if (e.target === slider2) {
			slider2.removeAttribute('value');
			const sliderValue2 = slider2.value;
			const volumeMeasures = document.querySelectorAll('.volume__measurement');
			const emptyMeasureColor = '#1d1d1fba';
			const volumeWrapper = document.querySelector('.volume__wrapper');
			volumeWrapper.classList.add('volume__active');
			slider2.addEventListener('mousemove', () => {
				if (sliderValue2 >= 40 && sliderValue2 <= 50) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
				}
				if (sliderValue2 >= 51 && sliderValue2 <= 55) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 56 && sliderValue2 <= 60) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 61 && sliderValue2 <= 65) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 66 && sliderValue2 <= 70) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[3].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 71 && sliderValue2 <= 75) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[3].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[4].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 76 && sliderValue2 <= 80) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[3].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[4].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[5].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 81 && sliderValue2 <= 85) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[3].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[4].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[5].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[6].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 86 && sliderValue2 <= 90) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[3].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[4].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[5].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[6].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[7].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 91 && sliderValue2 <= 95) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[3].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[4].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[5].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[6].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[7].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[8].style.backgroundColor = 'rgb(255, 255, 255)';
				}
				if (sliderValue2 >= 96 && sliderValue2 <= 100) {
					volumeMeasures.forEach((measure) => {
						measure.style.backgroundColor = emptyMeasureColor;
					});
					volumeMeasures[0].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[1].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[2].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[3].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[4].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[5].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[6].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[7].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[8].style.backgroundColor = 'rgb(255, 255, 255)';
					volumeMeasures[9].style.backgroundColor = 'rgb(255, 255, 255)';
				}
			})
			slider2.addEventListener('mouseup', () => {
				setTimeout(() => {
					volumeWrapper.classList.remove('volume__active');
				}, 1500);
			});
			/* here */
			const volumeIcon = document.querySelector('#volume-icon');
			sliderValue2 <= 55 ? volumeIcon.style.color = 'rgb(118, 118, 118)' : volumeIcon.style.color = '#1d1d1fba';
		}
	});




	return (
		<>
			<Dragging />
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

				{/* weather, calendar, brightness, volume components */}
				<div className="sp_component-container">

					{/* widgets */}
					<section className="sp_comp-widgets">
						<div className="sp_calendar-widget">
							<Cal />
						</div>
						<div className="sp_weather-widget">
							<Weather />
						</div>
					</section>

					{/* controls */}
					<section className="sp_quick-controls">
						{/* slider controls */}
						<div className="sp_slider-controls">
							<div className="sp_brightness-slider">
								<div className="brightness-icon">
									<BsFillBrightnessHighFill id="brightness-icon" size={24} color='#1d1d1fba' />
								</div>
								<div className="slidebar1">
									<input type="range" min="0" max="100" className="input__vertical" id="firstVertSlider" />
								</div>

							</div>
							<div className="sp_volume-slider">
								<div className="volume-icon">
									<BsFillVolumeUpFill id='volume-icon' size={24} color='#1d1d1fba' />
								</div>
								<div className="slidebar2">
									<input type="range" min="0" max="100" className="input__vertical" id="secondVertSlider" />
								</div>
							</div>
						</div>
						{/* tap controls */}
						<div className="sp_tap-controls">
							<div className="sp_orientation-lock" onClick={(e) => {
								const lock__icon = document.querySelector('.sp_orientLock-icon');
								lock__icon.classList.toggle('sp_orientLock-icon__active');
							}} >
								<RiRotateLockFill size={28} className="sp_orientLock-icon" id='sp_orientLock-icon' />
							</div>
							<div className="sp_calc" onClick={(e) => {
								const dragging__div = document.querySelector('.Dragging');
								const calc__icon = document.querySelector('.sp_calc-icon');
								dragging__div.classList.toggle('Dragging_active');
								calc__icon.classList.toggle('sp_calc-icon__active');
							}}>
								<AiOutlineCalculator size={28} className="sp_calc-icon" id='sp_calc-icon' />
							</div>
						</div>
					</section>

				</div>

				{/* Music player component */}
				<div className="music-player-container">
					<div className="mp-progressBar">
						<div className="mp-pastProgress"></div>
					</div>
					<div className="mp-timer">
						<p className="mp-timer-time">0:52</p>
						<p className="mp-timer-time">-2:28</p>
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
						<AiFillLinkedin className="linked-sp-icon" size={28} onClick={(e) => {
							window.open('https://www.linkedin.com/in/nick-mezacapa/', '_blank');
						}} />
						<AiFillGithub className="github-sp-icon" size={28} onClick={(e) => {
							window.open('https://github.com/NickMezacapa', '_blank');
						}} />
						<AiFillFacebook className="facebook-sp-icon" size={28} onClick={(e) => {
							window.open('https://www.facebook.com/nmezacapa1/', '_blank');
						}} />
					</div>
				</div>
				<div className="close-sp-container">
					<span id="close-sp-icon">
						<IoMdClose className="close-sp-icon" />
					</span>
				</div>
			</SpPopup>
			<Volume />
		</>
	)
}

export default App;
