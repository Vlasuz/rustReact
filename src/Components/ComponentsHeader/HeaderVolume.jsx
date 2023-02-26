import React, {createElement, useEffect, useState} from 'react';
import audio from '../../audio/muz.mp3'

const HeaderVolume = () => {

    let changeVolume = (e) => {
        document.querySelector('#musicOnSite').volume = e.target.value / 100
    }

    const [muted, isMuted] = useState(true)


    const handlePlay = () => {
        muted ? document.querySelector('#musicOnSite').play() : document.querySelector('#musicOnSite').pause()
        isMuted(prev => !prev)
    }

    return (
        <div className="header__volume">
            <audio id="musicOnSite" src={audio} controls loop></audio>
            <button onClick={() => handlePlay()}>
                {
                    muted ?
                        <img src="../images/mute.svg" alt="Ico" />:
                        <img src="../images/music.svg" alt="Ico" />
                }
            </button>
            <div className="volume__block">
                {
                    muted ?
                        <img src="../images/mute.svg" alt="Ico" />:
                        <img src="../images/music.svg" alt="Ico" />
                }
                <input
                    type="range"
                    onChange={e => changeVolume(e)}
                />
            </div>
        </div>
    );
};

export default HeaderVolume;