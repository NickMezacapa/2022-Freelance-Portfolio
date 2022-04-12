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
		<Faq />
		<Last />
		</>
	)
}

export default App;
