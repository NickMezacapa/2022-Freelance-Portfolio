import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './Content.css';

const Content = () => {

	window.onload = function () {
		const secondProjTitle = document.querySelector(
			".ProjectShowcase-Row_firstRow_right .Content-InnerWrapper_projTitle",
		);
		const secondProjSubTitle = document.querySelector(
			".ProjectShowcase-Row_firstRow_right .Content-InnerWrapper_projSubTitle",
		);
		if (secondProjTitle) {
			secondProjTitle.innerText = "AI Brain Tumor Detection";
		}
		if (secondProjSubTitle) {
			secondProjSubTitle.innerHTML =
				"A Deep Convolutional Generative Adversarial Network (DCGAN) to detect and assess brain tumors as cancerous or non-cancerous.<br /><br /> 97% confidence rate.";
		}
		const thirdProjTitle = document.querySelector(
			".ProjectShowcase-Row_secondRow_left .Content-InnerWrapper_projTitle",
		);
		const thirdProjSubTitle = document.querySelector(
			".ProjectShowcase-Row_secondRow_left .Content-InnerWrapper_projSubTitle",
		);
		if (thirdProjTitle) {
			thirdProjTitle.innerText = "Full Stack Private Search Engine";
		}
		if (thirdProjSubTitle) {
			thirdProjSubTitle.innerHTML =
				"An internet search engine that emphasizes protecting searchers' privacy and avoids personalized search results.";
		}
		const fourthProjTitle = document.querySelector(
			".ProjectShowcase-Row_secondRow_right .Content-InnerWrapper_projTitle",
		);
		const fourthProjSubTitle = document.querySelector(
			".ProjectShowcase-Row_secondRow_right .Content-InnerWrapper_projSubTitle",
		);
		if (fourthProjTitle) {
			fourthProjTitle.innerText = "Machine Learning Web Scraper";
		}
		if (fourthProjSubTitle) {
			fourthProjSubTitle.innerHTML =
				"A web scraper that utilizes machine learning to extract data from sports news websites and summarizes text into quick and meaningful reports.";
		}
		const fifthProjTitle = document.querySelector(
			".ProjectShowcase-Row_thirdRow_left .Content-InnerWrapper_projTitle",
		);
		const fifthProjSubTitle = document.querySelector(
			".ProjectShowcase-Row_thirdRow_left .Content-InnerWrapper_projSubTitle",
		);
		if (fifthProjTitle) {
			fifthProjTitle.innerText = "Web Scraper";
		}
		if (fifthProjSubTitle) {
			fifthProjSubTitle.innerHTML =
				"A web scraper that utilizes machine learning to extract data from sports news websites and summarizes text into quick and meaningful reports.";
		}
	};


	return (
		<div className="Content-Wrapper">
			<div className="img-cta">
			</div>
			<section className="Content-Wrapper_inner">



				<div className="Content-InnerWrapper_div">
					<h2 className="Content-InnerWrapper_projTitle">
						AI Iris Detection for Assisted Webpage Scrolling
					</h2>
					<h4 className="Content-InnerWrapper_projSubTitle">
						A downloadable chrome extension for improved accessibility.
					</h4>
				</div>
				<div className="Content-CloseContainer">
					<AiOutlinePlus className="Content-CloseIcon" />
				</div>
			</section>
		</div>
	)
}

export default Content;