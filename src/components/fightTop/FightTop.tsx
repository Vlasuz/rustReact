import React from 'react'
import users from './../../assets/images/users.svg'
import clothes_shop from './../../assets/images/clothes-shop.svg'
import { NavLink } from 'react-router-dom'
import { FightTopStyle } from './fightTop.styled'

interface IFightTopProps {

}

export const FightTop: React.FC<IFightTopProps> = () => {

    return (
        <FightTopStyle className="fight-page__top">
            <div className="create-game">
                <p>Создайте комнату со своей ставкой</p>
                <div className="players">
                    <img src={users} alt="Ico" />
                    <span>176</span>
                </div>
                {/* onClick="openPopup('new-room')" */}
                <button className="create-game__button">Создать игру</button>
            </div>
            <NavLink to={"/shop"} className="clothes-shop">
                <p>Магазин
                    <br />костюмов</p>
                <img src={clothes_shop} alt="Ico" />
            </NavLink>
        </FightTopStyle>
    )
}
