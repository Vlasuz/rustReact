import React from 'react';

const TableTdStatus = ({infoItem}) => {
    return (
        <div className="td">
            {(infoItem.status ? <img src="images/victory.svg" alt="Shield" /> : <img src="images/fail.svg" alt="Shield" /> )}
        </div>
    );
};

export default TableTdStatus;