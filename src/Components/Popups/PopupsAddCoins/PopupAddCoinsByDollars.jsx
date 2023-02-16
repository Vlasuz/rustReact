import React from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupAddCoinsByDollars = () => {

    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.'+nextPopup).classList.add('popup_active')
    }

    let chooseSum = function (e) {

        for( let a of document.querySelectorAll('.balance__cost li') ){
            a.classList.remove('li_active')
        }

        e.target.closest('li').classList.toggle('li_active')
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
                    <img src="../images/arr-td.svg" alt="Arr" />
                    <span>Способы оплаты</span>
                </a>
                <PopupCloseCross />
                <ul className="balance__cost">
                    <li>
                        <button
                            onClick={e => chooseSum(e)}
                        >
                            $1
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={e => chooseSum(e)}
                        >
                            $5
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={e => chooseSum(e)}
                        >
                            $10
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={e => chooseSum(e)}
                        >
                            $20
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={e => chooseSum(e)}
                        >
                            $40
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={e => chooseSum(e)}
                        >
                            $60
                        </button>
                    </li>
                </ul>
                <div className="balance__sum">
                    <p>Зачисление на баланс:</p>
                    <div className="sum">
                        <img src="../images/header__coins.svg" alt="Ico" />
                        <span>800</span>
                    </div>
                </div>
                <button onClick={() => openPopup('popup-add-coins-balance-linking')}>Перейти к оплате</button>
            </div>
        </div>
    );
};

export default PopupAddCoinsByDollars;