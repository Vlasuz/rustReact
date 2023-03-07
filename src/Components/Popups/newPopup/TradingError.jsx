import React from 'react';
import PopupCrossClose from "./PopupCrossClose";
import Translate from "../../../Hooks/Translate";

const TradingError = ({message}) => {

    const errors = {
        "trade_error_1": "Trade offer is invalid",
        "trade_error_4": "The recipient made a counter offer",
        "trade_error_5": "The trade offer was not accepted before the expiration date",
        "trade_error_6": "The sender cancelled the offer",
        "trade_error_7": "The recipient declined the offer",
        "trade_error_8": "Some of the items in the offer are no longer available (indicated by the missing flag in the output)",
        "trade_error_9": "The offer hasn't been sent yet and is awaiting email/mobile confirmation. The offer is only visible to the sender.",
        "trade_error_10": "Either party canceled the offer via email/mobile. The offer is visible to both parties, even if the sender canceled it before it was sent.",
        "trade_error_11": "The trade has been placed on hold. The items involved in the trade have all been removed from both parties' inventories and will be automatically delivered in the future.",
    }

    return (
        <div className="popup__content">
            <h2>
                <span>
                    <Translate>error</Translate>
                </span>
                <div className="img">
                    <img src="../images/error-red.svg" alt="Error"/>
                </div>
            </h2>
            <p>
                {errors[message]}
            </p>
            <PopupCrossClose/>
        </div>
    );
};

export default TradingError;