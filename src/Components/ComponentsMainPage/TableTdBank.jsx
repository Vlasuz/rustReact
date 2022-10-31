import React from 'react';

const TableTdBank = ({infoItem}) => {
    return (
        <div className="td">
            <div className="td__coins">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                        {infoItem.bank}
                    </span>
            </div>
        </div>
    );
};

export default TableTdBank;