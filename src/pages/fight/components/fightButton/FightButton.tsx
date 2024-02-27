import React from 'react'
import {FightButtonStyled} from './fightButton.styled'

import coin from './../../../../assets/images/header__coins.svg'
import looser from './../../../../assets/images/looser.svg'
import {IFightItem, IUser} from '../../../../model'
import {useDispatch, useSelector} from "react-redux";
import {setFightItemData, setNotice, setPopup} from "../../../../redux/toolkitSlice";
import {useNavigate} from "react-router";
import {prettyCoinValues} from "../../../../functions/prettyCoinValues";

interface IFightButtonProps {
    data: IFightItem
}

export const FightButton: React.FC<IFightButtonProps> = ({data}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    const userWinner = (user: any) => {
        return (
            <div className="winner">
                <img src={coin} alt="Ico"/>
                <span>
                    {prettyCoinValues(user.coins)}
                </span>
            </div>
        )
    }

    const userLooser = () => {
        return (
            <div className="looser">
                <img src={looser} alt="Ico"/>
            </div>
        )
    }

    const isUserInGame = Object.keys(userData).length && (data.first_player.user.id === userData.id || data.second_player?.user.id === userData.id)
    const isGameRunning = !isUserInGame && !(data.game_state === "waiting" || data.game_state === "attack" || data.game_state === "defense" || data.game_state === "duel") ? "process" : ""

    const handlePressButton = () => {

        if (data.game_state === "waiting" && !userData?.id) {
            dispatch(setNotice('beforeYouNeedAuth'))
        }

        if (data.game_state === "waiting") {

            if (userData?.id && !isUserInGame && !data.second_player?.user?.id && data.game_state === "waiting" && !data.first_player.items.length) {
                dispatch(setPopup("popup-entry-coins"))
            } else if (userData?.id && !isUserInGame && !data.second_player?.user?.id && data.game_state === "waiting" && data.first_player.items.length) {
                dispatch(setPopup("popup-entry-clothes"))
            } else if (isUserInGame) {
                navigate("/fight/" + data.id)
            }

            dispatch(setFightItemData(data))

            return;
        }

        if (data.game_state === "ended") {
            navigate("/fight/" + data.id)
            dispatch(setFightItemData(data))
            return;
        }


        // if(isUserInGame) {
        //     navigate("/fight/" + data.id)
        // } else if (!data.second_player?.user?.id && data.game_state === "waiting" && !data.first_player.items.length) {
        //     dispatch(setPopup("popup-entry-coins"))
        // } else if (!data.second_player?.user?.id && data.game_state === "waiting" && data.first_player.items.length) {
        //     dispatch(setPopup("popup-entry-clothes"))
        // } else {
        //
        // }


        // if (isUserInGame) {
        //     dispatch(setFightItemData(data))
        //     navigate("/fight/" + data.id)
        // } else if (data.winner === null && Object.keys(userData).length && !data.first_player.items.length) {
        //     dispatch(setPopup("popup-entry-coins"))
        //     dispatch(setFightItemData(data))
        // } else if (isGameRunning) {
        //     dispatch(setNotice('fightItemAlreadyProcess'))
        // } else if (!Object.keys(userData).length) {
        //     dispatch(setNotice('beforeYouNeedAuth'))
        // } else if (data.second_player?.user?.id) {
        //     dispatch(setNotice('fightItemAlreadyProcess'))
        // } else if (data.winner === null && Object.keys(userData).length && data.first_player.items.length) {
        //     dispatch(setPopup("popup-entry-clothes"))
        //     dispatch(setFightItemData(data))
        // }
    }

    const buttonContent = () => {
        if (isUserInGame && data.game_state !== "ended") {
            return (
                <span>Войти в игру</span>
            )
        } else if (data.winner !== null) {
            return (<>
                {data.winner.user.id === data.first_player?.user?.id ? userWinner(data.first_player) : userLooser()}
                {data.winner.user.id === data.second_player?.user?.id ? userWinner(data.second_player) : userLooser()}
            </>)
        } else if (data.winner === null) {
            return (<>
                {!!Object.keys(userData).length && data.game_state === "waiting" && <span>Играть за</span>}
                <img src={coin} alt="Ico"/>
                <span>{prettyCoinValues(data.first_player.coins)}</span>
            </>)
        }
    }

    return (
        <FightButtonStyled onClick={_ => handlePressButton()}
                           className={"item__button " + (data.winner !== null ? "finish" : isGameRunning)}>

            {buttonContent()}

        </FightButtonStyled>
    )
}
