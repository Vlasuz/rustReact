import React from 'react'
import users from './../../assets/images/users.svg'
import clothes_shop from './../../assets/images/clothes-shop.svg'
import { NavLink } from 'react-router-dom'
import { FightTopStyle } from './fightTop.styled'
import { Translate } from '../translate/Translate'
import { useSelector } from 'react-redux'

interface IFightTopProps {

}

export const FightTop: React.FC<IFightTopProps> = () => {

    const userOnline = useSelector((state: any) => state.toolkit.userOnline)

    return (
        <FightTopStyle className="fight-page__top">
            <div className="create-game">
                <p>
                    <Translate>create_fight_room</Translate>
                </p>
                <div className="players">
                    <img src={users} alt="Ico" />
                    <span>
                        {userOnline}
                    </span>
                </div>
                {/* onClick="openPopup('new-room')" */}
                <button className="create-game__button">
                    <Translate>create_fight_room_button</Translate>
                </button>
            </div>
            <NavLink to={"/shop"} className="clothes-shop">
                <p>
                    <Translate>shop_skins_button</Translate>
                </p>
                <img src={clothes_shop} alt="Ico" />
            </NavLink>
        </FightTopStyle>
    )
}
