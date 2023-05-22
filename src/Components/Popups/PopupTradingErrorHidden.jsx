import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import Translate from "../../Hooks/Translate";

const PopupTradingErrorHidden = () => {
    return (
        <div className="popup popup-trade popup-trade-error-hidden">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <span><Translate>error</Translate></span>
                    <div className="img">
                        <img src="../images/error-red.svg" alt="Error"/>
                    </div>
                </h2>
                <p><Translate>hidden_inventory</Translate></p>
                <PopupCloseCross />
                <div className="trade__buttons">
                    <button className="grey">
                        <span><Translate>by_browser</Translate></span>
                    </button>
                    <button className="steam">
                        <span><Translate>by_steam_app</Translate></span>
                        <img src="../images/steam.svg" alt="Steam"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupTradingErrorHidden;