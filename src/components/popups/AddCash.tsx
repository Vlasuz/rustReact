import React from 'react'
import {PopupCross} from "../../hooks/popup/components/PopupCross";

import rustIcon from './../../assets/images/rust.png'
import csgoIcon from './../../assets/images/csgo.png'

interface IAddCashProps {

}

export const AddCash: React.FC<IAddCashProps> = () => {

    return (
        <>
            <h2>Пополнение баланса</h2>
            <PopupCross/>
            <div className="popup-add-coins__var">
                <button className="game__item">
                    <img src={rustIcon} alt="Game"/>
                    <img src={csgoIcon} alt="Game"/>
                </button>
            </div>
            <div className="popup-add-coins__game">
                <button className="var__item">SKYCRYPTO KZT</button>
                <button className="var__item">SKYCRYPTO UAH</button>
                <button className="var__item">SKYCRYPTO RUB</button>
            </div>
        </>
    )
}
