import React from 'react';

const TableTdCode = ({infoItem}) => {

    let code = infoItem.code.substr(0, 5) + '...' + infoItem.code.substr(-6, 6);

    return (
        <div className="td">
            <div className="shield">
                <img src="../images/shield.svg" alt="Shield" />
                <a href="#">
                    {code}
                </a>
            </div>
        </div>
    );
};

export default TableTdCode;