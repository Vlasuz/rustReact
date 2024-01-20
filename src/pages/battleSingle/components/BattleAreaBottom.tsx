import React, {useContext} from 'react'
import {GameSocket} from "../BattleSingle";
import {BattleAreaBottomBox} from "./BattleAreaBottomBox";

interface IBattleAreaBottomProps {
    blocksOpen: number
    gameType: string
}

export const BattleAreaBottom: React.FC<IBattleAreaBottomProps> = ({blocksOpen, gameType}) => {

    const webSocket: any = useContext(GameSocket)

    // {/*general-block-end_all-side*/}
    // {/*general-block-end_left-side*/}
    // {/*general-block-end_right-side*/}
    // {/*general-block-end_left-half-side*/}
    // {/*general-block-end_right-half-side*/}

    const typeModes: { [key: string]: number } = {
        "two_way": 2,
        "three_way": 3,
        "four_way": 4,
        "two_v_two": 4,
        "two_p": 2,
        "three_p": 3,
        "four_p": 4,
    }
    const typeClasses: {[key: string]: { playersCount: number, winnerClass: string}} = {
        "two_way": {
            playersCount: 2,
            winnerClass: webSocket?.battle?.winners.some((win: any) => win.position === 1) ? "general-block-end_left-side" : "general-block-end_right-side"
        },
        "three_way": {
            playersCount: 3,
            winnerClass: webSocket?.battle?.winners.some((win: any) => win.position === 1) ? "general-block-end_left-side" : webSocket?.battle?.winners.some((win: any) => win.position === 3) ? "general-block-end_right-side" : "",
        },
        "four_way": {
            playersCount: 4,
            winnerClass: webSocket?.battle?.winners.some((win: any) => win.position === 1) ? "general-block-end_left-side" : webSocket?.battle?.winners.some((win: any) => win.position === 2) ? "general-block-end_left-half-side" : webSocket?.battle?.winners.some((win: any) => win.position === 3) ? "general-block-end_right-half-side" : webSocket?.battle?.winners.some((win: any) => win.position === 4) ? "general-block-end_right-side" : "",
        },
        "two_v_two": {
            playersCount: 4,
            winnerClass: webSocket?.battle?.winners.some((win: any) => win.position === 1) ? "general-block-end_left-side" : "general-block-end_right-side"
        },
        "two_p": {
            playersCount: 2,
            winnerClass: "general-block-end_all-side"
        },
        "three_p": {
            playersCount: 3,
            winnerClass: "general-block-end_all-side"
        },
        "four_p": {
            playersCount: 4,
            winnerClass: "general-block-end_all-side"
        },
    }

    return (
        <div className={`general-block ${typeClasses[webSocket?.battle?.mode]?.winnerClass} general-block-end area-${gameType}`}>

            {
                Array.from({length: typeModes[webSocket?.battle?.mode]}, (_, index) => index + 1).map(item =>
                    <BattleAreaBottomBox
                        key={item}
                        isWinner={webSocket?.battle?.winners.some((win: any) => win.position === item)}
                        winnerCoins={webSocket?.battle?.winners.filter((win: any) => win.position === item && win)[0]?.total_win}
                        blocksOpen={blocksOpen}
                    />
                )
            }

        </div>
    )
}
