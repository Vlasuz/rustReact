import React from 'react'
import {IBattleGame} from "../../../../model";
import {BattlePlayer} from "../BattlePlayer";

interface IBattleMode2PProps {
    itemData: IBattleGame
}

export const BattleMode2P: React.FC<IBattleMode2PProps> = ({itemData}) => {

    const membersCount = Array.from({length: 2}, (_, index) => ++index)

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
                        </React.Fragment>
                    )
                })
            }

        </div>
    )

}
