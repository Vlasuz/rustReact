import React from 'react';
import {Link} from "react-router-dom";
import BalanceHistory from "./BalanceHistory";
import BalanceTop from "./BalanceTop";

const Balance = ({dataInfo}) => {
    return (
        <div className="balance">
            <BalanceTop dataInfo={dataInfo} />
            <BalanceHistory />
        </div>
    );
};

export default Balance;