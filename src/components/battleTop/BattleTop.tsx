import React, { useEffect, useState } from 'react'
import {HistoryItem} from "../../pages/openCases/components/historyItem/HistoryItem";
import {BattleTopStyled} from "./BattleTop.styled";
import axios, {AxiosResponse} from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {IWinLineItem} from "../../model";

interface IBattleTopProps {

}

export const BattleTop:React.FC<IBattleTopProps> = () => {

    const [winLinesList, setWinLinesList] = useState<IWinLineItem[]>([])
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        if(isLoad) return
        
        axios.get(getApiLink("api/crate/items/win_line/")).then((response: AxiosResponse) => {
            setWinLinesList(response.data)

            const ws: WebSocket = new WebSocket(getApiLink("ws/api/crate/win_line/", true))

            ws.onopen = () => setIsLoad(true);
            ws.onmessage = (e: MessageEvent) => {
                const data = JSON.parse(JSON.parse(e.data))

                console.log(data)

                setTimeout(() => {
                    setWinLinesList(prev => [data.data, ...prev])
                }, 11000)
            }

        }).catch(er => console.log("api/crate/items/win_line/", er))

    }, [])

    return (
        <BattleTopStyled className="history">
            <ul>

                {
                    winLinesList.map((item: IWinLineItem, index) => <HistoryItem key={index} data={item} type={"green"}/>)
                }

            </ul>
        </BattleTopStyled>
    )
}
