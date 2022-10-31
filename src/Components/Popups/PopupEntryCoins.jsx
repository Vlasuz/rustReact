import React from 'react';
import {NavLink} from "react-router-dom";
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";

const PopupEntryCoins = ({coins, onSetCoins, mainCoins}) => {

    let minusCoins = function () {
        onSetCoins(prevCoins => prevCoins - coins)
    }

    let moreCoins = function () {
        if (mainCoins >= coins) {
            return (
                <NavLink to={"/fight-running"}>
                    <button
                        onClick={minusCoins}
                    >
                        Внести ставку
                    </button>
                </NavLink>
            )
        } else {
            return (
                <button disabled>Недостаточно средств</button>
            )
        }
    }

    return (
        <div className="popup popup-entry-coins">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Комната</h2>
                <p className="subtitle">Тип ставки: <span>Валютой</span>
                </p>
                <PopupCloseCross />
                <div className="popup-entry-coins__info">
                    <p>Ставка в этой комнате</p>
                    <div className="info__coins">
                        <img src="images/header__coins.svg" alt="Ico"/>
                        <span>
                            {coins}
                        </span>
                    </div>
                </div>

                {moreCoins()}

            </div>
        </div>
    );
};

export default PopupEntryCoins;