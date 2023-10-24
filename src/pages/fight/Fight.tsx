import React, { useEffect, useState } from 'react'
import { FightStyled } from './fight.styled'

import { FightItem } from './components/fightItem/FightItem'
import { fightsList } from '../../data/fights'
import { IFightItem } from '../../model'
import { Loading } from '../../components/loading/Loading'
import { FightTop } from '../../components/fightTop/FightTop'
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";

interface IMainProps {

}

export const Fight: React.FC<IMainProps> = () => {

    const [fightList, setFightList] = useState<IFightItem[]>([])

    useEffect(() => {
        axios.get(getApiLink('api/fight/room/list')).then(({data}) => {
            setFightList(data)
            console.log(data)
        }).catch(er => {console.log('Схватки', er)})
    }, [])

    return (
        <FightStyled>

            <FightTop/>

            <div className="fight-page__list-games">

                <Loading>

                    {fightList.map((item: IFightItem, index: number) => <FightItem key={index} data={item} />)}

                </Loading>

            </div>

        </FightStyled>
    )
}
