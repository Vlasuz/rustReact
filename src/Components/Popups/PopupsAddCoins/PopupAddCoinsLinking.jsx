import React from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import Translate from "../../../Hooks/Translate";

const PopupAddCoinsLinking = () => {
    return (
        <div className="popup popup-add-coins-balance-linking">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <Translate>add_balance</Translate>
                </h2>
                <p>
                    <Translate>redirection</Translate>...
                </p>
            </div>
        </div>
    );
};

export default PopupAddCoinsLinking;