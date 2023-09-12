import React, { useEffect, useState } from 'react'
import pererab_button from './../../../../assets/images/pererab-button.svg'
import coin from './../../../../assets/images/header__coins.svg'
import { IProduct } from '../../../../model'
import { ButtonToRecycleStyle } from './buttonToRecycle.styled'

interface IButtonToRecycleProps {
    pererabZoneItems: IProduct[]
}

export const ButtonToRecycle: React.FC<IButtonToRecycleProps> = ({ pererabZoneItems }) => {

    const [mainSum, setMainSum] = useState(0)

    useEffect(() => {
        setMainSum(0)
        pererabZoneItems.map(item => setMainSum(prev => prev + item.cost))
    }, [pererabZoneItems])

    return (
        <ButtonToRecycleStyle>
            <div className="lft">
                <img src={pererab_button} alt="Ico" />
                <span>Переработать</span>
            </div>
            <div className="rht">
                <img src={coin} alt="Ico" />
                <span>
                    {mainSum.toFixed(2)}
                </span>
            </div>
        </ButtonToRecycleStyle>
    )
}
