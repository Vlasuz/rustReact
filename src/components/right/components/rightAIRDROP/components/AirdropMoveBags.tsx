import React, {useEffect, useState} from 'react'
import randomIcon from './../../../../../assets/images/random.svg'

interface IAirdropMoveBagsProps {
    countOfBags: any
    handleJoinGame: any
}

export const AirdropMoveBags: React.FC<IAirdropMoveBagsProps> = ({countOfBags, handleJoinGame}) => {

    const [bagsList, setBagsList] = useState(Array(countOfBags).fill(''))

    const handleRandom = () => {
        setBagsList([])
    }

    return (
        <div className="airdrop__move">
            <h3>Перетащите спальники:</h3>
            <ul>

                {
                    bagsList?.map((item, index) =>
                        <li key={index} onClick={_ => setBagsList(prev => [...prev.slice(0, bagsList.length - 1)])}
                            className="sleepers__item">
                            <button/>
                        </li>
                    )
                }

            </ul>
            <div className="move__buttons">
                <button onClick={handleRandom} className="move__random">
                    <span>случайно</span>
                    <img src={randomIcon} alt="Random"/>
                </button>
                <button onClick={handleJoinGame} disabled={!!bagsList.length}
                        className={"move__submit " + (bagsList.length ? " move__random" : "")}>
                    <span>Подтвердить</span>
                </button>
            </div>
        </div>
    )
}
