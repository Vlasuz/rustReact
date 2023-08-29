import React from 'react'
import { FightButtonStyled } from './fightButton.styled'

import coin from './../../../../assets/images/header__coins.svg'
import looser from './../../../../assets/images/looser.svg'
import { IFightItem } from '../../../../model'

interface IFightButtonProps {
    fight_data: IFightItem
}

export const FightButton: React.FC<IFightButtonProps> = ({ fight_data }) => {

    const userWinner = <div className="winner">
        <img src={coin} alt="Ico" />
        <span>{fight_data.bank}</span>
    </div>

    const userLooser = <div className="looser">
        <img src={looser} alt="Ico" />
    </div>

    console.log(fight_data.user_winner !== null)

    return (
        <FightButtonStyled className={"item__button " + fight_data.game_status}>

            {fight_data.user_winner !== null ? <>

                {fight_data.user_winner.id === fight_data.user_first.id ? userWinner : userLooser}
                {fight_data.user_winner.id === fight_data.user_second?.id ? userWinner : userLooser}

            </> : <>

                {
                    fight_data.game_status === "waiting" && <span>Играть за</span>
                }

                <img src={coin} alt="Ico" />
                <span>
                    {fight_data.bank}
                </span>

            </>
            }

        </FightButtonStyled>
    )
}
