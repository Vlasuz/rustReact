import React, { useEffect, useRef, useState } from 'react'
import { VolumeStyled } from './volume.styled'
import mute from './../../../../assets/images/mute.svg'
import music from './../../../../assets/images/music.svg'
import { useMusicVolume } from '../../../../hooks/changeMusicValue'
import { useSounds } from '../../../../hooks/sounds'
import { soundList } from '../../../../data/soundList'
import getCookies from "../../../../functions/getCookie";
import setCookie from "../../../../functions/setCookie";

interface IVolumeProps {

}

export const Volume: React.FC<IVolumeProps> = () => {

    const [value, setValue] = useState(getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : 0)

    useEffect(() => {
        // setValueCookie(getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : 0)
        // setValue(getCookies("volume_music_rust") ? +JSON.parse(`${getCookies("volume_music_rust")}`) : 0);
    }, [])

    const handleSwitch = () => {
        if (value > 0) {
            setValue(0)
            setCookie("volume_music_rust", JSON.stringify(0))
        } else {
            setValue(50)
            setCookie("volume_music_rust", JSON.stringify(50))
        }
    }

    const { handleChange } = useMusicVolume(setValue)
    const { audioBlock, sound } = useSounds({ value })

    return (
        <VolumeStyled className='music-volume'>
            <audio ref={audioBlock} src={soundList[sound]} controls></audio>
            <button onClick={handleSwitch}>
                <img src={value > 0 ? music : mute} alt="Ico" />
            </button>
            <div className="volume__block">
                <img src={music} alt="Ico" />
                <input type="range" value={value} onChange={handleChange} />
            </div>
        </VolumeStyled>
    )
}
