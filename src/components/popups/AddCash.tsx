import React from 'react'
import {PopupCross} from "../../hooks/popup/components/PopupCross";

import rustIcon from './../../assets/images/rust.png'
import csgoIcon from './../../assets/images/csgo.png'
import {useDispatch} from "react-redux";
import { setPopup } from '../../redux/toolkitSlice';

interface IAddCashProps {

}

export const AddCash: React.FC<IAddCashProps> = () => {

    const dispatch = useDispatch()

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
                <button className="var__item" onClick={_ => dispatch(setPopup("popup-add-coins-balance popup-add-coins-balance-kzt"))}>SKYCRYPTO KZT</button>
                <button className="var__item" onClick={_ => dispatch(setPopup("popup-add-coins-balance popup-add-coins-balance-uah"))}>SKYCRYPTO UAH</button>
                <button className="var__item" onClick={_ => dispatch(setPopup("popup-add-coins-balance popup-add-coins-balance-rub"))}>SKYCRYPTO RUB</button>
            </div>
        </>
    )
}
