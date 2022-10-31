import React from 'react';
import TableTdUsers from "./TableTdUsers";
import TableTdCoins from "./TableTdCoins";
import TableTdBank from "./TableTdBank";
import TableTdStatus from "./TableTdStatus";
import TableTdDate from "./TableTdDate";

const TableFightItem = ({infoItem}) => {

    return (
        <div className="tr">

            <TableTdDate    infoItem={infoItem} />
            <TableTdUsers   infoItem={infoItem} />
            <TableTdCoins   infoItem={infoItem} />
            <TableTdBank    infoItem={infoItem} />
            <TableTdStatus  infoItem={infoItem} />

        </div>
    );
};

export default TableFightItem;