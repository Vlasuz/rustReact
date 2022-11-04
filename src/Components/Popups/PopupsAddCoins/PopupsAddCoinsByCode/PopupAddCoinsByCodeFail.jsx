import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../../PopupCloseBackground";

const PopupAddCoinsByCodeFail = ({isFailCode}) => {

    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    const [time, setTime] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(last => last - 1)
        }, 1000)
        return () => clearInterval(interval)
    })

    let endFunc = function () {
        setTime(5)
        // openPopup('popup-add-coins-pin-code')
    }

    return (
        <div className="popup popup-add-coins-pin-code-fail">
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2>Пин-код</h2>
                <p>Код не действителен,
                    <br/>следущая попытка через:</p>
                <div className="code-fail">
                    <div className="code-fail__timer">
                        {
                            time >= 0 ? time : endFunc()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoinsByCodeFail;