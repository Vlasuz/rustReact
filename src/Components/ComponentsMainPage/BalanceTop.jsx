import React from 'react';
import {Trans, useTranslation} from "react-i18next";

const BalanceTop = ({dataInfo}) => {

    let openPopup = function () {
        document.querySelector('.popup-add-coins').classList.add('popup_active')
    }

    const {t} = useTranslation();
    return (
        <div className="balance__top">
            <div className="balance__block">
                <h3>
                    <Trans t={t}>text_balance</Trans>
                </h3>
                <div className="balance__coins">
                    <img src="images/header__coins.svg" alt="Ico"/>
                    <span>
                        {dataInfo.coins}
                    </span>
                </div>
            </div>
            <button className="balance__add" onClick={openPopup}>
                <span>
                    <Trans t={t}>text_add_cash</Trans>
                </span>
                <img src="images/balance-add.svg" alt="Ico"/>
            </button>
        </div>
    );
};

export default BalanceTop;