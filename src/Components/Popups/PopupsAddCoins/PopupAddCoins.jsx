import React from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupAddCoins = () => {

    let openPopup = function (nextPopup) {
        document.querySelector('.popup_active').classList.remove('popup_active')
        document.querySelector('.'+nextPopup).classList.add('popup_active')
    }

    return (
        <div className="popup popup-add-coins">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Пополнение баланса</h2>
                <PopupCloseCross />
                <div className="popup-add-coins__var">
                    <button
                        className="var__item"
                        onClick={() => openPopup('popup-add-coins-pin-code')}
                    >
                        Eu PinCode

                    </button>

                    <button
                        className="var__item"
                        onClick={() => openPopup('popup-add-coins-balance')}
                    >
                        Eu Gift
                    </button>

                    <button
                        className="var__item"
                        onClick={() => openPopup('popup-add-coins-skins')}
                    >
                        Eu Gift
                    </button>
                </div>
                <div className="popup-add-coins__game">
                    <button className="game__item">
                        <img src="images/dota.png" alt="Game"/>
                    </button>
                    <button className="game__item">
                        <img src="images/rust.png" alt="Game"/>
                    </button>
                    <button className="game__item">
                        <img src="images/csgo.png" alt="Game"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoins;