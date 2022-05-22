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