import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import {useSelector} from "react-redux";
import OpenPopup from "../../../Hooks/OpenPopup";
import axios from "axios";
import {reducerUserData} from "../../../Redux/Reducers/reducerUserData";
import Translate from "../../../Hooks/Translate";

const PopupChangeTradeLink = () => {

    const session = useSelector(state => state.reducerSession.session)

    return (
        <div className="popup popup-trade-link-change">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <Translate>trade_link</Translate>
                </h2>
                <p>
                    <Translate>write_your_trade_link</Translate>
                </p>
                <PopupCloseCross />
                <div className="input">
                    <input className="trade-link__input" type="text" disabled value={session.trade_link}/>
                    <img src="../images/lock.svg" alt="Ico"/>
                </div>
                <div className="trade-link__buttons">
                    <button className="grey" onClick={() => OpenPopup('popup-trade-link')}>
                        <Translate>text_change</Translate>
                    </button>
                    <a target={"_blank"} href={session.profile + "tradeoffers/privacy"}>
                        <Translate>where_trade_link_get</Translate>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopupChangeTradeLink;