import React, { useEffect } from 'react'
import battleAreaBottom from "../../../assets/images/battleAreaBottom.svg";
import userIcon from './../../../assets/images/user2.png'
import {Loading} from "../../../components/loading/Loading";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {IBattleCreate} from "../../../model";
import {BattleTeam2v2} from "./BattleTeam2v2";
import {BattleRegular1v1} from "./BattleRegular1v1";
import {BattleRegular1v1v1} from "./BattleRegular1v1v1";
import {BattleRegular4way} from "./BattleRegular4way";
import {BattleGroup2p} from "./BattleGroup2p";
import { BattleGroup4p } from './BattleGroup4p';
import { BattleGroup3p } from './BattleGroup3p';

interface IBattleBottomProps {
    gameType: IBattleCreate
}

export const BattleBottom:React.FC<IBattleBottomProps> = ({gameType}) => {

    const playersType: any = {
        "team-2v2": <BattleTeam2v2/>,
        "regular-1v1": <BattleRegular1v1/>,
        "regular-1v1v1": <BattleRegular1v1v1/>,
        "regular-4way": <BattleRegular4way/>,
        "group-2p": <BattleGroup2p/>,
        "group-3p": <BattleGroup3p/>,
        "group-4p": <BattleGroup4p/>,
    }

    return (
        <div className="battle-area__bottom">
            <div className="bgd">
                <img src={battleAreaBottom} alt="area"/>
            </div>

            {
                playersType[`${gameType.type}-${gameType.option}`]
            }
        </div>
    )
}
