import React from 'react';
import PopupNewRoom from "../Popups/PopupNewRoom";
import {NavLink} from "react-router-dom";
import OpenPopup from "../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import Translate from "../../Hooks/Translate";
import {setNotice} from "../../Redux/Reducers/reducerNotice";

const FightTop = () => {

    const membersOnline = useSelector(state => state.reducerChat.online)
    const userData = useSelector(state => state.reducerUserData.data)
    const dispatch = useDispatch()

    const routeToShop = () => {
        dispatch(setNotice("auth_for_action"))
    }

    const handleOpenPopup = () => {
        !!Object.keys(userData).length ? OpenPopup('popup-new-room') : dispatch(setNotice("auth_for_action"))
    }

    return (
        <div className="section-shop__top">
            <PopupNewRoom/>
            <div className="create-game">
                <p>
                    <Translate>create_fight_room</Translate>
                </p>
                <div className="players">
                    <img src="../images/users.svg" alt="Ico"/>
                    <span>
                        {membersOnline}
                    </span>
                </div>
                <button className="create-game__button" onClick={handleOpenPopup}>
                    <Translate>create_fight_room_button</Translate>
                </button>
            </div>


            {!!Object.keys(userData).length ?
                <NavLink to={'/clothes-shop'} className="clothes-shop">
                    <p>
                        <Translate>shop_skins_button</Translate>
                    </p>
                    <img src="../images/clothes-shop.svg" alt="Ico"/>
                </NavLink> :
                <button onClick={routeToShop} className="clothes-shop">
                    <p>
                        <Translate>shop_skins_button</Translate>
                    </p>
                    <img src="../images/clothes-shop.svg" alt="Ico"/>
                </button>
            }
        </div>
    );
};

export default FightTop;