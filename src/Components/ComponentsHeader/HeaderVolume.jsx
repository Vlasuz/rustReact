import React, {createElement, useEffect, useState} from 'react';
import audio from '../../audio/audio-rust.mp3'
import sound1 from '../../audio/sound-1.wav'
import sound2 from '../../audio/sound-2.wav'
import sound3 from '../../audio/sound-3.wav'
import sound4 from '../../audio/sound-4.wav'
import sound5 from '../../audio/sound-5.wav'
import sound6 from '../../audio/sound-6.wav'
import sound7 from '../../audio/sound-7.wav'
import sound8 from '../../audio/sound-8.wav'
import sound9 from '../../audio/sound-9.wav'
import sound10 from '../../audio/sound-10.wav'
import sound11 from '../../audio/sound-11.wav'
import sound12 from '../../audio/sound-12-1.wav'
import sound13 from '../../audio/sound-13.wav'
import sound13_1 from '../../audio/sound-13-1.wav'
import sound14 from '../../audio/sound-14.wav'
import sound15 from '../../audio/sound-15.wav'
import sound16 from '../../audio/sound-16.wav'
import sound17 from '../../audio/sound-17.wav'
import sound18 from '../../audio/sound-18.wav'
import sound19 from '../../audio/sound-19.wav'
import PlaySound from "../../Hooks/PlaySound";
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";

const HeaderVolume = () => {

    let changeVolume = (e) => {
        setVolme(e.target.value)
        document.querySelector('#musicOnSite').volume = e.target.value / 100
    }
    const sound = useSelector(state => state.reducerSound.sound)

    const soundNow = {
        "sound1": sound1,
        "sound2": sound2,
        "sound3": sound3,
        "sound4": sound4,
        "sound5": sound5,
        "sound6": sound6,
        "sound7": sound7,
        "sound8": sound8,
        "sound9": sound9,
        "sound10": sound10,
        "sound11": sound11,
        "sound12": sound12,
        "sound13": sound13,
        "sound13_1": sound13_1,
        "sound14": sound14,
        "sound15": sound15,
        "sound16": sound16,
        "sound17": sound17,
        "sound18": sound18,
        "sound19": sound19,
    }

    const [muted, isMuted] = useState(true)
    const [volume, setVolme] = useState(100)

    const handlePlay = () => {
        if (muted) {
            // document.querySelector('#musicOnSite').play()
        } else {
            document.querySelector('#musicOnSite').pause()
            document.querySelector('#musicOnSite').currentTime = 0
        }
        isMuted(prev => !prev)
    }

    useEffect(() => {
        document.querySelector('#musicOnSite')?.pause()
        document.querySelector('#musicOnSite').currentTime = 0
        if (!muted && sound) {
            setTimeout(() => {
                document.querySelector('#musicOnSite')?.play()
            }, 10)
        }
    }, [sound])

    return (
        <div className="header__volume">
            <audio id="musicOnSite" src={soundNow[sound]} controls></audio>
            <button onClick={() => handlePlay()}>
                {
                    muted ?
                        <img src="../images/mute.svg" alt="Ico"/> :
                        <img src="../images/music.svg" alt="Ico"/>
                }
            </button>
            <div className="volume__block">
                {
                    muted ?
                        <img src="../images/mute.svg" alt="Ico"/> :
                        <img src="../images/music.svg" alt="Ico"/>
                }
                <input
                    type="range"
                    value={volume}
                    onChange={e => changeVolume(e)}
                />
            </div>
        </div>
    );
};

export default HeaderVolume;