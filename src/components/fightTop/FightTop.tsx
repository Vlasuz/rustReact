import React from 'react'
import users from './../../assets/images/users.svg'
import clothes_shop from './../../assets/images/clothes-shop.svg'
import { NavLink } from 'react-router-dom'
import { FightTopStyle } from './fightTop.styled'
import { Translate } from '../translate/Translate'
import {useDispatch, useSelector} from 'react-redux'
import {setPopup} from "../../redux/toolkitSlice";

interface IFightTopProps {

}

export const FightTop: React.FC<IFightTopProps> = () => {

    const dispatch = useDispatch()
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
                <button onClick={_ => dispatch(setPopup('popup-new-room'))} className="create-game__button">
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
