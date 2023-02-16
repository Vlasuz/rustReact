import React from 'react';
import PopupCloseCross from "../PopupCloseCross";
import PopupCloseBackground from "../PopupCloseBackground";

const PopupSuccessAddedTradeLink = () => {

    return (
        <div className="popup popup-trade-link-success">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Трейд-ссылка</h2>
                <p>У вас получилось!</p>
                <PopupCloseCross />
                <div className="success">
                    <div className="success__inner">
                        <img src="../images/check-blue.svg" alt="Close"/>
                        <span>АКТИВНО</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupSuccessAddedTradeLink;