import React from 'react';
import {Link} from "react-router-dom";

const BalanceHistory = () => {
    return (
        <Link to={"/history"} className="balance__history">
            <img src="images/clock.svg" alt="Ico" /><span>Итория баланса</span>
        </Link>
    );
};

export default BalanceHistory;