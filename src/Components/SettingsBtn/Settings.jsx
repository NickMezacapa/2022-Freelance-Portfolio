import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import './Settings.css';

const Settings = () => {
  return (
    <div className='settings'>
        <button className="settingsCta">
            <BsFillGearFill color='white' size={17} className="setting-icon-el" />
        </button>
    </div>
  )
}

export default Settings