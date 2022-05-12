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
/* import Contact from './Components/Contact/ContactForm'; */

function App() {

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
{/* 		<Contact /> */}
		</>
	)
}

export default App;
