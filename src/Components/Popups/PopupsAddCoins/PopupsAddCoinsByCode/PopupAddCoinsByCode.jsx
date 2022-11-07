import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../../PopupCloseBackground";
import PopupCloseCross from "../../PopupCloseCross";
import IMask from 'imask';

const PopupAddCoinsByCode = ({setPincode, isCheckingCode}) => {


    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    useEffect(() => {
        IMask(document.querySelector('.input-pincode input'), {
            mask: '**** - **** - ****'
        });
    })


    const [pinInput, setPinInput] = useState('')
    const clickToButton = function (e) {
        e.preventDefault()
        setPincode(pinInput)
        isCheckingCode(true)
        openPopup('popup-add-coins-pin-code-checking')
    }

    const keyUpFunc = function (e) {
        setPinInput(e.target.value)
        if (e.target.value.length <= 17) {
            e.target.closest('.form').querySelector('button').setAttribute('disabled', 'disabled')
            return;
        }
        e.target.closest('.form').querySelector('button').removeAttribute('disabled')
        return;
    }


    return (
        <div className="popup popup-add-coins-pin-code">
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2>Пин-код <sub>(пин код для удачи 1111 - 1111 - 1111)</sub>
                </h2>
                <PopupCloseCross/>
                <form
                    className={"form"}
                    action={"#"}
                    onSubmit={e => clickToButton(e)}
                >
                    <label
                        className="popup-add-coins-pin-code__input input-pincode">
                        <span>Пин-код пополнения:</span>
                        <input
                            type="text"
                            placeholder="XXXX - XXXX - XXXX"
                            required
                            minLength="12"
                            onChange={e => keyUpFunc(e)}
                            value={pinInput}
                        />
                    </label>
                    <button disabled="disabled">
                        Применить купон
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupAddCoinsByCode;