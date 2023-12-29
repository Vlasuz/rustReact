import React, {useEffect, useState} from 'react'
import {HistoryItem} from "../../pages/openCases/components/historyItem/HistoryItem";
import {BattleTopStyled} from "./BattleTop.styled";
import axios, {AxiosResponse} from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {IWinLineItem} from "../../model";
import {CSSTransition, TransitionGroup} from "react-transition-group";

interface IBattleTopProps {
    isFastActive?: boolean
}

export const BattleTop: React.FC<IBattleTopProps> = ({isFastActive}) => {

    const [winLinesList, setWinLinesList] = useState<IWinLineItem[]>([]);
    const [isLoadComplete, setIsLoadComplete] = useState(false);
    const [newItem, setNewItem] = useState<IWinLineItem | undefined>();

    useEffect(() => {
        // if (isLoad) return

        axios.get(getApiLink("api/crate/items/win_line/")).then((response: AxiosResponse) => {
            setWinLinesList(response.data);
            setTimeout(() => {
                setIsLoadComplete(true);
            }, 100)

            console.log(response.data)

            const ws: WebSocket = new WebSocket(getApiLink("ws/api/crate/win_line/", true))

            // ws.onopen = () => setIsLoad(true);
            ws.onmessage = (e: MessageEvent) => {
                const data = JSON.parse(JSON.parse(e.data))

                console.log(data.data)

                setNewItem(data.data)
            }

        }).catch(er => console.log("api/crate/items/win_line/", er))

    }, [])

    useEffect(() => {
        if (!newItem) return;

        setTimeout(() => {
            setWinLinesList((prev: any) => [newItem, ...prev])
            setNewItem(undefined)
        }, isFastActive ? 1000 : 11000)
    }, [newItem])

    console.log(winLinesList)

    // TODO поменять item?.item?.price на item?.item?.rarity

    return (
        <BattleTopStyled className="history">
            <TransitionGroup>
                <ul>
                    {winLinesList.map((item: IWinLineItem) => (
                        <CSSTransition
                            key={item?.id}
                            in={true}
                            timeout={300}
                            classNames={!isLoadComplete ? "sum-animation" : ""}
                            unmountOnExit
                        >
                            <HistoryItem
                                key={item?.id}
                                data={item}
                                type={+item?.item?.price < 50 ? "green" : "brown"}
                            />
                        </CSSTransition>
                    ))}
                </ul>
            </TransitionGroup>
        </BattleTopStyled>
    )
}
