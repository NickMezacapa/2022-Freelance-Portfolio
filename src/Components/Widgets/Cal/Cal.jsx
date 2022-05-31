import React from 'react';
import './Cal.css';

const Cal = () => {

    window.onload = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var day = today.getDay();
        var dayOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
    
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = yyyy + "-" + mm + "-" + dd;
    
        const dowDynamic = document.querySelector(".dynamic-dow");
        const todayDateDynamic = document.querySelector(".dynamic-date");
    
        dowDynamic.innerHTML = dayOfWeek[day];
        todayDateDynamic.innerHTML = dd;

        const slider = document.querySelector('#firstVertSlider');
        const slider2 = document.querySelector('#secondVertSlider');
		slider.setAttribute('value', '100');
		slider2.setAttribute('value', '80');
        
/*         const apiKey = "28ac90daea56eeddfa3d2b7d0bce89e4";
        var api = `http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&units=imperial&APPID=${apiKey}`;
        var request = new XMLHttpRequest();
        request.open("GET", api, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
                console.log(data);
                var weather = data.weather[0].main;
                const dynamicTemp = document.querySelector(".dynamic-temp");
                const dynamicWeatherDesc = document.querySelector(".dynamicWeatherDesc");
                let hiTempSpan = document.querySelector("#highTemp");
                let lowTempSpan = document.querySelector("#lowTemp");
                let fetchedTemp = data.main.temp;
                let fetchedHiTemp = data.main.temp_max;
                let fetchedLowTemp = data.main.temp_min;
                fetchedHiTemp = fetchedHiTemp.toFixed(0);
                fetchedLowTemp = fetchedLowTemp.toFixed(0);
    
                fetchedTemp = fetchedTemp.toFixed(0);
                if (dynamicTemp) {
                dynamicTemp.innerHTML = fetchedTemp + "&#xb0;";
                }
                dynamicWeatherDesc.innerHTML = weather;
                hiTempSpan.innerHTML = fetchedHiTemp + "&#xb0;";
                lowTempSpan.innerHTML = fetchedLowTemp + "&#xb0;";
            } else {
                // We reached our target server, but it returned an error
                console.log("Error");
            }
        };
        request.onerror = function () {
            // There was a connection error of some sort
            console.log("Error");
        };
        request.send(); */


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
				"A web scraper that utilizes machine learning and natural language processing to extract data from sports news websites and summarize text into quick and meaningful reports.";
		}


    };  


  

  return (
    <div className='cw_container'>
        <div className="cw_content-wrapper">
            <div class="cw_content-DoW">
                <h1 class="dynamic-dow">Monday</h1>
            </div>
            <div class="cw_content-date">
                <h1 class="dynamic-date">10</h1>
            </div>
        </div>
    </div>
  )
}

export default Cal