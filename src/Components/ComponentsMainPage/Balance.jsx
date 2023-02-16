import React from 'react';
import {Link} from "react-router-dom";
import BalanceHistory from "./BalanceHistory";
import BalanceTop from "./BalanceTop";

const Balance = () => {
    return (
        <div className="balance">
            <BalanceTop/>
            <BalanceHistory />
        </div>
    );
};

export default Balance;