import React, { useEffect, useState } from 'react'
import { FightStyled } from './Fight.styled'

import { FightItem } from './components/fightItem/FightItem'
import { fightsList } from '../../data/fights'
import { IFightItem } from '../../model'
import { Loading } from '../../components/loading/Loading'
import { FightTop } from '../../components/fightTop/FightTop'
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {getWsLink} from "../../functions/getWsLink";
import {retry} from "@reduxjs/toolkit/query";

interface IMainProps {

}

let ws: any = new WebSocket(getWsLink("ws/api/fight/lobby/"));

export const Fight: React.FC<IMainProps> = () => {

    const [fightList, setFightList] = useState<IFightItem[]>([])

    useEffect(() => {
        axios.get(getApiLink('api/fight/room/list')).then(({data}) => {
            setFightList(data)
        }).catch(er => {console.log('Схватки', er)})
    }, [])

    useEffect(() => {
        ws.onmessage = (e: any) => {
            const message = JSON.parse(JSON.parse(e.data))

            console.log(message)

            if(message.type === "new_room") {
                setFightList(prev => [message.data, ...prev])
            } else if (message.type === "remove_room") {
                setFightList(prev => prev.filter(prevItem => prevItem.id !== message.data.id))
            } else if (message.type === "change_room") {
                setFightList(prev => {

                    let itemIndex = 0;
                    prev.filter((item: any, index: number) => {
                        if(item?.id === message?.data?.id) itemIndex = index;
                    })

                    return [...prev.slice(0, itemIndex), message.data, ...prev.slice(itemIndex + 1)];
                })
            }

        }
    }, [])

    return (
        <FightStyled>

            <FightTop/>

            <div className="fight-page__list-games">

                <Loading>

                    {fightList.map((item: IFightItem, index: number) => <FightItem index={index} key={item.id} data={item} />)}

                </Loading>

            </div>

        </FightStyled>
    )
}
