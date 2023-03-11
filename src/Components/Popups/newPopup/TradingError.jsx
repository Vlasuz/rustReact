import React from 'react';
import PopupCrossClose from "./PopupCrossClose";
import Translate from "../../../Hooks/Translate";

const TradingError = ({ props }) => {

    const errors = {
        "trade_error_1": <Translate>trade_error_1</Translate>,
        "trade_error_4": <Translate>trade_error_4</Translate>,
        "trade_error_5": <Translate>trade_error_5</Translate>,
        "trade_error_6": <Translate>trade_error_6</Translate>,
        "trade_error_7": <Translate>trade_error_7</Translate>,
        "trade_error_8": <Translate>trade_error_8</Translate>,
        "trade_error_9": <Translate>trade_error_9</Translate>,
        "trade_error_10": <Translate>trade_error_10</Translate>,
        "trade_error_11": <Translate>trade_error_11</Translate>,
        "Trade-link is empty": <Translate>Trade-link is empty</Translate>,
        "else-error": <Translate>else-error</Translate>,
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
                {
                    !props?.data?.message ? errors[props?.response?.message] : errors[props?.data?.message]
                }
            </p>
            <PopupCrossClose/>
        </div>
    );
};

export default TradingError;