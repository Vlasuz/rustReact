import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import PopupCrossClose from "./PopupCrossClose";
import parse from "html-react-parser";
import React from "react";

const FairGame = ({ data, hash, jackpot }) => {

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
        <div className="popup__content">
            <h2>
                <Translate>fair_game_title</Translate>
            </h2>
            <PopupCrossClose />
            <div className="popup-fair-game__border">
                <h3>
                    <Translate>fair_game_data</Translate>
                </h3>
                <ul>
                    <li className={'bank-coins-info'}>
                        <p>
                            <Translate>fair_game_jackpot</Translate> <span>{jackpot && jackpot}</span>
                        </p>
                    </li>
                    <li className={'hash-info'}>
                        <input type="text" id="hash-info-copy" readOnly value={data && data} />
                        <p>Random: <span>
                            {data && data}
                        </span></p>
                        <div onClick={handleCopy} className="copy">
                                <span>
                                    <Translate>copied</Translate>
                                </span>
                            <img src="../images/copy-icon.svg" alt=""/>
                        </div>
                    </li>
                    <li className={'id-info'}>
                        <input type="text" id="id-info-copy" readOnly value={hash && hash} />
                        <p>Signature: <span>
                            {hash && hash}
                        </span></p>
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
                <p><div dangerouslySetInnerHTML={{__html: <Translate>before_the_game_end</Translate>}}></div></p>
                <a href={"https://api.random.org/signatures/form"} target={"_blank"} className="popup__close">
                    <Translate>fair_game_check</Translate>
                </a>
            </div>
        </div>
    );
};

export default FairGame;