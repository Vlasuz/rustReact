import React, {useEffect, useState} from 'react'

import coins from './../../../../../assets/images/header__coins.svg'

interface IAirdropBagsProps {

}

export const AirdropBags: React.FC<IAirdropBagsProps> = () => {

    const [countOfBags, setCountOfBags] = useState(0)
    const [costOfBags, setCostOfBags] = useState(0)

    const bagsArray = Array.apply('', Array(9))
    const costOneBag = 200

    return (
        <div className="airdrop__sleepers">
            <h3>Кол-во спальников:</h3>
            <ul>


                {
                    bagsArray.map((item, index) =>
                        <li key={index} className={countOfBags === index + 1 ? "button_active" : ""}
                            onClick={_ => {
                                setCountOfBags(index + 1)
                                setCostOfBags((index + 1) * costOneBag)
                            }}>
                            <button>{index + 1}</button>
                        </li>
                    )
                }

            </ul>
            <button className="sleepers__buy">

                {countOfBags > 0 ? <>
                    <span>Купить</span>
                    <img src={coins} alt="Coin"/>
                    <span>
                        {costOfBags}
                    </span>
                </> : <span>Выберите кол-во спальников</span>}
            </button>
        </div>
    )
}
