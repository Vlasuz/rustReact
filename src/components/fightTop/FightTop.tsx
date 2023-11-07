import React from 'react'
import users from './../../assets/images/users.svg'
import clothes_shop from './../../assets/images/clothes-shop.svg'
import { NavLink } from 'react-router-dom'
import { FightTopStyle } from './fightTop.styled'
import { Translate } from '../translate/Translate'
import {useDispatch, useSelector} from 'react-redux'
import {setNotice, setPopup} from "../../redux/toolkitSlice";
import {useNavigate} from "react-router";

interface IFightTopProps {

}

export const FightTop: React.FC<IFightTopProps> = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userOnline = useSelector((state: any) => state.toolkit.userOnline)
    const userInfo = useSelector((state: any) => state.toolkit.user)

    const handleRedirectToShop = () => {
        if(Object.keys(userInfo).length) {
            navigate("/shop")
        } else {
            dispatch(setNotice("beforeYouNeedAuth"))
        }
    }

    const handleOpenPopupForCreate = () => {
        if(Object.keys(userInfo).length) {
            dispatch(setPopup('popup-new-room'))
        } else {
            dispatch(setNotice("beforeYouNeedAuth"))
        }
    }

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
                <button onClick={handleOpenPopupForCreate} className="create-game__button">
                    <Translate>create_fight_room_button</Translate>
                </button>
            </div>
            <button onClick={handleRedirectToShop} className="clothes-shop">
                <p>
                    <Translate>shop_skins_button</Translate>
                </p>
                <img src={clothes_shop} alt="Ico" />
            </button>
        </FightTopStyle>
    )
}
