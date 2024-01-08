import React from 'react'
import {IBattleGame} from "../../../../model";
import {BattlePlayer} from "../BattlePlayer";

interface IBattleMode4WayProps {
    itemData: IBattleGame
}

export const BattleMode4Way: React.FC<IBattleMode4WayProps> = ({itemData}) => {

    const membersCount = Array.from({length: 4}, (_, index) => ++index)

    return (
        <div className="players">

            {
                membersCount.map(item => {
                    return (
                        <>
                            <BattlePlayer
                                itemData={itemData}
                                isWinner={!!(itemData?.winners?.length && itemData.winners[0].position === item)}
                                numberOfPosition={item}
                            />
                            <b>VS</b>
                        </>
                    )
                })
            }

        </div>
    )
}
