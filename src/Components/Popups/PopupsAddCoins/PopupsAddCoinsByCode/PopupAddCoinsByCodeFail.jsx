import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../../PopupCloseBackground";

const PopupAddCoinsByCodeFail = ({isFailCode, setIsFailCode}) => {

    let openPopup = function (nextPopup) {
        if (document.querySelector('.popup_active')) {
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }


    // const [time, setTime] = useState(5)
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(last => last - 1)
    //     }, 1000)
    //     return () => clearInterval(interval)
    // })
    //
    // let endFunc = function () {
    //     setTime(5)
    //     openPopup('popup-add-coins-pin-code')
    // }

    const [time, setTime] = useState(5)

    if (isFailCode) {
        setIsFailCode(false)

        let timer = setInterval(() => {
            setTime(prev => prev - 1)

            setTimeout(() => {
                setTime(5)
                clearInterval(timer)
            }, 5000)
        }, 1000)

        setTimeout(() => {
            openPopup('popup-add-coins-pin-code')
        }, 5000)
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
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoinsByCodeFail;