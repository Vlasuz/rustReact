import React from 'react';

const TableTdCoins = ({infoItem}) => {
    return (
        <div className="td">
            <div className="td__coins">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                    {infoItem.coins}
                </span>
            </div>
        </div>
    );
};

export default TableTdCoins;