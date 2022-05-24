import React from 'react';
import './Volume.css';
import { BsFillVolumeUpFill } from 'react-icons/bs';

const Volume = () => {
  return (
    <div className="volume__wrapper">
        <div className="volume__inner">
            <div className="volume__content">
                <div className="volume__icon">
                <BsFillVolumeUpFill id='volume-icon' size={128} color='rgb(220, 220, 220)' />
                </div>
                <div className="volume__measure">
                    <div className="volume__measure-inner">
                        <div className="volume__measurement vol1"></div>
                        <div className="volume__measurement vol2"></div>
                        <div className="volume__measurement vol3"></div>
                        <div className="volume__measurement vol4"></div>
                        <div className="volume__measurement vol5"></div>
                        <div className="volume__measurement vol6"></div>
                        <div className="volume__measurement vol7"></div>
                        <div className="volume__measurement vol8"></div>
                        <div className="volume__measurement vol9"></div>
                        <div className="volume__measurement vol10"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Volume