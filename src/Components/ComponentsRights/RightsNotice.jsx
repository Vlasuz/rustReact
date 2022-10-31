import React from 'react';

const RightsNotice = () => {
    return (
        <div className="section-right__notice">
            <div className="notice__item notice__block-chat"><span>Доступ к чату заблокирован, ограничения снимутся через 00:15:32 </span>
                <img src="images/status-error.svg" alt="Ico"/>
            </div>
            <div className="notice__item notice__pererab"><span>Переработано</span>
                <img src="images/green-check.svg" alt="Ico"/>
            </div>
            <div className="notice__item notice__sleepers-bought"><span>Спальники куплены</span>
                <img src="images/green-check.svg" alt="Ico"/>
            </div>
            <div className="notice__item notice__no-cash"><span>Недостаточно средств</span>
                <img src="images/status-error.svg" alt="Ico"/>
            </div>
            <div className="notice__item notice__add-cart"><span>Добавлен в корзину</span>
                <img src="images/green-check.svg" alt="Check"/>
            </div>
        </div>
    );
};

export default RightsNotice;