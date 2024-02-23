import React, {useEffect, useState} from 'react'
import randomIcon from './../../../../../assets/images/random.svg'
import {AirdropMoveBagsItem} from "./AirdropMoveBagsItem";
import {useDispatch, useSelector} from "react-redux";
import {
    changeAirdropBagsMap,
    clearAirdropBagsMap,
    removeAirdropBags,
    setAirdropUserStatus, setSound
} from '../../../../../redux/toolkitSlice';

interface IAirdropMoveBagsProps {
    handleJoinGame: any
    setPointOfGame: any
}

export const AirdropMoveBags: React.FC<IAirdropMoveBagsProps> = ({handleJoinGame, setPointOfGame}) => {

    const airdropBags = useSelector((state: any) => state.toolkit.airdropBags)
    const dispatch = useDispatch()
    const [bagsList, setBagsList] = useState(Array(airdropBags).fill(''))

    const handleRandom = () => {

        // @ts-ignore
        document.querySelectorAll('.bags li').forEach(item => item.style.transition = "top .3s ease, left .3s ease");
        dispatch(changeAirdropBagsMap())

        dispatch(setSound('sound12'))


    }

    useEffect(() => {
        setBagsList(Array(airdropBags).fill(''))
    }, [airdropBags])

    const isDraggingFunc = () => {
        dispatch(removeAirdropBags(1))
    }

    const handleCancelGame = () => {
        dispatch((setAirdropUserStatus("choose")))
        dispatch(clearAirdropBagsMap())
        setPointOfGame("choose")
        dispatch(setSound('sound12'))
    }

    return (
        <div className="airdrop__move">
            <div className="move__top">
                <h3>Перетащите спальники:</h3>
                <button onClick={handleCancelGame}>
                    x
                </button>
            </div>
            <ul>

                {
                    bagsList?.map((item, index) => <AirdropMoveBagsItem key={index} isDraggingFunc={isDraggingFunc} />)
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
