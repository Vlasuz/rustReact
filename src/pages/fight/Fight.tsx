import React, { useEffect } from 'react'
import { FightStyled } from './fight.styled'

import users from './../../assets/images/users.svg'
import clothes_shop from './../../assets/images/clothes-shop.svg'
import { FightItem } from './components/fightItem/FightItem'
import { fightsList } from '../../data/fights'
import { IFightItem } from '../../model'
import { Loading } from '../../components/loading/Loading'

interface IMainProps {

}

export const Fight: React.FC<IMainProps> = () => {

    return (
        <FightStyled>

            <div className="fight-page__top">
                <div className="create-game">
                    <p>Создайте комнату со своей ставкой</p>
                    <div className="players">
                        <img src={users} alt="Ico" />
                        <span>176</span>
                    </div>
                    {/* onClick="openPopup('new-room')" */}
                    <button className="create-game__button">Создать игру</button>
                </div>
                <div className="clothes-shop">
                    <p>Магазин
                        <br />костюмов</p>
                    <img src={clothes_shop} alt="Ico" />
                </div>
            </div>
            <div className="fight-page__list-games">

                <Loading>

                    {fightsList.map((item: IFightItem, index: number) => <FightItem key={index} fight_data={item} />)}

                </Loading>

            </div>

        </FightStyled>
    )
}
