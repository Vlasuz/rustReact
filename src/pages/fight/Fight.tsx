import React, { useEffect } from 'react'
import { FightStyled } from './fight.styled'

import { FightItem } from './components/fightItem/FightItem'
import { fightsList } from '../../data/fights'
import { IFightItem } from '../../model'
import { Loading } from '../../components/loading/Loading'
import { FightTop } from '../../components/fightTop/FightTop'

interface IMainProps {

}

export const Fight: React.FC<IMainProps> = () => {

    return (
        <FightStyled>

            <FightTop/>

            <div className="fight-page__list-games">

                <Loading>

                    {fightsList.map((item: IFightItem, index: number) => <FightItem key={index} fight_data={item} />)}

                </Loading>

            </div>

        </FightStyled>
    )
}
