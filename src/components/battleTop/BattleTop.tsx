import React, { useEffect } from 'react'
import {HistoryItem} from "../../pages/openCases/components/historyItem/HistoryItem";
import {BattleTopStyled} from "./BattleTop.styled";

interface IBattleTopProps {

}

export const BattleTop:React.FC<IBattleTopProps> = () => {

    return (
        <BattleTopStyled className="history">
            <ul>
                <HistoryItem type={"green"}/>
                <HistoryItem type={"green"}/>
                <HistoryItem type={"green"}/>
                <HistoryItem type={"brown"}/>
                <HistoryItem type={"green"}/>
                <HistoryItem type={"green"}/>
                <HistoryItem type={"green"}/>
                <HistoryItem type={"green"}/>
            </ul>
        </BattleTopStyled>
    )
}
