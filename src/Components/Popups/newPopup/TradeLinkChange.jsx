import React from 'react';
import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import OpenPopup from "../../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import PopupCrossClose from "./PopupCrossClose";

const TradeLinkChange = () => {

    const userData = useSelector(state => state.reducerUserData.data)
    const dispatch = useDispatch()

    return (
        <div className="popup__content">
            <h2>
                <Translate>trade_link</Translate>
            </h2>
            <p>
                <Translate>write_your_trade_link</Translate>
            </p>
            <PopupCrossClose />
            <div className="input">
                <input className="trade-link__input" type="text" readOnly value={userData.trade_link}/>
                <img src="../images/lock.svg" alt="Ico"/>
            </div>
            <div className="trade-link__buttons">
                <button className="grey" onClick={() => dispatch(setOpenPopup("popup-trade-link"))}>
                    <Translate>text_change</Translate>
                </button>
                <a target={"_blank"} href={userData.profile + "tradeoffers/privacy"}>
                    <Translate>where_trade_link_get</Translate>
                </a>
            </div>
        </div>
    );
};

export default TradeLinkChange;