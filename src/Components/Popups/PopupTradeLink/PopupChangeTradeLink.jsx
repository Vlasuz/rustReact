import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import {useSelector} from "react-redux";
import OpenPopup from "../../../Hooks/OpenPopup";
import axios from "axios";
import {reducerUserData} from "../../../Redux/Reducers/reducerUserData";

const PopupChangeTradeLink = () => {

    const userData = useSelector(state => state.reducerUserData.data)

    return (
        <div className="popup popup-trade-link-change">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Трейд-ссылка</h2>
                <p>Введите вашу трейд-ссылку Steam,
                    <br/>с ней можно пополнять баланс скинами</p>
                <PopupCloseCross />
                <div className="input">
                    <input className="trade-link__input" type="text" disabled value={userData.trade_link}/>
                    <img src="../images/lock.svg" alt="Ico"/>
                </div>
                <div className="trade-link__buttons">
                    <button className="grey" onClick={() => OpenPopup('popup-trade-link')}>
                        Изменить
                    </button>
                    <a target={"_blank"} href="https://steamcommunity.com/groups/dota2lounge/discussions/0/558746995155711933">Где ее взять?</a>
                </div>
            </div>
        </div>
    );
};

export default PopupChangeTradeLink;