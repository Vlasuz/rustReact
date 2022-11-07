import React from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupOutputSearch = () => {
    return (
        <div className="popup popup-pull-search">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Статус ботов</h2>
                <PopupCloseCross />
                <div className="popup-pull-search__text">
                    <p>Подбираем ботов</p>
                    <div className="load">
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupOutputSearch;