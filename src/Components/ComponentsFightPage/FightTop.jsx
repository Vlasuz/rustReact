import React from 'react';
import PopupNewRoom from "../Popups/PopupNewRoom";
import {Link} from "react-router-dom";

const FightTop = ({dataInfo}) => {

    return (
        <div className="section-shop__top">
            <PopupNewRoom dataInfo={dataInfo} />
            <div className="create-game">
                <p>Создайте комнату со своей ставкой</p>
                <div className="players">
                    <img src="images/users.svg" alt="Ico" />
                    <span>176</span>
                </div>
                <button className="create-game__button" onClick={e => document.querySelector('.popup-new-room').classList.add('popup_active')}>Создать игру</button>
            </div>
            <Link to={'/clothes-shop'} className="clothes-shop">
                <p>Магазин
                    <br/>костюмов</p>
                <img src="images/clothes-shop.svg" alt="Ico" />
            </Link>
        </div>
    );
};

export default FightTop;