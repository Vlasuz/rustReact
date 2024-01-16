import React, {useEffect} from 'react'
import {IBattleGame, IUser} from "../../../../model";
import {BattlePlayer} from "../BattlePlayer";

interface IBattleMode1V1V1Props {
    itemData: IBattleGame
}

export const BattleMode1V1V1: React.FC<IBattleMode1V1V1Props> = ({itemData}) => {

    const membersCount = Array.from({length: 3}, (_, index) => ++index)

    return (
        <div className="players">

            {
                membersCount.map(item => {
                    return (
                        <React.Fragment key={item}>
                            <BattlePlayer
                                itemData={itemData}
                                isWinner={!!(itemData?.winners?.length && itemData.winners[0].position === item)}
                                numberOfPosition={item}
                            />
                            <b>VS</b>
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}
