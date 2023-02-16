import React from 'react';
import PopupNewRoom from "../Popups/PopupNewRoom";
import {NavLink} from "react-router-dom";
import OpenPopup from "../../Hooks/OpenPopup";
import {useSelector} from "react-redux";
import {Trans, useTranslation} from "react-i18next";

const FightTop = (props) => {
    const {t} = useTranslation();

    const membersOnline = useSelector(state => state.reducerChat.online)
    const userData = useSelector(state => state.reducerUserData.data)

    return (
        <div className="section-shop__top">
            <PopupNewRoom states={props.states}/>
            <div className="create-game">
                <p>
                    <Trans t={t}>create_fight_room</Trans>
                </p>
                <div className="players">
                    <img src="../images/users.svg" alt="Ico"/>
                    <span>
                        {membersOnline}
                    </span>
                </div>
                {!!Object.keys(userData).length && <button
                    className="create-game__button"
                    onClick={() => OpenPopup('popup-new-room')}>

                    <Trans t={t}>create_fight_room_button</Trans>
                </button>}
            </div>


            {!!Object.keys(userData).length && <NavLink to={'/clothes-shop'} className="clothes-shop">
                <p>
                    <Trans t={t}>shop_skins_button</Trans>
                </p>
                <img src="../images/clothes-shop.svg" alt="Ico"/>
            </NavLink>}
        </div>
    );
};

export default FightTop;