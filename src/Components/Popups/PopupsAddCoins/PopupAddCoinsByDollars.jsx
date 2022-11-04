import React from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupAddCoinsByDollars = () => {

    let openPopup = function (nextPopup) {
        document.querySelector('.popup_active').classList.remove('popup_active')
        document.querySelector('.'+nextPopup).classList.add('popup_active')
    }

    return (
        <div className="popup popup-add-coins-balance">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Пополнение баланса</h2>
                <a
                    className="back"
                    href="#"
                    onClick={() => openPopup('popup-add-coins')}
                >
                    <img src="images/arr-td.svg" alt="Arr" />
                    <span>Способы оплаты</span>
                </a>
                <PopupCloseCross />
                <ul className="balance__cost">
                    <li>
                        <button>$1</button>
                    </li>
                    <li>
                        <button>$5</button>
                    </li>
                    <li>
                        <button>$10</button>
                    </li>
                    <li>
                        <button>$20</button>
                    </li>
                    <li>
                        <button>$40</button>
                    </li>
                    <li>
                        <button>$60</button>
                    </li>
                </ul>
                <div className="balance__sum">
                    <p>Зачисление на баланс:</p>
                    <div className="sum">
                        <img src="images/header__coins.svg" alt="Ico" />
                        <span>800</span>
                    </div>
                </div>
                <button onClick="openPopup('add-coins-balance-linking')">Перейти к оплате</button>
            </div>
        </div>
    );
};

export default PopupAddCoinsByDollars;