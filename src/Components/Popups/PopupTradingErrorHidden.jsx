import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";

const PopupTradingErrorHidden = () => {
    return (
        <div className="popup popup-trade popup-trade-error-hidden">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <span>Ошибка</span>
                    <div className="img">
                        <img src="../images/error-red.svg" alt="Error"/>
                    </div>
                </h2>
                <p>Ваш инвентарь в steam скрыт,
                    <br/>откройте его у себя в настройках</p>
                <PopupCloseCross />
                <div className="trade__buttons">
                    <button className="grey">
                        <span>Через браузер</span>
                    </button>
                    <button className="steam">
                        <span>Через Steam</span>
                        <img src="../images/steam.svg" alt="Steam"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupTradingErrorHidden;