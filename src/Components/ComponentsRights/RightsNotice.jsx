import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";

const RightsNotice = () => {
    return (
        <div className="section-right__notice">
            <div className="notice__item notice__pererab"><span>Переработано</span>
                <img src="../images/green-check.svg" alt="Ico"/>
            </div>
            <div className="notice__item notice__sleepers-bought"><span>Спальники куплены</span>
                <img src="../images/green-check.svg" alt="Ico"/>
            </div>
            <div className="notice__item notice__no-cash"><span>Недостаточно средств</span>
                <img src="../images/status-error.svg" alt="Ico"/>
            </div>
        </div>
    );
};

export default RightsNotice;