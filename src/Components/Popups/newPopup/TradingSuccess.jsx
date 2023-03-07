import React from 'react';
import PopupCrossClose from "./PopupCrossClose";

const TradingSuccess = () => {
    return (
        <div className="popup__content">
            <h2 className="green">
                <span>Отлично</span>
                <div className="img">
                    <img src="../images/green-check.svg" alt="Error"/>
                </div>
            </h2>
            <p>Сделка завершена</p>
            <PopupCrossClose/>
        </div>
    );
};

export default TradingSuccess;