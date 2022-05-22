import React from 'react';
import './Weather.css';
import { BsFillSunFill } from "react-icons/bs";

const Weather = () => {

/*     window.onload = function () {
        const apiKey = "28ac90daea56eeddfa3d2b7d0bce89e4";
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
        request.send();
    };  */
    

  return (
    <div className="weather-widget-container">
        <div className="ww_content-wrapper">
            <div className="ww_content-location">
                <h2 className="dynamic-location">Los Angeles</h2>
                <h1 className="dynamic-temp">72&#xb0;</h1>
            </div>
            <div className="ww_content-summary">
                <div className="ww_summary-wrap">
                    <div className="dynamicWeatherIcon">
                        <BsFillSunFill className='dynamic-ww-icon' color='yellow' />
                    </div>
                    <div className="dynamicWeatherDesc">
                        Sunny
                    </div>
                    <div className="dynamicHiLo">
                        H: <span id='highTemp'>72</span> L: <span id='lowTemp'>65</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather