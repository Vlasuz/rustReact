import React from 'react';
import TableTdUsers from "./TableTdUsers";
import TableTdCoins from "./TableTdCoins";
import TableTdBank from "./TableTdBank";
import TableTdStatus from "./TableTdStatus";
import TableTdCode from "./TableTdCode";
import TableTdSleeper from "./TableTdSleeper";
import TableTdDate from "./TableTdDate";

const TableAirdropItem = ({infoItem}) => {
    return (
        <div className="tr">
            <TableTdDate    infoItem={infoItem} />
            <TableTdSleeper infoItem={infoItem} />
            <TableTdUsers   infoItem={infoItem} />
            <TableTdCoins   infoItem={infoItem} />
            <TableTdBank    infoItem={infoItem} />
            <TableTdCode    infoItem={infoItem} />
            <TableTdStatus  infoItem={infoItem} />
        </div>
    );
};

export default TableAirdropItem;