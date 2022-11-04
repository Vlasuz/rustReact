import React, {useEffect} from 'react';
import PopupCloseBackground from "../../PopupCloseBackground";
import PopupCloseCross from "../../PopupCloseCross";
import IMask from 'imask';

const PopupAddCoinsByCode = ({pincode, setPincode, setCheckingAcive, setIsFailCode}) => {

    let openPopup = function (nextPopup) {
        document.querySelector('.popup_active').classList.remove('popup_active')
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    useEffect(() => {
        IMask(document.querySelector('.input-pincode input'), {
            mask: '**** - **** - ****'
        });
    })

    const keyUpFunc = function (e) {

        setPincode(e.target.value)

        if (e.target.value.length <= 17) {
            e.target.closest('.form').querySelector('button').setAttribute('disabled', 'disabled')
            return;
        }
        e.target.closest('.form').querySelector('button').removeAttribute('disabled')

    }

    let checkingCode = function (e) {
        setCheckingAcive(true)
        setIsFailCode(true)
        openPopup('popup-add-coins-pin-code-checking')
    }

    return (
        <div className="popup popup-add-coins-pin-code">
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2>Пин-код <sub>(пин код для удачи 1111 - 1111 - 1111)</sub>
                </h2>
                <PopupCloseCross/>
                <div className={"form"}>
                    <label
                        className="popup-add-coins-pin-code__input input-pincode">
                        <span>Пин-код пополнения:</span>
                        <input
                            type="text"
                            placeholder="XXXX - XXXX - XXXX"
                            required
                            minLength="12"
                            value={pincode}
                            onChange={e => keyUpFunc(e)}
                        />
                    </label>
                    <button
                        // disabled
                        onClick={() => checkingCode()}
                    >
                        Применить купон
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoinsByCode;