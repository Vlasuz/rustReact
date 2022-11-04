import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";

const PopupFairGame = () => {
    return (
        <div className="popup popup-fair-game">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Честная игра</h2>
                <PopupCloseCross />
                <div className="popup-fair-game__border">
                    <h3>Данные раунда</h3>
                    <ul>
                        <li>
                            <p>
                                <span>Джекпот:  </span>235900</p>
                        </li>
                        <li>
                            <p>
                                <span>Hash:  </span>fb433ac0c175de6ce49105ae6f8b2050bcc7b17deaf41af83a1</p>
                        </li>
                        <li>
                            <p>
                                <span>Salt:  </span>51df3b21ac453da53820hfcb7m</p>
                        </li>
                    </ul>
                </div>
                <p>Перед началом каждой игры <span>случайным образом</span>генерируются (32 случайных символа) и
                    число, на котором закончится игра.</p>
                <br />
                <p>Они складываются между собой и хешируются с помощью sha256, после чего этот хэш
                    отображается <span>до того как начнется игра</span>.</p>
                <br />
                <p>В конце игры можно увидеть соль, с помощью которой была произведена генерация, и
                    убедиться, что хэш не менялся и все совпадает</p>
                <button className="popup__close">Проверить игру</button>
            </div>
        </div>
    );
};

export default PopupFairGame;