import React, {useEffect} from 'react';
import PopupCloseBackground from "../../PopupCloseBackground";

const PopupAddCoinsByCodeChecking = ({pincode, checkingAcive, setCheckingAcive}) => {

    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    let checkingCode = () => {
        return (pincode == '1111 - 1111 - 1111') ?
            openPopup('popup-add-coins-pin-code-success') :
            openPopup('popup-add-coins-pin-code-fail')
    }

    // useEffect(() => {
    //     if(document.querySelector('.popup-add-coins-pin-code-checking').classList.contains('popup_active')){
    //         checkingCode()
    //     }
    // }, [checkingAcive])

    if(checkingAcive == true){
        checkingCode()
        setCheckingAcive(false)
    }

    return (
        <div className="popup popup-add-coins-pin-code-checking">
            <PopupCloseBackground />
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