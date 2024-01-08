import React from 'react'
import {IBattleGame} from "../../../../model";
import {BattlePlayer} from "../BattlePlayer";

interface IBattleMode2V2Props {
    itemData: IBattleGame
}

export const BattleMode2V2: React.FC<IBattleMode2V2Props> = ({itemData}) => {

    return (
        <div className="players">
            <BattlePlayer
                itemData={itemData}
                isWinner={itemData?.winners?.some(win => win.position === 1)}
                numberOfPosition={1}
                color={"player_blue"}
            />
            <BattlePlayer
                itemData={itemData}
                isWinner={itemData?.winners?.some(win => win.position === 2)}
                numberOfPosition={2}
                color={"player_blue"}
            />

            <b>VS</b>

            <BattlePlayer
                itemData={itemData}
                isWinner={itemData?.winners?.some(win => win.position === 3)}
                numberOfPosition={3}
                color={"player_red"}
            />
            <BattlePlayer
                itemData={itemData}
                isWinner={itemData?.winners?.some(win => win.position === 4)}
                numberOfPosition={4}
                color={"player_red"}
            />
        </div>
    )
}
