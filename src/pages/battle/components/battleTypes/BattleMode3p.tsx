import React from 'react'
import {IBattleGame} from "../../../../model";
import {BattlePlayer} from "../BattlePlayer";

interface IBattleMode3PProps {
    itemData: IBattleGame
}

export const BattleMode3P: React.FC<IBattleMode3PProps> = ({itemData}) => {

    const membersCount = Array.from({length: 3}, (_, index) => ++index)

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
                                isGroup={true}
                            />
                        </>
                    )
                })
            }

        </div>
    )

}
