import React from 'react';

const BalanceTop = ({dataInfo}) => {

    let openPopup = function () {
        document.querySelector('.popup-add-coins').classList.add('popup_active')
    }

    return (
        <div className="balance__top">
            <div className="balance__block">
                <h3>Баланс</h3>
                <div className="balance__coins">
                    <img src="images/header__coins.svg" alt="Ico"/>
                    <span>
                        {dataInfo.coins}
                    </span>
                </div>
            </div>
            <button className="balance__add" onClick={openPopup}><span>Пополнить</span>
                <img src="images/balance-add.svg" alt="Ico"/>
            </button>
        </div>
    );
};

export default BalanceTop;