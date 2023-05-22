import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import Translate from "../../Hooks/Translate";

const PopupTradingErrorTradeLink = () => {
    return (
        <div className="popup popup-trade popup-trade-error-link">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <span><Translate>error</Translate></span>
                    <div className="img">
                        <img src="../images/error-red.svg" alt="Error"/>
                    </div>
                </h2>
                <p><Translate>not_added_trade_link</Translate></p>
                <PopupCloseCross />
                <div className="trade__buttons">
                    <button className="grey mini">
                        <span><Translate>to_profile</Translate></span>
                        <img src="../images/arr-td.svg" alt="Arr"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupTradingErrorTradeLink;