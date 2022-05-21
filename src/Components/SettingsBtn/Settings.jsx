import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import './Settings.css';

const Settings = () => {

 const handleClick_stgBtn = () => {
    const settings = document.querySelector('.settings');
    const pop_inner = document.querySelector('.SP_popup-inner');
    settings.style.visibility = 'hidden';
    pop_inner.style.display = 'block';
 }

  return (
    <div className='settings'>
        <button className="settingsCta" onClick={handleClick_stgBtn}>
            <BsFillGearFill color='white' size={17} className="setting-icon-el" />
        </button>
    </div>
  )
}

export default Settings