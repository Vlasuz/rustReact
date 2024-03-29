import React from 'react';
import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import {useDispatch} from "react-redux";
import OpenPopup from "../../../Hooks/OpenPopup";

const AddCoinsMenu = () => {

    const dispatch = useDispatch()

    return (
        <div className="popup__content">
            <h2>
                <Translate>add_balance</Translate>
            </h2>
            <PopupCloseCross />
            <div className="popup-add-coins__var">
                {/*<button*/}
                {/*    className="var__item"*/}
                {/*    onClick={() => {dispatch(setOpenPopup('')); OpenPopup('popup-add-coins-pin-code')}}*/}
                {/*>*/}
                {/*    PIN CODE*/}

                {/*</button>*/}

                <button className="game__item" onClick={() => dispatch(setOpenPopup('popup-add-coins-skins'))}>
                    <img src="../images/rust.png" alt="Game"/>
                    <img src="../images/csgo.png" alt="Game"/>
                </button>
            </div>
            <div className="popup-add-coins__game">
                <button
                    className="var__item"
                    // onClick={() => {dispatch(setOpenPopup('')); OpenPopup('popup-add-coins-rub')}}
                    onClick={() => dispatch(setOpenPopup('popup-add-coins-balance popup-add-coins-balance-kzt'))}
                >
                    SKYCRYPTO KZT
                </button>

                <button
                    className="var__item"
                    // onClick={() => {dispatch(setOpenPopup('')); OpenPopup('popup-add-coins-rub')}}
                    onClick={() => dispatch(setOpenPopup('popup-add-coins-balance popup-add-coins-balance-uah'))}
                >
                    SKYCRYPTO UAH
                </button>

                <button
                    className="var__item"
                    // onClick={() => {dispatch(setOpenPopup('')); OpenPopup('popup-add-coins-rub')}}
                    onClick={() => dispatch(setOpenPopup('popup-add-coins-balance popup-add-coins-balance-rub'))}
                >
                    SKYCRYPTO RUB
                </button>
            </div>
        </div>
    );
};

export default AddCoinsMenu;