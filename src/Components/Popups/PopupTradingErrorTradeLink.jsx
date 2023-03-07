import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";

const PopupTradingErrorTradeLink = () => {
    return (
        <div className="popup popup-trade popup-trade-error-link">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <span>Ошибка</span>
                    <div className="img">
                        <img src="../images/error-red.svg" alt="Error"/>
                    </div>
                </h2>
                <p>Вы не добавили трейд-ссылку в профиле</p>
                <PopupCloseCross />
                <div className="trade__buttons">
                    <button className="grey mini">
                        <span>К профилю</span>
                        <img src="../images/arr-td.svg" alt="Arr"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupTradingErrorTradeLink;