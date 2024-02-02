import React, { useEffect, useRef } from 'react'
import { VolumeStyled } from './volume.styled'
import mute from './../../../../assets/images/mute.svg'
import music from './../../../../assets/images/music.svg'
import { useMusicVolume } from '../../../../hooks/changeMusicValue'
import { useSounds } from '../../../../hooks/sounds'
import { soundList } from '../../../../data/soundList'
import getCookies from "../../../../functions/getCookie";

interface IVolumeProps {

}

export const Volume: React.FC<IVolumeProps> = () => {

    const { value, handleSwitch, handleChange } = useMusicVolume()
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
