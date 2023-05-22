import React, {useState} from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import {useDispatch, useSelector} from "react-redux";
import {setOpenPopup} from "../../Redux/Reducers/reducerOpenPopup";
import Translate from "../../Hooks/Translate";

const PopupTradingErrorCancel = () => {

    const isPopup = useSelector(state => state.reducerOpenPopup)
    const isOpen = isPopup.popup === "popup-trade-error-cancel"
    const dispatch = useDispatch()

    const handleClosePopup = () => {
        dispatch(setOpenPopup(""))
    }

    return (
        <div className={"popup popup-trade popup-trade-error-cancel" + (isOpen ? " popup_active" : "")}>
            <div className="popup__bgd" onClick={handleClosePopup} />
            <div className="popup__content">
                <h2>
                    <span><Translate>error</Translate></span>
                    <div className="img">
                        <img src="../images/error-red.svg" alt="Error"/>
                    </div>
                </h2>
                <p><Translate>cancel_trading</Translate></p>
                <div className="popup__cross popup__close" onClick={handleClosePopup}>
                    <img src="../images/cross.svg" alt="Close"/>
                </div>
            </div>
        </div>
    );
};

export default PopupTradingErrorCancel;