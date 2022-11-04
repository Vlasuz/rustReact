import React from 'react';
import {Link} from "react-router-dom";

const ShopTop = () => {
    return (
        <div className="skins__top">
            <Link to={"/fight"} className="skins__back">
                <img src="images/back.svg" alt="Ico"/>
                <span>Режим схватка</span>
            </Link>
            <h1>Уникальные скины для режима</h1>
        </div>
    );
};

export default ShopTop;