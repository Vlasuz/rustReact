import React from 'react';
import PopupCloseCross from "../PopupCloseCross";
import PopupCloseBackground from "../PopupCloseBackground";
import Translate from "../../../Hooks/Translate";

const PopupSuccessAddedTradeLink = () => {

    return (
        <div className="popup popup-trade-link-success">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <Translate>trade_link</Translate>
                </h2>
                <p>
                    <Translate>trade_link_success</Translate>
                </p>
                <PopupCloseCross />
                <div className="success">
                    <div className="success__inner">
                        <img src="../images/check-blue.svg" alt="Close"/>
                        <span>
                            <Translate>trade_link_active</Translate>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupSuccessAddedTradeLink;