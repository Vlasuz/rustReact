import React from 'react';
import PopupCrossClose from "./PopupCrossClose";
import Translate from "../../../Hooks/Translate";

const TradingSuccess = () => {
    return (
        <div className="popup__content">
            <h2 className="green">
                <span><Translate>cool</Translate></span>
                <div className="img">
                    <img src="../images/green-check.svg" alt="Error"/>
                </div>
            </h2>
            <p><Translate>trade_success</Translate></p>
            <PopupCrossClose/>
        </div>
    );
};

export default TradingSuccess;