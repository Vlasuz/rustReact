import React from 'react'
import {FightButtonStyled} from './fightButton.styled'

import coin from './../../../../assets/images/header__coins.svg'
import looser from './../../../../assets/images/looser.svg'
import {IFightItem} from '../../../../model'

interface IFightButtonProps {
    data: IFightItem
}

export const FightButton: React.FC<IFightButtonProps> = ({data}) => {

    const userWinner =
        <div className="winner">
            <img src={coin} alt="Ico"/>
            <span>{data.first_player.coins}</span>
        </div>

    const userLooser =
        <div className="looser">
            <img src={looser} alt="Ico"/>
        </div>

    const isGameRunning = data.game_state === "attack" || data.game_state === "defense" || data.game_state === "duel" ? "process" : ""

    return (
        <FightButtonStyled className={"item__button " + isGameRunning}>

            {data.winner !== null ? <>

                {data.winner.id === data.first_player.user.id ? userWinner : userLooser}
                {data.winner.id === data.second_player?.user?.id ? userWinner : userLooser}

            </> : <>

                {data.game_state === "waiting" && <span>Играть за</span>}

                <img src={coin} alt="Ico"/>
                <span>
                    {data.first_player.coins}
                </span>

            </>
            }

        </FightButtonStyled>
    )
}
