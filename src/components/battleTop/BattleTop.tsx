import React, {useEffect, useState} from 'react'
import {HistoryItem} from "../../pages/openCases/components/historyItem/HistoryItem";
import {BattleTopStyled} from "./BattleTop.styled";
import axios, {AxiosResponse} from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {IWinLineItem} from "../../model";

interface IBattleTopProps {
    isClicked?: boolean
}

export const BattleTop: React.FC<IBattleTopProps> = ({isClicked}) => {

    const [winLinesList, setWinLinesList] = useState<IWinLineItem[]>([])
    const [isLoad, setIsLoad] = useState(false)
    const [newItems, setNewItems] = useState<IWinLineItem[]>([])

    useEffect(() => {
        if (isLoad) return

        axios.get(getApiLink("api/crate/items/win_line/")).then((response: AxiosResponse) => {
            setWinLinesList(response.data)

            console.log(response.data)

            const ws: WebSocket = new WebSocket(getApiLink("ws/api/crate/win_line/", true))

            ws.onopen = () => setIsLoad(true);
            ws.onmessage = (e: MessageEvent) => {
                const data = JSON.parse(JSON.parse(e.data))

                console.log(data.data)

                // setTimeout(() => {
                    setNewItems(prev => [...prev, data.data])
                // }, 11000)
            }

        }).catch(er => console.log("api/crate/items/win_line/", er))

    }, [])

    useEffect(() => {
        if (!isClicked) return;

        setTimeout(() => {
            const newArray = [...newItems, ...winLinesList]

            // setWinLinesList(newArray)
            // setNewItems([])
        }, 6000)
    }, [isClicked])

    return (
        <BattleTopStyled className="history">
            <ul>

                {
                    !!newItems.length && newItems.map((item: IWinLineItem, index) => <HistoryItem key={index}
                                                                                                  isLoad={isLoad}
                                                                                                  data={item}
                                                                                                  type={item?.item?.rarity && +item?.item?.rarity < 999 ? "green" : "brown"}/>)
                }
                {
                    winLinesList.map((item: IWinLineItem, index) => <HistoryItem key={index} isLoad={isLoad} data={item}
                                                                                 type={+item.item.rarity < 999 ? "green" : "brown"}/>)
                }

            </ul>
        </BattleTopStyled>
    )
}
