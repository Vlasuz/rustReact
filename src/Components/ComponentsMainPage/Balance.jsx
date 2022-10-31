import React from 'react';

const Balance = ({dataInfo}) => {
    return (
        <div className="balance">
            <div className="balance__top">
                <div className="balance__block">
                    <h3>Баланс</h3>
                    <div className="balance__coins">
                        <img src="images/header__coins.svg" alt="Ico" />
                        <span>
                            {dataInfo.coins}
                        </span>
                    </div>
                </div>
                {/*onClick="openPopup('add-coins')"*/}
                <button className="balance__add"><span>Пополнить</span>
                    <img src="images/balance-add.svg" alt="Ico" />
                </button>
            </div>
            <a className="balance__history" href="history.html">
                <img src="images/clock.svg" alt="Ico" /><span>Итория баланса</span>
            </a>
        </div>
    );
};

export default Balance;