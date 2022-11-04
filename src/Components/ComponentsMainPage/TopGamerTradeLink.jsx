import React, {useState} from 'react';
import PopupAddTradeLink from "../Popups/PopupTradeLink/PopupAddTradeLink";
import PopupSuccessAddedTradeLink from "../Popups/PopupTradeLink/PopupSuccessAddedTradeLink";
import PopupChangeTradeLink from "../Popups/PopupTradeLink/PopupChangeTradeLink";

const TopGamerTradeLink = ({tradeLink, setTradeLink}) => {


    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    return (
        <>

            <PopupSuccessAddedTradeLink />
            <PopupAddTradeLink
                tradeLink={tradeLink}
                setTradeLink={setTradeLink}
            />

            { tradeLink.length > 0 ?

                <div className="top-gamer__trade-link">
                    <PopupChangeTradeLink tradeLink={tradeLink} />
                    <div className="trade-link__block">
                        <h3>Trade-ссылка</h3>
                        <button
                            className="trade-link__button"
                            onClick={() => openPopup('popup-trade-link-change')}
                        >
                            Изменить
                        </button>
                    </div>
                    <div className="trade-link__check">
                        <img src="images/active.svg" alt="Photo"/><span>АКТИВНО</span>
                    </div>
                </div>

                :

                <div className="top-gamer__trade-link top-gamer__trade-link_nonactive">
                    <div className="trade-link__block">
                        <h3>Trade-ссылка</h3>
                        <button
                            className="trade-link__button"
                            onClick={() => openPopup('popup-trade-link')}
                        >
                            Добавить
                        </button>
                    </div>
                    <div className="trade-link__check">
                        <img src="images/nonactive.svg" alt="Photo"/>
                        <span>НЕ АКТИВНО</span>
                    </div>
                </div>

            }


        </>
    );
};

export default TopGamerTradeLink;