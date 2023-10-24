import React from 'react'
import {FightButtonStyled} from './fightButton.styled'

import coin from './../../../../assets/images/header__coins.svg'
import looser from './../../../../assets/images/looser.svg'
import {IFightItem} from '../../../../model'
import {useDispatch, useSelector} from "react-redux";
import {setNotice, setPopup} from "../../../../redux/toolkitSlice";

interface IFightButtonProps {
    data: IFightItem
}

export const FightButton: React.FC<IFightButtonProps> = ({data}) => {

    const dispatch = useDispatch()

    const userData = useSelector((state: any) => state.toolkit.user)

    const userWinner = (user: any) => {
        return (
            <div className="winner">
                <img src={coin} alt="Ico"/>
                <span>{user.coins}</span>
            </div>
        )
    }

    const userLooser =
        <div className="looser">
            <img src={looser} alt="Ico"/>
        </div>

    const isGameRunning = data.game_state === "attack" || data.game_state === "defense" || data.game_state === "duel" ? "process" : ""

    const handlePressButton = () => {
        if (data.winner === null && Object.keys(userData).length && !data.first_player.items.length) {
            dispatch(setPopup("popup-entry-coins"))
        } else if (!Object.keys(userData).length) {
            dispatch(setNotice('beforeYouNeedAuth'))
        } else if (data.second_player?.user?.id) {
            dispatch(setNotice('fightItemAlreadyProcess'))
        } else if (data.winner === null && Object.keys(userData).length && data.first_player.items.length) {
            dispatch(setPopup("popup-entry-clothes"))
        }
    }

    return (
        <FightButtonStyled onClick={_ => handlePressButton()} className={"item__button " + isGameRunning}>

            {data.winner !== null ? <>

                {data.winner.id === data.first_player.user.id ? userWinner(data.first_player) : userLooser}
                {data.winner.id === data.second_player?.user?.id ? userWinner(data.second_player) : userLooser}

            </> : <>

                {!!Object.keys(userData).length && data.game_state === "waiting" && <span>Играть за</span>}
                <img src={coin} alt="Ico"/>
                <span>{data.first_player.coins}</span>

            </>
            }

        </FightButtonStyled>
    )
}
