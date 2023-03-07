import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import PopupCrossClose from "./PopupCrossClose";

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
                <p>Перед началом каждой игры <span>случайным образом</span> генерируются (32 случайных символа) и
                    число, на котором закончится игра.</p>
                <br />
                <p>Они складываются между собой и хешируются с помощью sha256, после чего этот хэш
                    отображается <span>до того как начнется игра</span>.</p>
                <br />
                <p>В конце игры можно увидеть соль, с помощью которой была произведена генерация, и
                    убедиться, что хэш не менялся и все совпадает</p>
                <a href={"https://api.random.org/signatures/form"} target={"_blank"} className="popup__close">
                    <Translate>fair_game_check</Translate>
                </a>
            </div>
        </div>
    );
};

export default FairGame;