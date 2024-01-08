import React, {useContext, useEffect} from 'react'
import {IBattleGame, IUser} from "../../../../model";
import {BattlePlayer} from "../BattlePlayer";

interface IBattleMode1V1Props {
    itemData: IBattleGame
}

export const BattleMode1V1: React.FC<IBattleMode1V1Props> = ({itemData}) => {

    const membersCount = Array.from({length: 2}, (_, index) => ++index)

    return (
        <div className="players">

            {
                membersCount.map(item => {
                    return (
                        <>
                            <BattlePlayer
                                itemData={itemData}
                                isWinner={itemData?.winners?.some(win => win.position === item)}
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
