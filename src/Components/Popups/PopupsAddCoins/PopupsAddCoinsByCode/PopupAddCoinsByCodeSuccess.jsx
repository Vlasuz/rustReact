import React from 'react';
import PopupCloseBackground from "../../PopupCloseBackground";
import PopupCloseCross from "../../PopupCloseCross";

const PopupAddCoinsByCodeSuccess = () => {
    return (
        <div className="popup popup-add-coins-pin-code-success">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Пин-код</h2>
                <p>Код успешно активирован!</p>
                <PopupCloseCross />
                <div className="code-success">
                    <div className="code-success__item">
                        <span>$10</span>
                    </div>
                    <div className="code-success__center">
                        <img src="images/green-check.svg" alt="Ico"/>
                    </div>
                    <div className="code-success__item">
                        <img src="images/header__coins.svg" alt="Coins" />
                        <span>800</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoinsByCodeSuccess;