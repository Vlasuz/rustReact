import React, {useState} from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import {useDispatch, useSelector} from "react-redux";
import {setOpenPopup} from "../../Redux/Reducers/reducerOpenPopup";

const PopupTradingSuccess = () => {

    const isPopup = useSelector(state => state.reducerOpenPopup)
    const dispatch = useDispatch()
    const isOpen = isPopup.popup === "popup-trade-good"

    const handleClosePopup = () => {
        dispatch(setOpenPopup(""))
    }

    return (
        <div className={"popup popup-trade popup-trade-good" + (isOpen ? " popup_active" : "")}>
            <div className="popup__bgd" onClick={handleClosePopup} />
            <div className="popup__content">
                <h2 className="green">
                    <span>Отлично</span>
                    <div className="img">
                        <img src="../images/green-check.svg" alt="Error"/>
                    </div>
                </h2>
                <p>Сделка завершена</p>
                <div className="popup__cross popup__close" onClick={handleClosePopup}>
                    <img src="../images/cross.svg" alt="Close"/>
                </div>
            </div>
        </div>
    );
};

export default PopupTradingSuccess;