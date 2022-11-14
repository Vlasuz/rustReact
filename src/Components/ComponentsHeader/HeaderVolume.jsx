import React, {createElement, useEffect, useState} from 'react';

const HeaderVolume = () => {

    let changeVolume = (e) => {
        document.querySelector('#musicOnSite').volume = e.target.value / 100
    }

    const [muted, isMuted] = useState(true)
    const [imageVolume, setImageVolume] = useState(<img src="images/mute.svg" alt="Ico" />)

    const letsPlay = () => {
        if(muted){
            document.getElementById('musicOnSite').play()
            isMuted(false)
            setImageVolume(<img src="images/music.svg" alt="Ico" />)
            return
        }
        document.getElementById('musicOnSite').pause()
        setImageVolume(<img src="images/mute.svg" alt="Ico" />)
        isMuted(true)
    }


    return (
        <div className="header__volume">
            <audio id="musicOnSite" src="audio/muz.mp3" controls loop></audio>
            <button
                onClick={() => letsPlay()}
            >
                {imageVolume}
            </button>
            <div className="volume__block">
                <img src="images/music.svg" alt="Ico" />
                <input
                    type="range"
                    onChange={e => changeVolume(e)}
                />
            </div>
        </div>
    );
};

export default HeaderVolume;