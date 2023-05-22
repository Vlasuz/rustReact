import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import Translate from "../../Hooks/Translate";

const PopupFairGame = () => {

    const handleCopy = (e) => {
        let input = e.target.closest('li').querySelector('input')

        e.target.closest('.copy').classList.add('copied')

        setTimeout(() => {
            e.target.closest('.copy').classList.remove('copied')
        }, 500)

        input.select();
        input.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(input.value);
    }

    return (
        <div className="popup popup-fair-game">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <Translate>fair_game_title</Translate>
                </h2>
                <PopupCloseCross />
                <div className="popup-fair-game__border">
                    <h3>
                        <Translate>fair_game_data</Translate>
                    </h3>
                    <ul>
                        <li className={'bank-coins-info'}>
                            <p>
                                <Translate>fair_game_jackpot</Translate> <span>235900</span>
                            </p>
                        </li>
                        <li className={'hash-info'}>
                            <input type="text" id="hash-info-copy" />
                            <p>Random: <span>fb433ac0c175de6ce49105ae6f8b2050bcc7b17deaf41af83a1</span></p>
                            <div onClick={handleCopy} className="copy">
                                <span>
                                    <Translate>copied</Translate>
                                </span>
                                <img src="../images/copy-icon.svg" alt=""/>
                            </div>
                        </li>
                        <li className={'id-info'}>
                            <input type="text" id="id-info-copy" />
                            <p>Signature: <span>51df3b21ac453da53820hfcb7m</span></p>
                            <div onClick={handleCopy} className="copy">
                                <span>
                                    <Translate>copied</Translate>
                                </span>
                                <img src="../images/copy-icon.svg" alt=""/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="popup-fair-game__text">
                    <p><Translate>before_the_game</Translate></p>
                    <br />
                    <p><Translate>before_the_game_hash</Translate></p>
                    <br />
                    <p><Translate>before_the_game_end</Translate></p>
                    <a href={"https://api.random.org/signatures/form"} target={"_blank"} className="popup__close">
                        <Translate>fair_game_check</Translate>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopupFairGame;