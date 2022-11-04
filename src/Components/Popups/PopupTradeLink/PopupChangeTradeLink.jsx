import React from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupChangeTradeLink = ({tradeLink}) => {

    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    return (
        <div className="popup popup-trade-link-change">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Трейд-ссылка</h2>
                <p>Введите вашу трейд-ссылку Steam,
                    <br/>с ней можно пополнять баланс скинами</p>
                <PopupCloseCross />
                <div className="input">
                    <input className="trade-link__input" type="text" value={tradeLink}/>
                    <img src="images/lock.svg" alt="Ico"/>
                </div>
                <div className="trade-link__buttons">
                    <button
                        className="grey"
                        onClick={() => openPopup('popup-trade-link')}
                    >
                        Изменить
                    </button>
                    <a href="#">Где ее взять?</a>
                </div>
            </div>
        </div>
    );
};

export default PopupChangeTradeLink;