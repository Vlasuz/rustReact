import React, {useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupAddTradeLink = (props) => {

    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    const [inputTradeLink, setInputTradeLink] = useState('')

    const successSubmit = function (e) {
        e.preventDefault()
        openPopup('popup-trade-link-success')
        props.states.setTradeLink(inputTradeLink)
    }

    return (
        <div className="popup popup-trade-link">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Трейд-ссылка</h2>
                <p>Введите вашу трейд-ссылку Steam,
                    <br/>с ней можно пополнять баланс скинами</p>
                <PopupCloseCross />
                <form
                    action="#"
                    onSubmit={e => successSubmit(e)}
                >
                    <input
                        className="trade-link__input"
                        type="text"
                        required
                        value={inputTradeLink}
                        onChange={e => setInputTradeLink(e.target.value)}
                    />
                    <div className="trade-link__buttons">
                        <button>
                            Сохранить
                        </button>
                        <a href="#">Где ее взять?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupAddTradeLink;