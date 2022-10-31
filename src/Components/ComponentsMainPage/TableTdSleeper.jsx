import React from 'react';

const TableTdSleeper = ({infoItem}) => {
    return (
        <div className="td">
            {infoItem.sleepers}
        </div>
    );
};

export default TableTdSleeper;