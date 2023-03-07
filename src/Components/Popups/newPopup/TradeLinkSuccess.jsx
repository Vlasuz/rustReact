import React from 'react';
import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import OpenPopup from "../../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import PopupCrossClose from "./PopupCrossClose";

const TradeLinkSuccess = () => {

    return (
        <div className="popup__content">
            <h2>
                <Translate>trade_link</Translate>
            </h2>
            <p>
                <Translate>trade_link_success</Translate>
            </p>
            <PopupCrossClose/>
            <div className="success">
                <div className="success__inner">
                    <img src="../images/check-blue.svg" alt="Close"/>
                    <span>
                            <Translate>trade_link_active</Translate>
                        </span>
                </div>
            </div>
        </div>
    );
};

export default TradeLinkSuccess;