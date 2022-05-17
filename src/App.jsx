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
/* import Canvas from "./Components/DevProcess/Canvas"; */
import Faq from "./Components/FAQ/Faq";
import Last from "./Components/Last/Last";
import Popup from './Components/SuccessPopup/Popup';

function App() {
	const popup = document.querySelector('.popup');
    const pop_inner = document.querySelector('.popup-inner');

    // When the user clicks inside pop_inner, close the popup.
    window.addEventListener('click', (e) => {
        if (e.target === pop_inner) {
            popup.style.visibility = 'hidden';
        }
    });

	// Add a scroll event listener for when the user reaches the bottom of the footer. When they have, they cannot scroll any further.
	window.addEventListener('scroll', () => {
		const footer = document.querySelector('footer');
		const footerBottom = footer.getBoundingClientRect().bottom;
		const windowHeight = window.innerHeight;
		if (footerBottom === windowHeight) {
			// disable scrolling any further down the y axis
			window.scrollTo(0, window.scrollY + 1);
		} else console.log('something did not happen.')
	});




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
		</>
	)
}

export default App;
