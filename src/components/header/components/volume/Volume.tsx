import React from 'react'
import { VolumeStyled } from './volume.styled'
import mute from './../../../../assets/images/mute.svg'
import music from './../../../../assets/images/music.svg'
import { useMusicVolume } from '../../../../hooks/changeMusicValue'

interface IVolumeProps {

}

export const Volume: React.FC<IVolumeProps> = () => {

    const {value, handleSwitch, handleChange} = useMusicVolume()

    return (
        <VolumeStyled className='music-volume'>
            <button onClick={handleSwitch}>
                <img src={value > 0 ? music : mute} alt="Ico" />
            </button>
            <div className="volume__block">
                <img src={music} alt="Ico" />
                <input type="range" value={value} onChange={handleChange}/>
            </div>
        </VolumeStyled>
    )
}
