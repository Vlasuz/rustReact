import React, {useEffect} from 'react';
import PopupCloseBackground from "../../PopupCloseBackground";

const PopupAddCoinsByCodeChecking = ({pincode, checkingCode, isCheckingCode, setPincode, setIsFailCode}) => {

    let openPopup = function (nextPopup) {
        if (document.querySelector('.popup_active')) {
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }


    setTimeout(() => {
        if (checkingCode) {
            isCheckingCode(false)

            if(pincode == '1111 - 1111 - 1111'){
                setPincode('')
                openPopup('popup-add-coins-pin-code-success')
            } else {
                setPincode('')
                openPopup('popup-add-coins-pin-code-fail')
                setIsFailCode(true)
            }
        }
    }, 1000)


    return (
        <div className="popup popup-add-coins-pin-code-checking">
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2>Пин-код</h2>
                <div className="checking-code">
                    <span>Проверка кода</span>
                    <div className="load">
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoinsByCodeChecking;